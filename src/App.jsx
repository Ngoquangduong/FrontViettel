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
import Posts from "./Posts";
import AuthAdminLayout from "./layouts/AuthAdminLayout";
import GuestAdminLayout from "./layouts/GuestAdminLayout";
import Notfound from "./component/Notfound";
import Category from "./admin/Category";
import DetailPost from "./PostDetail";
import { useNavigate, useLocation } from "react-router-dom";
import BlogAdmin from "./admin/BlogAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tinymce/skins/content/default/content.css";
import "../src/assets/CSS/DetailPost.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/productList" element={<List />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/detail/post/:id" element={<DetailPost />} />
        <Route element={<GuestAdminLayout />}>
          <Route path="/admin/login" element={<Login />} />
        </Route>
        <Route element={<AuthAdminLayout />}>
          <Route path="/admin" element={<Adminhome />} />
          <Route path="/admin/usermanagment" element={<Usermanagement />} />
          <Route path="/admin/ordermanagment" element={<Ordermanagment />} />
          <Route
            path="/admin/productmanagment"
            element={<Productmanagment />}
          />
          <Route path="/admin/productedit" element={<Productedit />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/blog" element={<BlogAdmin />} />
        </Route>
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
