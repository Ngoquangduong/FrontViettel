import { Navigate, Outlet } from "react-router-dom";
import useAdminAuthContext from "../context/AdminAuthContext";

const AuthAdminLayout = () => {
  const { admin } = useAdminAuthContext();
  return admin ? <Outlet></Outlet> : <Navigate to={"/admin/login"}></Navigate>;
};
export default AuthAdminLayout;
