import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import axios from "../api/axios.jsx";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const result = await axios.get("/product");
      setProducts(result.data.products);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default function useProductContext() {
  return useContext(ProductContext);
}
