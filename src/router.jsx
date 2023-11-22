import { createBrowserRouter } from "react-router-dom";
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
import Filter from "./Filter";
import { ProductProvider } from "./context/ProductContext";
const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Detail />,
  },
  {
    path: "/Sidebar",
    element: <Sidebar />,
  },
  {
    path: "/Filter",
    element: <Filter />,
  },
  {
    path: "/Admin",
    element: <Adminhome />,
  },
  {
    path: "/Admin/Usermanagment",
    element: <Usermanagement />,
  },

  {
    path: "/Admin/Ordermanagment",
    element: <Ordermanagment />,
  },
  {
    path: "/Admin/Productmanagment",
    element: <ProductProvider><Productmanagment /></ProductProvider> ,
  },
  {
    path: "/Admin/Productedit",
    element: <Productedit/>,
  },

  {
    path: "/ProductList",
    element: <ProductList />,
  },
  {
    path: "/*",
    element: <h1>Lỗi rồi bạn ei 404 not found</h1>,
  },
]);
export default router;
