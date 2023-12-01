import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const PaymentContext = createContext({});

export const PaymentProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [Payments, setPayments] = useState([]);
  const [errors, setErrors] = useState([]);
  const [Payment, setPayment] = useState([]);

  const getPayments = async () => {
    try {
      
      const result = await axios.get("/Payment");
      setPayments(result.data.Payments);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getPaymentDetail = async () => {
    try {
      const result = await axios.get("/Payment/" + id);
      setPayment(result.data.Payment[0]);
    } catch (error) {
      console.error("Error fetching Payment data:", error);
    }
  };

  const insertPayment = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/Payment/insert", data);
      await getPayments();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updatePayment = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/Payment/update" + id, data);
      await getPayments();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deletePayment = async (id) => {
    await csrf();
    try {
      await axios.patch("/Payment/delete" + id);
      await getPayments();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getPayments();
  }, []);

  return (
    <PaymentContext.Provider value={{ Payments, Payment, getPaymentDetail }}>
      {children}
    </PaymentContext.Provider>
  );
};
export default function usePaymentContext() {
  return useContext(PaymentContext);
}
