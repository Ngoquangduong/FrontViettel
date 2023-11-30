import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App.jsx'
import { Provider } from "react-redux";
import store from "./app/store";

import router from "./router.jsx";
import { RouterProvider } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "./context/AdminAuthContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import App from "./App.jsx";
import { FormProvider } from "./context/FormContext.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import store from "./app/store";

import { CategoryProvider } from "./context/CategoryContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <ProductProvider>
          <CategoryProvider>
            <FormProvider>
              <App />
            </FormProvider>
          </CategoryProvider>
        </ProductProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
