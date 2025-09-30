import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"; // You can replace with any icon library

const Footer = () => {
    return (
        <footer className="bg-white shadow-2xl shadow-black/40 ">
            {/* Top Section */}
            <div className="relative max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                {/* Logo */}
                <div>
                    <img
                        src="/assets/logo.png"
                        alt="YourGiftsBox Logo"
                        className="h-32 w-auto"
                    />
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold text-orange-600 mb-2">
                        Contact Info
                    </h3>
                    <ul className="space-y-1 text-green-700">
                        <li>+91 81694 31806</li>
                        
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="font-semibold text-orange-600 mb-2">
                        Address
                    </h3>
                    <ul className="space-y-1 text-green-700">
                        <li>Mumbai,</li>
                        <li>India</li>
                        
                    </ul>
                </div>

                {/* Company Info */}
                <div>
                    <h3 className="font-semibold text-orange-600 mb-2">
                        Company
                    </h3>
                    <ul className="space-y-1 text-green-700">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-orange-100"></div>

            {/* Bottom Section */}
            <div className="bg-[#f6e4d1] py-4 px-6 flex flex-col md:flex-row items-center justify-center text-sm text-orange-500">
                <p>©2025 YourGiftsBox. All Right Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
