import { createContext, useContext, useEffect, useState } from "react";
// import axios from "../api/axios.jsx";

import { useNavigate } from "react-router-dom";

import axios from "../api/axios.jsx";

const AdminAuthContext = createContext({});

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [errors, setErrors] = useState([]);
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const navigate = useNavigate();

  const getAdmin = async () => {
    try {
      const { data } = await axios.get("/api/admin");
      // Only update the admin state if the data is different
      if (JSON.stringify(data) !== JSON.stringify(admin)) {
        setAdmin(data);
      }
    } catch (e) {
      return;
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
      await getAdmins();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const getAdmins = async () => {
    await csrf();
    setErrors([]);
    try {
      const result = await axios.get("/admins");
      setAdmins(result.data.admins);
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
      value={{
        admin,
        admins,
        errors,
        login,
        register,
        logout,
        getAdmin,
        getAdmins,
      }}
    >
      {" "}
      {children}{" "}
    </AdminAuthContext.Provider>
  );
};
export default function useAdminAuthContext() {
  return useContext(AdminAuthContext);
}
