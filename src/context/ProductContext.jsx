import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { data } from "autoprefixer";
// import { data } from "autoprefixer";

// ... (imports)

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  // getProduct

  const [product, setProductDetail] = useState({});

  //-------------Filter--------------
  // set Variable

  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [productExport, setProductExport] = useState([]);

  // const { id } = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      // await csrf();
      const result = await axios.get(`/product`);
      setProducts(result.data.products);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  // getProductDetail-------------------------
  const getProductDetail = async (id) => {
    try {
      // console.log(id);
      // await csrf();
      const result = await axios.get("/product/detail/" + id);
      // setProduct(result.data.product[0]);
      setProductDetail(result.data.product[0]);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  // getFilter ---------------------------
  // const getFilter = async () => {
  //   try {
  //     // Ensure these are defined
  //     const data = {
  //       CategoryID: selectedCategory,
  //       sort: sort,
  //       min_Price: minPrice,
  //       max_Price: maxPrice,
  //     };

  //     const result = await axios.post("/product/filter", data);
  //     console.log(result.data.products);
  //     setProducts(result.data.products);
  //   } catch (error) {
  //     console.error("Error fetching city data:", error);
  //   }
  // };

  //------------- Search---------------------

  const insertProduct = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    // try {
    await axios.post("/product/insert", data);
    await getProducts();
    toast.success("Thêm thành công");
    // } catch (e) {
    //   if (e.response.status === 422) {
    //     setErrors(e.response.data.errors);
    //   }
    // }
  };

  const updateProduct = async (id, { ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.patch(`/product/update/${id}`, data);
      await getProducts();
      toast.success("chỉnh sửa thành công");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("chỉnh sửa thất bại");
    }
  };

  const deleteProduct = async (id) => {
    await csrf();
    setErrors([]);
    try {
      await axios.delete("/product/delete/" + id);
      await getProducts();
      toast.success("xóa thành công");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Xóa không thành công");
    }
  };
  const getProductExport = async () => {
    try {
      await csrf();
      const result = await axios.get("/product/export");
      setProductExport(result.data.products);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    // console.log("hello");
    if (products.length === 0) {
      getProducts();
    }
  }, [products]); // Make sure to include id in the dependency array to re-fetch data when id changes

  return (
    <ProductContext.Provider
      value={{
        products,
        errors,
        product,
        productExport,
        getProducts,
        setProductDetail,
        getProductDetail,
        insertProduct,
        updateProduct,
        deleteProduct,
        getProductExport,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default function useProductContext() {
  return useContext(ProductContext);
}
