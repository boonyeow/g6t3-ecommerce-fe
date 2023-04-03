import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/inter/variable.css";
// import "@fontsource/inter";
import "./main.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReviewPage from "./pages/ReviewPage";
import Layout from "./layout/Layout";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import BrowseProductsPage from "./pages/BrowseProductsPage";

const theme = extendTheme({
  fonts: {
    heading: `'InterVariable', sans-serif`,
    body: `'InterVariable', sans-serif`,
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
            <Route path="/orders" element={<ReviewPage />} exact />
            <Route path="/products" element={<BrowseProductsPage />} exact />
            <Route path="/product/:id" element={<ProductPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
