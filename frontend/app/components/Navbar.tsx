import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Map", path: "/map" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      {/* Logo */}
      <p className="font-semibold text-2xl absolute top-6 left-6">
        Pharmysense
      </p>

      {/* Desktop Navbar */}
      <div className="hidden md:flex px-2 py-2 bg-[#EAEDEC] justify-between items-center w-[36vw] rounded-full text-black absolute top-4 left-[32%]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-full px-4 py-2 transition ${
                isActive ? "bg-green-600 text-white" : "text-black"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Login button (Desktop) */}
      <NavLink
        to="/auth/login"
        className="hidden md:block absolute top-4 right-4 rounded-full px-6 py-3 bg-green-600 text-white font-semibold"
      >
        Login
      </NavLink>

      {/* Mobile Navbar */}
      <div className="md:hidden absolute top-4 right-4">
        <button
          className="text-3xl text-green-600"
          onClick={() => setIsOpen(true)}
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Side Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6">
            {/* Close Button */}
            <button
              className="self-end text-3xl text-green-600"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            {/* Nav Links */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-lg transition ${
                    isActive ? "bg-green-600 text-white" : "text-black"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Login Button */}
            <NavLink
              to="/auth/login"
              className="rounded-full px-6 py-3 bg-green-600 text-white font-semibold"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
