import React, { useMemo } from "react";
import logo from "/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WA || "918169431806";

const Nav = () => {
  const navigate = useNavigate();

  const contactText = useMemo(() => {
    const pageUrl = typeof window !== "undefined" ? window.location.href : "";
    return [
      "Hello! I’d like to know more about your products.",
    ]
      .filter(Boolean)
      .join("\n");
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      contactText
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="bg-white h-[10vh] w-screen fixed z-50 flex items-center justify-between md:px-10 px-5">
      <img
        onClick={() => navigate("/")}
        src={logo}
        className="md:h-full h-3/5 cursor-pointer"
        alt="Logo"
      />

      <ul className="flex md:gap-10 gap-5 text-orange-400 md:text-base text-xs items-center">
        <li
          onClick={() => navigate("/kids")}
          className="hover:text-green-500 cursor-pointer"
        >
          Kids
        </li>
        <li
          onClick={() => navigate("/adults")}
          className="hover:text-green-500 cursor-pointer"
        >
          Adults
        </li>
        <li
          onClick={() => navigate("/corporate")}
          className="hover:text-green-500 cursor-pointer"
        >
          Corporate
        </li>

        {/* Contact Us -> WhatsApp */}
        <li
          onClick={openWhatsApp}
          className="hover:text-green-500 cursor-pointer flex items-center gap-2"
          aria-label="Contact us on WhatsApp"
          title="Contact us on WhatsApp"
        >
          
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
