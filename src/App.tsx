import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// pages
import Home from "./pages/Home";
// components
import Navbar from "./components/Navbar";
import { getProducts } from "./services/Products";
import NoMatch from "./pages/NoMatch";

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
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
