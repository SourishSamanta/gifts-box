import React from "react";
import { BadgeCheck, Truck, Gem, Hand } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <BadgeCheck size={48} strokeWidth={1.5} />,
            label: "100% Customised",
        },
        {
            icon: <Truck size={48} strokeWidth={1.5} />,
            label: "Pan-India delivery",
        },
        {
            icon: <Gem size={48} strokeWidth={1.5} />,
            label: "Premium quality",
        },
        {
            icon: <Hand size={38} strokeWidth={1.5} />,
            label: "Handmade with love",
        },
    ];

    return (
        <section className="w-full h-[55vh] bg-[#F4E6D8] flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl font-bold mb-10 flex flex-wrap justify-center text-shadow-[10px] text-shadow-orange-500">
                <span className="text-orange-500 cherry text-stroke-white">
                    W
                </span>
                <span className="text-yellow-500 cherry text-stroke-white">
                    h
                </span>
                <span className="text-green-600 cherry text-stroke-white">
                    y{" "}
                </span>
                <span className="w-5"></span>
                <span className="text-pink-500 cherry text-stroke-white">
                    C
                </span>
                <span className="text-orange-400 cherry text-stroke-white">
                    h
                </span>
                <span className="text-purple-500 cherry text-stroke-white">
                    o
                </span>
                <span className="text-green-500 cherry text-stroke-white">
                    o
                </span>
                <span className="text-orange-600 cherry text-stroke-white">
                    s
                </span>
                <span className="text-pink-400 cherry text-stroke-white">
                    e{" "}
                </span>
                <span className="w-5"></span>
                <span className="text-green-600 cherry text-stroke-white">
                    U
                </span>
                <span className="text-orange-500 cherry text-stroke-white">
                    s
                </span>
                <span className="text-red-500 cherry text-stroke-white">?</span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 mt-5">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <div className="text-black">{item.icon}</div>
                        <p className="mt-2 text-sm font-medium">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
