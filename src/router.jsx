import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Login from "./login";
import Header from "./component/Header";
import Home from "./home";
import Detail from "./Detail";
import Sidebar from "./admin/adminheader";
import Adminhome from "./admin/admin";
import Usermanagement from "./admin/usermanage";
import Ordermanagment from "./admin/ordermanagment";
import Productmanagment from "./admin/productmanagment";
import ProductList from "./productlist";
import Productedit from "./admin/productedit";

import AuthAdminLayout from "./layouts/AuthAdminLayout";
import GuestAdminLayout from "./layouts/GuestAdminLayout";
import Filter from "./Filter";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { ProductProvider } from "./context/ProductContext";

const routes = createRoutesFromElements([
  <Route path="/" element={<Home />} />,
  <Route path="/product/:id" element={<Detail />} />,
  <Route path="/productList" element={<ProductList />} />,
  <AdminAuthProvider>
    <Route element={<GuestAdminLayout />}>
      <Route path="/admin/login" element={<Login />} />
    </Route>
    <Route element={<AuthAdminLayout />}>
      <Route
        path="/admin/productmanagment"
        element={
          <ProductProvider>
            <Productmanagment />
          </ProductProvider>
        }
      />
      <Route path="/admin" element={<Adminhome />} />
      <Route path="/admin/usermanagment" element={<Usermanagement />} />
      <Route path="/admin/ordermanagment" element={<Ordermanagment />} />
      <Route path="/admin/productedit" element={<Productedit />} />
    </Route>
  </AdminAuthProvider>,
  <Route path="/*" element={<h1>Lỗi rồi bạn ei 404 not found</h1>} />,
]);

const router = createBrowserRouter(routes);
export default router;
