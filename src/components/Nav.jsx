import React, { useMemo, useState } from "react";
import logo from "/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WA || "918169431806";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactText = useMemo(() => {
    return "Hello! I’d like to know more about your products.";
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      contactText
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="bg-white shadow-md h-[10vh] w-full fixed top-0 left-0 z-50 flex items-center justify-between md:px-10 px-5">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={logo}
        className="md:h-4/5 h-3/5 cursor-pointer"
        alt="Logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:gap-10 gap-5 text-orange-400 md:text-base text-sm items-center">
        <li
          onClick={() => navigate("/kids")}
          className="hover:text-green-500 cursor-pointer transition-colors"
        >
          Kids
        </li>
        <li
          onClick={() => navigate("/adults")}
          className="hover:text-green-500 cursor-pointer transition-colors"
        >
          Adults
        </li>
        <li
          onClick={() => navigate("/corporate")}
          className="hover:text-green-500 cursor-pointer transition-colors"
        >
          Corporate
        </li>
        <li
          onClick={() => navigate("/about")}
          className="hover:text-green-500 cursor-pointer transition-colors"
        >
          About Us
        </li>
        <li
          onClick={openWhatsApp}
          className="hover:text-green-500 cursor-pointer flex items-center gap-2 transition-colors"
          aria-label="Contact us on WhatsApp"
          title="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-orange-400" />
          Contact Us
        </li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden text-orange-400 text-2xl cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-[10vh] left-0 w-full bg-white shadow-lg decoration-0 list-none flex flex-col items-center gap-6 py-8 text-orange-400 text-base font-medium transform transition-all duration-300 ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-[100%] opacity-0 pointer-events-none"
        }`}
      >
        <li
          onClick={() => {
            navigate("/kids");
            setIsMenuOpen(false);
          }}
          className="hover:text-green-500 cursor-pointer"
        >
          Kids
        </li>
        <li
          onClick={() => {
            navigate("/adults");
            setIsMenuOpen(false);
          }}
          className="hover:text-green-500 cursor-pointer"
        >
          Adults
        </li>
        <li
          onClick={() => {
            navigate("/corporate");
            setIsMenuOpen(false);
          }}
          className="hover:text-green-500 cursor-pointer"
        >
          Corporate
        </li>
        <li
          onClick={() => {
            navigate("/about");
            setIsMenuOpen(false);
          }}
          className="hover:text-green-500 cursor-pointer"
        >
          About Us
        </li>
        <li
          onClick={() => {
            openWhatsApp();
            setIsMenuOpen(false);
          }}
          className="hover:text-green-500 cursor-pointer flex items-center gap-2"
        >
          <FaWhatsapp className="text-orange-400" />
          Contact Us
        </li>
      </div>
    </nav>
  );
};

export default Nav;
