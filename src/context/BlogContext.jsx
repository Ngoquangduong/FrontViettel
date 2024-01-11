import { createContext, useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-toastify";

const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [errors, setErrors] = useState([]);
  // const [exportBlog, setExportBlog] = useState([]);
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const navigate = useNavigate();
  const getBlogs = async () => {
    try {
      // await csrf(); // Xác thực trước

      const result = await axios.get("/blogs");
      setBlogs(result.data.blogs);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/admin/blog");
      }
    }
  };

  const getBlogDetail = async (id) => {
    try {
      // await csrf(); // Xác thực trước
      const result = await axios.get("/blog/detail/" + id);
      setBlog(result.data.blog);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        navigate("/admin/blog");
      }
    }
  };
  const insertBlog = async ({ ...data }) => {
    await csrf();
    // console.log(data.TitleImage);
    setErrors([]);
    try {
      await axios.post("/blog/insert", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await getBlogs();
      toast.success("Thêm Thành Công!");
      //   navigate("/");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Thêm Không Thành Công!");
    }
  };
  const updateBlog = async (id, { ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.post("/blog/update/" + id, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await getBlogs();
      toast.success("Sửa Thành Công!");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Sửa Không Thành Công!");
    }
  };

  const deleteBlog = async (id) => {
    await csrf();
    setErrors([]);
    try {
      await axios.delete("/blog/destroy/" + id);
      await getBlogs();
      toast.success("Xóa Thành Công!");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.success("Xóa Không Thành Công!");
    }
  };
  // const getExportBlog = async () => {
  //   await csrf();
  //   try {
  //     const result = await axios.get("/blog/export");
  //     setExportBlog(result.data.categories);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  useEffect(() => {
    if (blogs.length === 0) {
      getBlogs();
    }
  }, [blogs]);
  return (
    <BlogContext.Provider
      value={{
        blogs,
        blog,
        errors,
        getBlogDetail,
        insertBlog,
        updateBlog,
        deleteBlog,
      }}
    >
      {" "}
      {children}{" "}
    </BlogContext.Provider>
  );
};
export default function useBlogContext() {
  return useContext(BlogContext);
}
