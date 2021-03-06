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
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  useEffect(() => {
    const products = getProducts()
      .then((res: IProducts[]) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
  return (
    <>
      <div className="min-h-full" style={{ minHeight:`calc(100vh - 50px)`}}>
        <Navbar />
        {/* products display  */}
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
