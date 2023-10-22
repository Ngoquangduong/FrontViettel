import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Login from "./login"
import Header from "./header"
import Home from "./home"
import Detail from "./Detail"
import Sidebar from "./admin/adminheader"
import Adminhome from "./admin/admin"
import Usermanagement from "./admin/usermanage"
import Ordermanagment from "./admin/ordermanagment"
import Productmanagment from "./admin/productmanagment"
import ProductList from "./productlist"
import Filter from "./filter";

const router = createBrowserRouter([
    {
        path: '/app',
        element: <App />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/header',
        element: <Header />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/Detail',
        element: <Detail />
    },
    {
        path: '/Sidebar',
        element: <Sidebar />
    },
    {
        path: '/Filter',
        element: <Filter />
    },
    {
        path: '/Admin',
        element: <Adminhome />
    },
    {
        path: '/Admin/Usermanagment',
        element: <Usermanagement />
    },

    {
        path: '/Admin/Ordermanagment',
        element: <Ordermanagment />
    },
    {
        path: '/Admin/Productmanagment',
        element: <Productmanagment />
    },

    {
        path: '/ProductList',
        element: <ProductList />
    },

])
export default router 