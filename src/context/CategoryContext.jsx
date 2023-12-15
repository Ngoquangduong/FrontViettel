import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../api/axios";


const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {

  const [categories, setCategory] = useState([]);
  const [errors, setErrors] = useState([]);
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const navigate = useNavigate();
  const getCategory = async () => {
    try {
      await csrf(); // Xác thực trước
      const result  = await axios.get("/category");
      setCategory(result.data.categories);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/admin/category");
      }
    }
  };

  const insertCategory = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/category/insert", data);

      getCategory();
      //   navigate("/");

    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateCategory = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/category/update" + id, data);

      await getCategory();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteCategory = async (id) => {
    await csrf();
    try {
      await axios.delete("/category/delete" + id);
      await getCategory();

    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {

    if (categories.length === 0) {
      getCategory();
    }
  }, [categories]);
  return (
    <CategoryContext.Provider
      value={{
        categories,
        errors,
        getCategory,
        insertCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {" "}
      {children}{" "}
    </CategoryContext.Provider>
  );
};
export default function useCategoryContext() {
  return useContext(CategoryContext);
}
