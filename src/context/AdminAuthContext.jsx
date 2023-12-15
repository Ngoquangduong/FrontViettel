import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../api/axios.jsx";

import { useNavigate } from "react-router-dom";

import axios from "../api/axios.jsx";

const AdminAuthContext = createContext({});

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [errors, setErrors] = useState([]);
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const navigate = useNavigate();

  const getAdmin = async () => {
    const { data } = await axios.get("/api/admin");
    // Only update the admin state if the data is different
    if (JSON.stringify(data) !== JSON.stringify(admin)) {
      setAdmin(data);
    }
  };

  const login = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.post("/admin/login", data);
      await getAdmin();
      navigate("/admin");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const register = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      // console.log(data);
      await axios.post("/admin/register", data);
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const logout = () => {
    axios.post("/admin/logout").then(() => {
      setAdmin(null);
    });
  };

  useEffect(() => {
    if (!admin) {
      getAdmin();
    }
  }, [admin, getAdmin]);
  return (
    <AdminAuthContext.Provider
      value={{ admin, errors, login, register, logout, getAdmin }}
    >
      {" "}
      {children}{" "}
    </AdminAuthContext.Provider>
  );
};
export default function useAdminAuthContext() {
  return useContext(AdminAuthContext);
}
