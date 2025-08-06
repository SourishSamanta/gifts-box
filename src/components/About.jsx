import React from "react";
import about from "/assets/about.png";
const About = () => {
    return (
        <section className=" w-full h-screen flex ">
            <div className=" h-full w-3/5 bg-[#A7B6CC] text-[1.8vw] py-10 px-20 flex flex-col justify-center text-white gap-8">
                <p>
                    At Your Gifts Box, we believe that the best gifts are the
                    ones that feel personal. That’s why we’ve made it our
                    mission to turn everyday gifting into a personalised
                    experience.
                </p>

                <p>
                    Whether you’re celebrating love, friendship, or milestones,
                    we help you say it your way—with customised gifts that are
                    made just for them.
                </p>

                <p>
                    From handcrafted keepsakes and photo gifts to curated
                    hampers and branded corporate merchandise, we bring your
                    vision to life.
                </p>
            </div>

            <div className=" h-full w-2/5 bg-amber-600 bg-[url(/assets/about.png)] bg-cover"></div>
        </section>
    );
};

export default About;
