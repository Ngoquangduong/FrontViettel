import "./assets/CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Adminhome from "./admin/admin";
import Usermanagement from "./admin/usermanage";
import Ordermanagment from "./admin/ordermanagment";
import Productmanagment from "./admin/productmanagment";
import Productedit from "./admin/productedit";

import AuthAdminLayout from "./layouts/AuthAdminLayout";
import GuestAdminLayout from "./layouts/GuestAdminLayout";
import Notfound from "./component/Notfound";
import Category from "./admin/Category";

function AdminRouter() {
  return (
    <Routes>
      <Route element={<GuestAdminLayout />}>
        <Route path="/admin/login" element={<Login />} />
      </Route>
      <Route element={<AuthAdminLayout />}>
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/admin/usermanagment" element={<Usermanagement />} />
        <Route path="/admin/ordermanagment" element={<Ordermanagment />} />
        <Route path="/admin/productmanagment" element={<Productmanagment />} />
        <Route path="/admin/productedit" element={<Productedit />} />
        <Route path="/admin/category" element={<Category />} />
      </Route>
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
}

export default AdminRouter;
