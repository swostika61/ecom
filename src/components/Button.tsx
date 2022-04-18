import React from "react";
interface IButtonProps {
  hcolor?: string;
  onclick?:()=>void
}
const Button: React.FC<IButtonProps> = ({ hcolor, children,onclick }) => {
  return (
    <button
      onClick={onclick}
    className={`bg-white ${hcolor} hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2`}>
    {children}
  </button>
  );
};

export default Button;
