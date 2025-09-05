import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-4 mt-8 text-center text-sm">
      <p>© {new Date().getFullYear()} Pharmysense. All rights reserved.</p>
      <p className="mt-1">
        Made with ❤️ for simplifying pharmacy & healthcare access.
      </p>
    </footer>
  );
};

export default Footer;
