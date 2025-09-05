import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <>
      <div className="px-2 py-2 bg-[#EAEDEC] flex justify-between items-center w-[36vw] rounded-full text-black absolute top-4 left-[32%]">
        <NavLink
          to="/"
          className={`rounded-full px-4 py-2 ${active === "home" ? "bg-green-600 text-white" : "text-black"}`}
          onClick={() => setActive("home")}
        >
          Home
        </NavLink>
        <NavLink
          to="/map"
          className={`rounded-full px-4 py-2 ${active === "map" ? "bg-green-600 text-white" : "text-black"}`}
          onClick={() => setActive("map")}
        >
          Map
        </NavLink>
        <NavLink
          to="/about"
          className={`rounded-full px-4 py-2 ${active === "about" ? "bg-green-600 text-white" : "text-black"}`}
          onClick={() => setActive("about")}
        >
          About
        </NavLink>
      </div>

      {/* Mobile View */}
    </>
  );
};

export default Navbar;
