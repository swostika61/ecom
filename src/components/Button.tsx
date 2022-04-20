import React from "react";
interface IButtonProps {
  hcolor?: string;
  mleft?: string;
  mxaxis?: string;
  onclick?: () => void;
  disabled?: boolean;
}
const Button: React.FC<IButtonProps> = ({
  hcolor,
  mleft,
  children,
  onclick,
  disabled,
}) => {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className={`bg-white ${hcolor} ${mleft} hover:text-white text-gray-800 border border-solid border-zinc-800 w-1/3 lg:w-full py-2`}
    >
      {children}
    </button>
  );
};

export default Button;
