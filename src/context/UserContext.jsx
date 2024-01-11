import { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "../api/axios.jsx";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const { id } = useParams();
  const csrf = () => axios.get("/sanctum/csrf-cookie");
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    try {
      const result = await axios.get("/api/hello");
      setUsers(result.data.users);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const getUserDetail = async () => {
    try {
      const result = await axios.get("/user/" + id);
      setUser(result.data.user[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const insertUser = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("/user/insert", data);
      await getUsers();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateUser = async (id, { ...data }) => {
    await csrf();
    try {
      await axios.patch("/user/update" + id, data);
      await getUsers();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const deleteUser = async (id) => {
    await csrf();
    try {
      await axios.patch("/user/delete" + id);
      await getUsers();
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, user, getUserDetail }}>
      {children}
    </UserContext.Provider>
  );
};
export default function useUserContext() {
  return useContext(UserContext);
}
