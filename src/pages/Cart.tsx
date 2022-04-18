import React from "react";
import PriceCard from "../components/PriceCard";
import { CartState } from "../context/Context";

const Cart = () => {
  const { state, dispatch } = CartState();
  // const [total, setTotal]= useState()
  const totalCartLength:number|undefined = state?.cart.length;
  return (
    { totalCartLength > 0  ?
    (<div className="grid grid-cols-2 px-6">
      <>
        {state?.cart.map((prod) => {
          return <div>{prod.title}</div>;
        })}
      </>
      <div>
        <PriceCard>
          Total items :{state?.cart}
        </PriceCard>
      </div>
    </div>):<div>none</div>}
      
  );
};

export default Cart;
