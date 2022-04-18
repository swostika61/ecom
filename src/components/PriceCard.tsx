import React from "react";
interface IPriceCardProps {
  children?: React.ReactNode;
}
const PriceCard: React.FC<IPriceCardProps> = ({ children }) => {
  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg bg-slate-400">
      {children}
    </div>
  );
};

export default PriceCard;
