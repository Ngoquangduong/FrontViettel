import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";

const CategoryContext = createContext({});

export const CategoryProvider = ({ children }) => {
  const [categories, setCategory] = useState([]);
  const [category, setCategoryDetail] = useState({});
  const [errors, setErrors] = useState([]);
  const [exportCategory, setExportCategory] = useState([]);
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const navigate = useNavigate();
  const getCategory = async () => {
    try {
      await csrf(); // Xác thực trước
      const result = await axios.get("/category");
      setCategory(result.data.categories);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/admin/category");
      }
    }
  };

  const getCategoryDetail = async (id) => {
    try {
      await csrf(); // Xác thực trước
      const result = await axios.get("/category/" + id);
      setCategoryDetail(result.data.category);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/admin/category");
      }
    }
  };
  const insertCategory = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.post("/category/insert", data);
      await getCategory();
      toast.success("Thêm Thành Công!");
      //   navigate("/");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Thêm Không Thành Công!");
    }
  };
  const updateCategory = async (id, { ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.patch("/category/update/" + id, data);
      await getCategory();
      toast.success("Sửa Thành Công!");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Sửa Không Thành Công!");
    }
  };

  const deleteCategory = async (id) => {
    await csrf();
    setErrors([]);
    try {
      await axios.delete("/category/destroy/" + id);
      await getCategory();
      toast.success("Xóa Thành Công!");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.success("Xóa Không Thành Công!");
    }
  };
  const getExportCategory = async () => {
    await csrf();
    try {
      const result = await axios.get("/categories/export");
      setExportCategory(result.data.categories);
    } catch (e) {
      console.log(e);
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
        category,
        exportCategory,
        setCategoryDetail,
        getCategoryDetail,
        getCategory,
        insertCategory,
        updateCategory,
        deleteCategory,

        getExportCategory,
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
