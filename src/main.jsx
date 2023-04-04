import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/inter/variable.css";
// import "@fontsource/inter";
import "./main.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import BrowseProductsPage from "./pages/BrowseProductsPage";
import RegisterPage from "./pages/RegisterPage";
import CreateProductPage from "./pages/seller/CreateProductPage";
import EditProductPage from "./pages/seller/EditProductPage";
import ViewCreatedProductsPage from "./pages/seller/ViewCreatedProductsPage";
import PaymentPage from "./pages/PaymentPage";

const theme = extendTheme({
  fonts: {
    heading: `'InterVariable', sans-serif`,
    body: `'InterVariable', sans-serif`,
  },
  color: {
    bluey: "164aff",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/cart" element={<CartPage />} exact />
            <Route path="/orders" element={<OrderPage />} exact />
            <Route path="/products" element={<BrowseProductsPage />} exact />
            <Route path="/product/:id" element={<ProductPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/register" element={<RegisterPage />} exact />
            <Route path="/payment" element={<PaymentPage />} exact />
            <Route
              path="/seller/create"
              element={<CreateProductPage />}
              exact
            />
            <Route
              path="/seller/view"
              element={<ViewCreatedProductsPage />}
              exact
            />
            <Route
              path="/seller/edit/:id"
              element={<EditProductPage />}
              exact
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
