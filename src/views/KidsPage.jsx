import React from "react";

const products = [
    {
        id: 1,
        name: "Jiara Crayons",
        price: "199/-",
        image: "/assets/react.svg",
    },
    {
        id: 2,
        name: "Krisha Bags",
        price: "399/-",
        image: "/assets/react.svg",
    },
    {
        id: 3,
        name: "Krisha Bags",
        price: "399/-",
        image: "/assets/react.svg",
    },
    {
        id: 4,
        name: "Krisha Bags",
        price: "399/-",
        image: "/assets/react.svg",
    },
    {
        id: 5,
        name: "Krisha Bags",
        price: "399/-",
        image: "/assets/react.svg",
    },
    
];

const KidsPage = () => {
    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="bg-[url(/assets/kidsPageBg.png)] bg-cover flex items-center justify-center h-[30vh] text-center text-white text-4xl font-bold relative">
                <div className=" bg-repeat h-full w-full absolute top-0 left-0 opacity-30"></div>
                <span className="relative z-10">Kids</span>
            </div>

            {/* Hero Section */}
            <div className="bg-[#F4E6D8] px-4 md:px-20 h-[80vh] flex items-center justify-center gap-10 relative">
                {/* Top Curve */}
                
                <img
                    src="/assets/rainbow.png"
                    alt="Rainbow"
                    className="absolute top-0 left-0 w-32 rotate-90"
                />
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

                    <p className="text-3xl space-y-2 max-w-2xl mx-auto mt-4 font-medium text-center text-gray-800">
                        From colourful custom stationery to soft and snuggly
                        cushions, our kids’ collection is designed to spark
                        smiles and imagination.
                    </p>
                </div>

                <img
                    src="/assets/animals.png"
                    alt="Animals"
                    className="absolute bottom-0 right-4 w-20 md:w-32"
                />
            </div>

            {/* Product Grid */}
            <div className="py-16 px-6 md:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {products.concat(products, products).map((product, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 ">
                            <h3 className="text-lg font-medium">
                                {product.name}
                            </h3>
                            <div className=" flex items-center justify-between">
                                <p className="text-gray-700">{product.price}</p>
                                <button className="mt-2 bg-black text-white text-xs px-4 py-2 rounded hover:bg-gray-800">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KidsPage;
