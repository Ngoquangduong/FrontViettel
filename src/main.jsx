import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App.jsx'
import { Provider } from "react-redux";
// import store from "./app/store";

import router from "./router.jsx";
import { RouterProvider } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "./context/AdminAuthContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import App from "./App.jsx";
import { FormProvider } from "./context/FormContext.jsx";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import store from "./app/store";
import { ServiceProvider } from "./context/ServiceContext.jsx";
import { CategoryProvider } from "./context/CategoryContext.jsx";
import { PaymentProvider } from "./context/PaymentContext.jsx";
import { CityProvider } from "./context/CityContext.jsx";
import { DistrictProvider } from "./context/DistrictContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ServiceProvider>
          <CategoryProvider>
            <CityProvider>
              <DistrictProvider>
                <PaymentProvider>
                  <OrderProvider>
                    <AdminAuthProvider>
                      <App />
                    </AdminAuthProvider>
                  </OrderProvider>
                </PaymentProvider>
              </DistrictProvider>
            </CityProvider>
          </CategoryProvider>
        </ServiceProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
