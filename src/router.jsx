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
import Category from "./admin/category";

import Notfound from "./component/Notfound";
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
    path:"/*",
    element:<Notfound/>
  },
  



// const routes = createRoutesFromElements([
//   <Route path="/" element={<Home />} />,
//   <Route path="/product/:id" element={<Detail />} />,
//   <Route path="/productList" element={<ProductList />} />,
//   <AdminAuthProvider>
//     <Route element={<GuestAdminLayout />}>
//       <Route path="/admin/login" element={<Login />} />
//     </Route>
//     <Route element={<AuthAdminLayout />}>
//       <Route
//         path="/admin/productmanagment"
//         element={
//           <ProductProvider>
//             <Productmanagment />
//           </ProductProvider>
//         }
//       />
//       <Route path="/admin" element={<Adminhome />} />
//       <Route path="/admin/usermanagment" element={<Usermanagement />} />
//       <Route path="/admin/ordermanagment" element={<Ordermanagment />} />
//       <Route path="/admin/productedit" element={<Productedit />} />
//     </Route>
//   </AdminAuthProvider>,
//   <Route path="/*" element={<Notfound/>} />,

 ]);

// const router = createBrowserRouter(routes);
 export default router;
