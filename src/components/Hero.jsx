import React from "react";
import basket from "/assets/basket.png";
import logo from "/assets/logo.png"
const Hero = () => {
    return (
        <section className=" w-full h-screen bg-[url(/assets/bg.png)] bg-cover bg-center flex items-center justify-center overflow-clip">
            <div className="relative flex flex-col items-center justify-center gap-10">
                <img src={basket} className=" md:-mb-14 -mb-16 z-20 h-[13vh]" alt="" />

                <img src={logo} className=" h-80" alt="" />

                <h1 className="md:text-3xl -mt-10 text-2xl leading-tight">
                    <span className="text-orange-500 text-outline cherry ">G</span>
                    <span className="text-green-500 text-outline cherry ">i</span>
                    <span className="text-pink-500 text-outline cherry">f</span>
                    <span className="text-orange-500 text-outline cherry">t</span>
                    <span className="text-green-400 text-outline cherry">s </span>

                    <span className="text-purple-500 text-outline cherry">T</span>
                    <span className="text-pink-400 text-outline cherry">h</span>
                    <span className="text-orange-400 text-outline cherry">a</span>
                    <span className="text-green-500 text-outline cherry mr-2">t</span>
                    

                    <span className="text-orange-500 text-outline cherry">S</span>
                    <span className="text-purple-400 text-outline cherry">p</span>
                    <span className="text-pink-400 text-outline cherry">e</span>
                    <span className="text-orange-500 text-outline cherry">a</span>
                    <span className="text-purple-500 text-outline cherry">k </span>

                    <span className="text-pink-500 text-outline cherry">Y</span>
                    <span className="text-orange-400 text-outline cherry">o</span>
                    <span className="text-green-500 text-outline cherry">u</span>
                </h1>
               
            </div>
        </section>
    );
};

export default Hero;
