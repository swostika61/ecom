import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <div className="w-full border-b border-gray-200 flex justify-between p-2 uppercase text-zinc-500 text-xs font-semibold	">
        <div>
          <a href="#" className="mx-2">
            super deals
          </a>
          <a href="#" className="mx-2">
            featured brands
          </a>
          <a href="#">trending styles</a>
        </div>
        <div className="mx-2">
          <a href="#">my account</a>
        </div>
      </div>
      {/* main navigation bar  */}
      <div className="py-4 px-12 flex justify-between items-center">
        <Link to="/dashboard">
          <h1 className="font-bold text-3xl ">
            STORE<span className="text-blue-500">.</span>
          </h1>
        </Link>
        <div className="relative">
          <i className="fa-solid fa-cart-shopping hover:text-blue-500 text-2xl" />
          <span
            style={{
              height: "15px",
              width: "15px",
              top: "-2.5px",
              right: "-7.5px",
            }}
            className="flex justify-center items-center absolute  rounded-full text-xs text-white bg-red-600 "
          >
            0
          </span>
        </div>
      </div>
      {/* end of main navigation bar  */}
    </>
  );
}

export default Navbar;
