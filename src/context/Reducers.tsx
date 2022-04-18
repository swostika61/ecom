import React from "react";
import { IInitialState } from "./Context";
export interface IAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "ADD_PRODUCTS";
  payload: any;
}
export const cartReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
