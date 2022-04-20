import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import NoCartItem from "../components/NoCartItem";
import PriceCard from "../components/PriceCard";
import { CartState } from "../context/Context";
import { cartReducer } from "../context/Reducers";

const Cart = () => {
  const { state, dispatch } = CartState();
  const [total, setTotal] = useState<number | null>();
  const cart = state?.cart??[];
  const totalCartLength: number = state?.cart.length ?? 0;
  useEffect(() => {
    setTotal(
      cart?.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      )
    );
  }, [cart]);
  return totalCartLength > 0 ? (
    <div className="grid grid-cols-2 px-6 gap-3">
      <div>
        {state?.cart.map((prod) => {
          return (
            <div>
              <CartItem product={prod} />
            </div>
          );
        })}
      </div>
      <div>
        <PriceCard>
          <span className="font-bold">Total items : {state?.cart.length}</span>
          <p>total:{total}</p>
          <Button
            hcolor="hover:bg-blue-500"
            disabled={state?.cart.length === 0}
          >
            Check out
          </Button>
        </PriceCard>
      </div>
    </div>
  ) : (
    <NoCartItem />
  );
};

export default Cart;
