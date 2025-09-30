import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import { FaWhatsapp } from "react-icons/fa";

const ADMIN_WHATSAPP_NUMBER = "918169431806";

const ProductDetail = () => {
    const { state } = useLocation();
    const {
        title = "Product",
        description = "",
        images = [],
        details = [],
        price = "",
    } = state || {};

    console.log(details.length)

    // Build a clean, readable WhatsApp message
    const whatsappText = useMemo(() => {
        const pageUrl =
            typeof window !== "undefined" ? window.location.href : "";
        const firstImage = images?.[0] || "";
        const detailLines =
            Array.isArray(details) && details.length
                ? details.map((d, i) => `• ${d}`).join("\n")
                : "• (No extra details)";

        return [
            "Hello! I'd like to buy this item 👇",
            "",
            `🛍️ Product: ${title}`,
            price !== null ? `💰 Price: ₹${price}/-` : "",
            description
                ? `📝 About: ${description.slice(0, 160)}${
                      description.length > 160 ? "..." : ""
                  }`
                : "",
            "📄 Details:",
            detailLines,
            firstImage ? `🖼️ Image: ${firstImage}` : "",
            pageUrl ? `🔗 Page: ${pageUrl}` : "",
            "",
            "Please confirm availability and next steps.",
        ]
            .filter(Boolean)
            .join("\n");
    }, [title, description, images, details, price]);

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappText
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="flex flex-col ">
            <div className=" w-full min-h-screen pt-40 p-20 bg-[url(/assets/kidsProductBg.png)] bg-cover">
                <h2 className=" text-3xl  text-outline ">
                    <span className=" text-[#F68C24] ">Product</span>{" "}
                    <span className=" text-[#86C986]">Details</span>
                </h2>

                <div className="min-h-screen  px-8 py-12 flex flex-col md:flex-row gap-10 items-start">
                    {/* Image Carousel */}
                    <div className="w-full md:w-1/2 h-[60vh]">
                        <ImageCarousel images={images} />
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 space-y-4 min-h-1/2">
                        <h1 className="text-3xl ">{title}</h1>
                        {description && (
                            <p className="text-gray-600">{description}</p>
                        )}

                        {Array.isArray(details) && details.length > 1 && (
                            <div>
                                <h3 className="text-gray-600">Details:</h3>
                                <ul className=" list-inside text-gray-600">
                                    {details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="text-sm">
                            Price:{" "}
                            <span className="text-4xl ml-5 font-semibold">
                                {price !== null ? `₹${price}/-` : "On request"}
                            </span>
                        </div>

                        <button
                            onClick={handleWhatsAppClick}
                            className="bg-green-600 flex items-center justify-center gap-3 text-white w-full py-3 rounded hover:bg-green-700 transition"
                            aria-label="Contact us on WhatsApp"
                        >
                            <FaWhatsapp size={25} className="text-lg" /> Contact
                            Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
