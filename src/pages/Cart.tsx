import React from "react";
import NoCartItem from "../components/NoCartItem";
import PriceCard from "../components/PriceCard";
import { CartState } from "../context/Context";

const Cart = () => {
  const { state, dispatch } = CartState();
  // const [total, setTotal]= useState()
  const totalCartLength: number = state?.cart.length ?? 0;
  return totalCartLength > 0 ? (
    <div className="grid grid-cols-2 px-6">
      <div>
        {state?.cart.map((prod) => {
          return <div>{prod.title}</div>;
        })}
      </div>
      <div>
        <PriceCard>Total items :{state?.cart.length}</PriceCard>
      </div>
    </div>
  ) : (
    <NoCartItem />
  );
};

export default Cart;
