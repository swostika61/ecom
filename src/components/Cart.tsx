import React from "react";
import { CartState } from "../context/Context";

const Cart = () => {
  const { state, dispatch } = CartState();
  return (
    <div>
      {state?.cart.map((prod) => {
        return <div>{prod.title}</div>;
      })}
    </div>
  );
};

export default Cart;
