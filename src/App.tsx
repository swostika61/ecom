import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// pages
import Home from "./pages/Home";
// components
import Navbar from "./components/Navbar";
import { getProducts } from "./services/ProductServices";
import NoMatch from "./pages/NoMatch";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  useEffect(() => {
    const products = getProducts()
      .then((res: IProducts[]) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      {/* products display  */}
      <Routes>
        <Route path="/dashboard" element={<Home products={products} />} />
        <Route index element={<Home products={products} />} />
        <Route path="products/:productId" element={<SingleProduct />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
