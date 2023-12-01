import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState([]);
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    try {
      
      const result = await axios.get("/category");
      setCategories(result.data.categories);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  const getCategoryDetail = async () => {
    try {
      const result = await axios.get("/category/" + id);
      setCategory(result.data.category[0]);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const insertCategory = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/category/insert", data);
      await getCategories();
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
      await getCategories();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deletecategory = async (id) => {
    await csrf();
    try {
      await axios.patch("/category/delete" + id);
      await getCategories();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getCategries();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, category getCategoryDetail }}>
      {children}
    </CategoryContext.Provider>
  );
};
export default function useCategoryContext() {
  return useContext(CategoryContext);
}
