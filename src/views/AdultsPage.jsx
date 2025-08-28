import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const products = [
    {
        id: 1,
        title: "Kids bathtowel",
        description: "Jiara crayons are awesome with no harmful chemicals...",
        images: [
            "/assets/kids/towel1.jpeg",
            "/assets/kids/towel2.jpeg",
            "/assets/kids/towel3.jpeg",
            "/assets/kids/towel4.jpeg",
        ],
        details: ["Size 24 by 48 inch", "Age grp upto 12 yrs", "500 gsm"],
        price: 199,
    },
    {
        id: 2,
        name: "Veigo brand tiffin set",
        description: "Spacious, stylish bag for all your needs.",
        images: [
            "/assets/kids/tiffin1.jpeg",
            "/assets/kids/tiffin2.jpeg",
            "/assets/kids/tiffin3.jpeg",
        ],
        details: [
            "(Veigo Jumbo) 6 by 8.5 + 2 by 3 inch",
            "(Veigo Large) 5 by 6 inch",
            "(Veigo Medium) 4 by 4 inch",
            "Round steel chutney dibbi",
            "Spoon and fork",
        ],
        price: 399,
    },
    {
        id: 3,
        name: "Kids wooden hairbrush",
        description: "Personalized water bottle for daily use.",
        images: ["/assets/kids/brush1.jpeg", "/assets/kids/brush2.jpeg"],
        details: ["8.5 inch by 2.5 inch"],
        price: 299,
    },
    {
        id: 4,
        name: "Cap with cheneile initial",
        description: "Personalized water bottle for daily use.",
        images: [
            "/assets/kids/cap1.jpeg",
            "/assets/kids/cap2.jpeg",
            "/assets/kids/cap3.jpeg",
        ],
        details: [
            "Light blue/Light pink",
            "For kids upto 7 yrs",
            "Velcro behind to adjust",
        ],
        price: 299,
    },
    {
        id: 5,
        name: "Kids bag pack",
        description: "Personalized water bottle for daily use.",
        images: [
            "/assets/kids/bag1.jpeg",
            "/assets/kids/bag2.jpeg",
            "/assets/kids/bag3.jpeg",
            "/assets/kids/bag4.jpeg",
            "/assets/kids/bag3.jpeg",
        ],
        details: [
            "Size - 7.5in X 7.5in",
            "Including Name in gold patti",
            "Including Single cheneile patch",
        ],
        price: 299,
    },
];

const AdultsPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products") // 🔁 Replace with your backend URL
            .then((res) => {
                const kidsProducts = res.data.filter((p) => p.type === "adult");
                setProducts(kidsProducts);
            })
            .catch((err) => {
                console.error("Failed to fetch products:", err);
            });
    }, []);

    const handleClick = (product) => {
        navigate("/product", { state: product });
    };
    return (
        <div className="w-full pt-[8vh]">
            {/* Top Banner */}
            <div className="bg-[url(/assets/adultsPageBg.png)] bg-cover flex items-center justify-center h-[30vh] text-center text-white text-4xl font-bold relative">
            <div className=" bg-repeat h-full w-full absolute top-0 left-0 opacity-30"></div>
                <span className=" cherry relative z-10">Adults</span>
            </div>

            {/* Hero Section */}
            <div className="bg-[#87c98762] px-4 md:px-20 h-[80vh] flex items-center justify-center gap-10 relative">
                {/* Top Curve */}

                
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-pink-500 text-outline cherry">
                            W
                        </span>
                        <span className="text-orange-400 text-outline cherry">
                            h
                        </span>
                        <span className="text-green-500 text-outline cherry">
                            i
                        </span>
                        <span className="text-purple-400 text-outline cherry">
                            m
                        </span>
                        <span className="text-pink-500 text-outline cherry">
                            s
                        </span>
                        <span className="text-orange-400 text-outline cherry">
                            i
                        </span>
                        <span className="text-green-500 text-outline cherry">
                            c
                        </span>
                        <span className="text-pink-500 text-outline cherry">
                            a
                        </span>
                        <span className="text-orange-500 text-outline cherry">
                            l{" "}
                        </span>
                        <span className="text-orange-400 text-outline cherry">
                            W
                        </span>
                        <span className="text-purple-400 text-outline cherry">
                            o
                        </span>
                        <span className="text-green-600 text-outline cherry">
                            n
                        </span>
                        <span className="text-pink-500 text-outline cherry">
                            d
                        </span>
                        <span className="text-orange-400 text-outline cherry">
                            e
                        </span>
                        <span className="text-green-500 text-outline cherry">
                            r
                        </span>
                        <span className="text-pink-500 text-outline cherry">
                            s{" "}
                        </span>
                        <br />
                        <span className="text-purple-400 text-outline cherry">
                            f
                        </span>
                        <span className="text-orange-400 text-outline cherry">
                            o
                        </span>
                        <span className="text-green-600 text-outline cherry">
                            r{" "}
                        </span>
                        <span className="text-purple-500 text-outline cherry">
                            L
                        </span>
                        <span className="text-pink-500 text-outline cherry">
                            i
                        </span>
                        <span className="text-green-500 text-outline cherry">
                            t
                        </span>
                        <span className="text-orange-400 text-outline cherry">
                            t
                        </span>
                        <span className="text-pink-400 text-outline cherry">
                            l
                        </span>
                        <span className="text-purple-500 text-outline cherry">
                            e{" "}
                        </span>
                        <span className="text-green-600 text-outline cherry">
                            O
                        </span>
                        <span className="text-orange-500 text-outline cherry">
                            n
                        </span>
                        <span className="text-pink-500 text-outline cherry">
                            e
                        </span>
                        <span className="text-purple-400 text-outline cherry">
                            s
                        </span>
                    </h2>

                    <p className="text-3xl space-y-2 max-w-3xl mx-auto mt-4 font-medium text-center text-gray-800">
                        Whether it’s a birthday, anniversary, wedding, or just
                        because—our personalised gifts for adults are made to
                        make someone feel truly special.
                    </p>
                </div>

                
            </div>

            {/* Product Grid */}
            <div className="py-16 px-6 md:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={`${product.id || index}-${index}`}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdultsPage;
