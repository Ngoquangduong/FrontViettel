import "./assets/CSS/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Login from "./login";
import Header from "./component/Header";
import Home from "./home";
import Detail from "./Detail";
import Sidebar from "./admin/adminheader";
import Adminhome from "./admin/admin";
import Usermanagement from "./admin/usermanage";
import Ordermanagment from "./admin/ordermanagment";
import Productmanagment from "./admin/productmanagment";
import List from "./productlist";
import Productedit from "./admin/productedit";

import AuthAdminLayout from "./layouts/AuthAdminLayout";
import GuestAdminLayout from "./layouts/GuestAdminLayout";
import Notfound from "./component/Notfound";
import Category from "./admin/Category";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { ProductProvider } from "./context/ProductContext";

import { useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/productList" element={<List />} />
    </Routes>
  );
}

export default App;
