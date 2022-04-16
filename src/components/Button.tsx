import React from "react";
interface IButtonProps {
  children: React.ReactNode;
  hcolor?: string;
}
const Button: React.FC<IButtonProps> = ({ hcolor, children }) => {
  return (
    <button
    className={`bg-white ${hcolor} hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2`}>
    {children}
  </button>
  );
};

export default Button;
