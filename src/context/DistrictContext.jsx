import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const DistrictContext = createContext({});

export const DistrictProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [Districts, setDistricts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [District, setDistrict] = useState([]);

  const getDistricts = async () => {
    try {
      
      const result = await axios.get("/District");
      setDistricts(result.data.Districts);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getDistrictDetail = async () => {
    try {
      const result = await axios.get("/District/" + id);
      setDistrict(result.data.District[0]);
    } catch (error) {
      console.error("Error fetching District data:", error);
    }
  };

  const insertDistrict = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/District/insert", data);
      await getDistricts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateDistrict = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/District/update" + id, data);
      await getDistricts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteDistrict = async (id) => {
    await csrf();
    try {
      await axios.patch("/District/delete" + id);
      await getDistricts();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getDistricts();
  }, []);

  return (
    <DistrictContext.Provider value={{ Districts, District, getDistrictDetail }}>
      {children}
    </DistrictContext.Provider>
  );
};
export default function useDistrictContext() {
  return useContext(DistrictContext);
}
