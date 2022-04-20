import React from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import NoCartItem from "../components/NoCartItem";
import PriceCard from "../components/PriceCard";
import { CartState } from "../context/Context";

const Cart = () => {
  const { state, dispatch } = CartState();
  // const [total, setTotal]= useState()
  const totalCartLength: number = state?.cart.length ?? 0;
  return totalCartLength > 0 ? (
    <div className="grid grid-cols-2 px-6 gap-3">
      <div>
        {state?.cart.map((prod) => {
          return <div>
            <CartItem product={prod}/>
            </div>;
        })}
      </div>
      <div>
        <PriceCard>
          <span className="font-bold">Total items : {state?.cart.length}</span>
          <Button disabled={totalCartLength==0}/>
        </PriceCard>
      </div>
    </div>
  ) : (
    <NoCartItem />
  );
};

export default Cart;
