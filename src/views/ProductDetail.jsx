import React from "react";
import { useLocation } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetail = () => {
    const { state } = useLocation();
    const { title, description, images, details, price } = state;

    return (
        <section className="flex flex-col ">
          <div className=" w-full min-h-screen p-20 bg-[url(/assets/kidsProductBg.png)] bg-cover"> 
            <h2 className=" text-3xl  text-outline ">
                <span className=" text-[#F68C24] ">Product</span> <span className=" text-[#86C986]">Details</span> 
            </h2>
            <div className="min-h-screen  px-8 py-12 flex flex-col md:flex-row gap-10 items-start">
                {/* Image Carousel */}
                <div className="w-full md:w-1/2 h-[60vh]">
                    <ImageCarousel images={images} />
                </div>

                {/* Product Info */}
                <div className="w-full md:w-1/2 space-y-4 min-h-1/2  ">
                    <h1 className="text-3xl ">{title}</h1>
                    <p className="text-gray-600">{description}</p>

                    <div>
                        <h3 className="text-gray-600">Details:</h3>
                        <ul className=" list-inside text-gray-600">
                            {details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-sm  ">
                        Price: <span className="text-4xl ml-5 font-semibold">₹{price}/-</span>
                    </div>

                    <button className="bg-green-600 flex items-center justify-center gap-3 text-white w-full py-3 rounded hover:bg-green-700 transition">
                        <FaWhatsapp size={25} className="text-lg" /> Contact Us
                    </button>
                </div>
            </div>
          </div> 
        </section>
    );
};

export default ProductDetail;
