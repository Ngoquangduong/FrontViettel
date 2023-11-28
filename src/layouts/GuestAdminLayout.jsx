import { Navigate, Outlet } from "react-router-dom";
import useAdminAuthContext from "../context/AdminAuthContext";

const GuestAdminLayout = () => {
  const { admin } = useAdminAuthContext();
  return !admin ? <Outlet></Outlet> : <Navigate to={"/admin"}></Navigate>;
};

export default GuestAdminLayout;
