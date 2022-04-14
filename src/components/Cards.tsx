import React from "react";
export interface IProductsProps {
  data?: IProducts;
}
const Cards: React.FC<IProductsProps> = ({ data }) => {
  return (
    // Card layout 
    <div className="max-w-xs rounded overflow-hidden shadow-lg ">
      {/* image  */}
      <div className="flex w-full justify-center">
        <img
          className=" w-50 h-28 text-center"
          src={data?.image}
          alt="Sunset in the mountains"
        />
      </div>
      {/* products detail  */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data?.title}</div>
      </div>
      <div className="px-6 py-2">
        <span className="text-blue-500 text-lg font-bold">
          ${data?.price}
        </span>
      </div>

      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{data?.category}
        </span>
      </div>
      {/* end of products details  */}
    </div>
    // end of card layout 
  );
};

export default Cards;
