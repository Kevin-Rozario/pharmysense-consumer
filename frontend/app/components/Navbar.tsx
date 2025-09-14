import { Link } from "react-router";
import { useEffect } from "react";
import { useUIStore } from "../stores/uiStore";
import { MenuIcon, CloseIcon } from "../lib/icons";

export default function Navigation() {
  const { isMobileMenuOpen, isScrolled, setMobileMenuOpen, setScrolled } =
    useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Map", href: "/map" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${isScrolled ? "text-neutral-800" : "text-white"}`}
            >
              PharmySense
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? "text-neutral-700" : "text-white"
                } group`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <Link
              to="/map"
              className="pill-button bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 text-sm font-medium"
            >
              Find Pharmacies
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="glassmorphism mx-4 mt-2 rounded-2xl border border-white/20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-neutral-800 hover:text-emerald-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/map"
              onClick={() => setMobileMenuOpen(false)}
              className="block pill-button bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-center font-medium"
            >
              Find Pharmacies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
