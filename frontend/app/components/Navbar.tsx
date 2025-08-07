import React from "react";

const Navbar = () => {
  return (
    <div className="p-2 bg-[#EAEDEC] flex justify-between items-center w-[36vw] rounded-full text-black absolute top-4 left-[32%]">
      <div className="bg-white rounded-full px-6 py-2">Home</div>
      <div className="rounded-full px-6 py-2">Map</div>
      <div className="rounded-full px-6 py-2">About</div>
    </div>
  );
};

export default Navbar;
