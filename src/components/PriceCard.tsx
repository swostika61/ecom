import React from "react";
interface IPriceCardProps {
  children?: React.ReactNode;
}
const PriceCard: React.FC<IPriceCardProps> = ({ children }) => {
  return (
    <div className="max-w-sm  rounded-lg overflow-hidden shadow-lg flex justify-center dark:bg-gray-800 py-3 text-white" style={{minHeight:"415px"}}>
      {children}
    </div>
  );
};

export default PriceCard;
