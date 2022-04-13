import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import { CartState } from "../context/Context";
interface IProductProps {
  products?: IProducts[];
}
const Home: React.FC = () => {
  const { state, dispatch } = CartState();
  console.log("State:",state)
  return (
    <div className="px-6 py-4 grid sm:grid-cols-3 gap-x-4 gap-y-6	justify-center	">
      {state?.products?.map((product) => {
        return <Link key={product?.id} to={`/products/${product?.id}`}><Cards  data={product} /></Link>
      })}
    </div>
  );
};

export default Home;
