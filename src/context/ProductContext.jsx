import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
// import { data } from "autoprefixer";

// ... (imports)

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  // getProduct
  const [totalProduct, setTotalProduct] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(8);
  const [totalPages, setTotalPages] = useState(0);

  //-------------Filter--------------
  // set Variable

  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState({});
  // const { id } = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    try {

      const result = await axios.get(`/product`);

      setProducts(result.data.products);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  // getProductDetail-------------------------
  const getProductDetail = async (id) => {
    try {
      const result = await axios.get("/product/" + id);
      setProduct(result.data.product[0]);
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    // if (id) {
    //   getProductDetail();
    // }
    // console.log(product);
  }, [products]); // Make sure to include id in the dependency array to re-fetch data when id changes

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        totalPages,
        totalProduct,
        productPerPage,
        currentPage,
        paginate,
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
