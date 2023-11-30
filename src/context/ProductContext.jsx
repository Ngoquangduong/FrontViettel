import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
// import { data } from "autoprefixer";

// ... (imports)

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getProducts = async (page = 1) => {
    try {
      const result = await axios.get(`/product?page=${page}`);
      
      setProducts(result.data.products.data);
      setTotalProduct(result.data.products.total);
      setTotalPages(result.data.products.last_page);
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
      await getProducts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateProduct = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/product/update" + id, data);
      await getProducts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteProduct = async (id) => {
    await csrf();
    try {
      await axios.delete("/product/delete" + id);
      await getProducts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    if (id) {
      getProductDetail();
    }
    
  }, [id, products]); // Make sure to include id in the dependency array to re-fetch data when id changes
 
  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        totalPages,
        totalProduct,
        getProducts,
        getProductDetail,
        insertProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default function useProductContext() {
  return useContext(ProductContext);
}
