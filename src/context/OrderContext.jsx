import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";
import { toast } from "react-toastify";

const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState([]);
  const [order, setOrder] = useState([]);
  const [exportOrderUnAccept, setExportOrderUnAccept] = useState([]);
  const [exportOrderAccept, setExportOrderAccept] = useState([]);

  const getOrders = async () => {
    try {
      const result = await axios.get("/orders");
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
      toast.success("Đăng Ký Thành Công!");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Đăng Ký Không Thành Công!");
    }
  };
  const Accept = async (id) => {
    try {
      await axios.get(`/Order/accept/` + id);
      await getOrders();
      toast.success("Xác Nhận Thành Công!");
    } catch (error) {
      console.error("Error fetching order data:", error);
      toast.error("Xác Nhận Không Thành Công!");
    }
  };
  const UnAccept = async (id) => {
    try {
      await axios.get(`/Order/unaccept/` + id);
      await getOrders();
      toast.success("Hủy Xác Nhận Thành Công!");
    } catch (error) {
      console.error("Error fetching order data:", error);
      toast.error("Hủy Xác Nhận Không Thành Công!");
    }
  };
  const updateOrder = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch(`/order/update` + id, data);
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
      await axios.delete(`/Order/destroy/` + id);
      await getOrders();
      toast.success("Xóa Thành Công!");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
      toast.error("Xóa Không Thành Công!");
    }
  };
  const getExportOrderAccept = async () => {
    try {
      await csrf();
      result = await axios.get("/order/export/Accept");
      setExportOrderAccept(result.data.orders);
      // toast.success("Xuất file thành công");
    } catch (e) {
      // toast.error("Xuất file không thành công");
    }
  };
  const getExportOrderUnAccept = async () => {
    try {
      await csrf();
      const result = await axios.get("/order/export/UnAccept");
      setExportOrderUnAccept(result.data.orders);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        order,
        errors,
        exportOrderAccept,
        exportOrderUnAccept,
        getOrderDetail,
        insertOrder,
        Accept,
        UnAccept,
        deleteOrder,
        getExportOrderAccept,
        getExportOrderUnAccept,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
export default function useOrderContext() {
  return useContext(OrderContext);
}
