import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
} from "react";
import { getProducts } from "../services/ProductServices";
import { cartReducer } from "./Reducers";
import { IAction } from "./Reducers";
export interface IInitialState {
  products: IProducts[];
  cart: number[];
}
const initialState = {
  products: [],
  cart: [],
};

const Cart = createContext<{
  state?: IInitialState;
  dispatch?: React.Dispatch<IAction>;
}>({
  state:initialState,
  dispatch: () =>undefined ,
});
export const Context: React.FC = ({ children }) => {
  // Reducer
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  // fetch the products from api
  useEffect(() => {
    const products = getProducts()
      .then((res: IProducts[]) => dispatch({ type: "ADD_PRODUCTS", payload: res }))
      .catch((err) => console.log(err));
  }, []);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
