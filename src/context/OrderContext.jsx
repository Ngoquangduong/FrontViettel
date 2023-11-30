import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState([]);
  const [order, setOrder] = useState([]);

  const getOrders = async () => {
    try {
      
      const result = await axios.get("/order");
      setOrders(result.data.orders);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getOrderDetail = async () => {
    try {
      const result = await axios.get("/order/" + id);
      setOrder(result.data.order[0]);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  const insertOrder = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/order/insert", data);
      await getOrders();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateOrder = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/order/update" + id, data);
      await getOrders();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteOrder = async (id) => {
    await csrf();
    try {
      await axios.patch("/order/delete" + id);
      await getOrders();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, order, getOrderDetail }}>
      {children}
    </OrderContext.Provider>
  );
};
export default function useOrderContext() {
  return useContext(OrderContext);
}
