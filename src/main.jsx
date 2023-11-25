import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "./context/AdminAuthContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import App from "./App.jsx";
// import store from "./app/store";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
