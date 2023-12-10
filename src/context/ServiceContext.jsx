import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const ServiceContext = createContext({});

export const ServiceProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [services, setOrders] = useState([]);
  const [errors, setErrors] = useState([]);
  const [service, setService] = useState([]);

  const getServices = async () => {
    try {
      
      const result = await axios.get("/service");
      setOrders(result.data.services);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getServiceDetail = async () => {
    try {
      const result = await axios.get("/services/" + id);
      setService(result.data.service[0]);
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
  };

  const insertService = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/service/insert", data);
      await getServices();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateService = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/service/update" + id, data);
      await getServices();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteService = async (id) => {
    await csrf();
    try {
      await axios.patch("/service/delete" + id);
      await getServices();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getServices();
  }, []);

  return (
    <ServiceContext.Provider value={{ services, service, getServiceDetail }}>
      {children}
    </ServiceContext.Provider>
  );
};
export default function useServiceContext() {
  return useContext(ServiceContext);
}
