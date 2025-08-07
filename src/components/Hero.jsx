import React from "react";
import basket from "/assets/basket.png";
const Hero = () => {
    return (
        <section className=" w-full h-screen bg-[url(/assets/bg.png)] bg-cover bg-center flex items-center justify-center">
            <div className="relative flex flex-col items-center justify-center gap-10">
                <img src={basket} className=" -mb-20 z-20 h-[13vh]" alt="" />
                <h1 className="text-8xl  leading-tight">
                    <span className="text-orange-500 text-outline cherry ">G</span>
                    <span className="text-green-500 text-outline cherry ">i</span>
                    <span className="text-pink-500 text-outline cherry">f</span>
                    <span className="text-orange-500 text-outline cherry">t</span>
                    <span className="text-green-400 text-outline cherry">s </span>

                    <span className="text-purple-500 text-outline cherry">T</span>
                    <span className="text-pink-400 text-outline cherry">h</span>
                    <span className="text-orange-400 text-outline cherry">a</span>
                    <span className="text-green-500 text-outline cherry">t</span>
                    <br />

                    <span className="text-orange-500 text-outline cherry">S</span>
                    <span className="text-purple-400 text-outline cherry">p</span>
                    <span className="text-pink-400 text-outline cherry">e</span>
                    <span className="text-orange-500 text-outline cherry">a</span>
                    <span className="text-purple-500 text-outline cherry">k </span>

                    <span className="text-pink-500 text-outline cherry">Y</span>
                    <span className="text-orange-400 text-outline cherry">o</span>
                    <span className="text-green-500 text-outline cherry">u</span>
                </h1>
                <button className=" px-5 py-3 bg-amber-500 rounded-md text-white">
                    Shop Now
                </button>
            </div>
        </section>
    );
};

export default Hero;
