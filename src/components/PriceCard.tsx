import React from "react";
interface IPriceCardProps {
  children?: React.ReactNode;
}
const PriceCard: React.FC<IPriceCardProps> = ({ children }) => {
  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg flex justify-center bg-slate-400 py-3 " style={{minHeight:"415px"}}>
      {children}
    </div>
  );
};

export default PriceCard;
