import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    try {
      const result = await axios.get("/product");
      setProducts(result.data.products);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getProductDetail = async () => {
    try {
      const result = await axios.get("/product/" + id);
      setProduct(result.data.product[0]);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const insertProduct = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/product/insert", data);
      getProducts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateProduct = async (id, { ...data}) => {
    await csrf();
    try {
      await axios.patch("/product/update" + id, data);
      getProducts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteProduct = async (id ) => {
    await csrf();
    try {
      await axios.patch("/product/delete" + id);
      getProducts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, product, getProductDetail }}>
      {children}
    </ProductContext.Provider>
  );
};
export default function useProductContext() {
  return useContext(ProductContext);
}
