import React from "react";

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
          <div className="py-4 px-12">
              <h1 className="font-bold text-3xl">STORE<span className="text-blue-500">.</span></h1>
          </div>
    </>
  );
}

export default Navbar;
