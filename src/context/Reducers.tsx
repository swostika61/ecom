import React from "react";
import { IInitialState } from "./Context";
export interface IAction{
  type: "ADD_TO_CART" | "REMOVE_FROM_CART"|"ADD_PRODUCTS";
  payload: any
}
export const cartReducer = (state:IInitialState, action:IAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, cart:[]};
    case "REMOVE_FROM_CART":
      return state;
      case "ADD_PRODUCTS":
      return {...state, products:action.payload};
   
    default:
      return state;
  }
};
