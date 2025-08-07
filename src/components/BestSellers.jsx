import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const BestSellers = () => {
    const bestSellers = [
        {
            img: "/assets/react.svg",
        },
        {
            img: "/assets/react.svg",
        },
        {
            img: "/assets/react.svg",
        },
        {
            img: "/assets/react.svg",
        },
        {
            img: "/assets/react.svg",
        },
        {
            img: "/assets/react.svg",
        },
    ];
    const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
    return (
        <section className=" w-full h-screen flex flex-col items-center justify-center gap-15">
            <h1 className="text-5xl font-bold mb-10 flex flex-wrap justify-center text-shadow">
                <span className="text-orange-500 cherry text-stroke-white">
                    B
                </span>
                <span className="text-yellow-500 cherry text-stroke-white">
                    e
                </span>
                <span className="text-green-600 cherry text-stroke-white">
                    s
                </span>
                <span className="text-pink-500 cherry text-stroke-white">
                    t
                </span>
                <span className="w-5">
                    
                </span>
                <span className="text-purple-500 cherry text-stroke-white">
                    S
                </span>
                <span className="text-green-500 cherry text-stroke-white">
                    e
                </span>
                <span className="text-orange-600 cherry text-stroke-white">
                    l
                </span>
                <span className="text-pink-400 cherry text-stroke-white">
                    l
                </span>
                <span className="text-green-600 cherry text-stroke-white">
                    e
                </span>
                <span className="text-orange-500 cherry text-stroke-white">
                    r
                </span>
                
            </h1>
            <div className="relative w-full h-[50%]  flex items-center">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    <ChevronLeft />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto px-10 w-full scroll-smooth scrollbar-hidden"
                >
                    {bestSellers.map((e, index) => (
                        <div
                            key={index}
                            className={`min-w-[40vh] h-[40vh]  ${index%2==0? 'bg-[#F4E6D8]' : 'bg-[#E95CA1]'} rounded-2xl flex items-center justify-center shrink-0`}
                        >
                            <img
                                src={e.img}
                                className="w-[36vh] h-[36vh] object-cover object-center"
                                alt=""
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
};

export default BestSellers;
