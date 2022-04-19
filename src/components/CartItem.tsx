import React from "react";
import Button from "./Button";
interface ICardItemProps {
  product: IProducts;
}
const CartItem: React.FC<ICardItemProps> = ({ product }) => {
  return (
    <div className="block mb-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white">
      <div className="flex items-center">
        <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <img
            className="rounded-full"
            src={product.image}
            alt={product.category}
          />
        </div>
        <h3 className="ml-5 text-lg font-serif font-light">{product.title}</h3>
      </div>
      {/* buttons  */}
      <div className="flex mt-3">
        <Button hcolor="hover:bg-blue-500">Add</Button>
        <Button hcolor="hover:bg-red-500" mleft="ml-3">Delete</Button>
      </div>
    </div>
  );
};

export default CartItem;
