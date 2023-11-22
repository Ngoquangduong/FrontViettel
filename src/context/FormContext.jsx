import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import axios from "../api/axios.jsx";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const [cities, setCity] = useState([]);
  const [districts, setDitrict] = useState([]);
  const [payments, setPayment] = useState([]);

  const getCity = async () => {
    try {
      const result = await axios.get("/city");
      setCity(result.data.cities);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getDitrict = async () => {
    try {
      const result = await axios.get("/district");
      setDitrict(result.data.districts);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getPayment = async () => {
    try {
      const result = await axios.get("/payment");
      setPayment(result.data.payments);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  useEffect(() => {
    getCity();
    getDitrict();
    getPayment();
  }, []);
  // console.log(city);
  return (
    <FormContext.Provider value={{ cities, districts, payments }}>
      {children}
    </FormContext.Provider>
  );
};
export default function useFormContext() {
  return useContext(FormContext);
}
