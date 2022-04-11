import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { getProducts } from "./services/Products";

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
      <div className="px-6 py-4 grid sm:grid-cols-3 gap-x-4 gap-y-6	">
      {products?.map((product) => {
        return <Cards data={product} />;
      })}
        </div>
    </>
  );
};

export default App;
