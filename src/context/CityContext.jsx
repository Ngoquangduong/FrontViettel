import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const CityContext = createContext({});
export const CityProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState([]);
  const [city, setCity] = useState([]);

  const getCities = async () => {
    try {
      const result = await axios.get("/city");
      setCities(result.data.cities);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getCityDetail = async () => {
    try {
      const result = await axios.get("/city/" + id);
      setCity(result.data.city[0]);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  const insertCity = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/city/insert", data);
      await getCities();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateCity = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/city/update" + id, data);
      await getCities();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteCity = async (id) => {
    await csrf();
    try {
      await axios.patch("/city/delete" + id);
      await getCities();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    if (cities.length === 0) {
      getCities();
    }
  }, [cities]);

  return (
    <CityContext.Provider value={{ cities, city, getCityDetail }}>
      {children}
    </CityContext.Provider>
  );
};
export default function useCityContext() {
  return useContext(CityContext);
}
