import React from "react";
import Cards from "../components/Cards";
interface IProductProps {
  products?: IProducts[];
}
const Home: React.FC<IProductProps> = ({ products }) => {
  return (
    <div className="px-6 py-4 grid sm:grid-cols-3 gap-x-4 gap-y-6	justify-center	">
      {products?.map((product) => {
        return <Cards key={product?.id} data={product} />;
      })}
    </div>
  );
};

export default Home;
