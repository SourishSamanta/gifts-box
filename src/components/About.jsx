import React from "react";
import about from "/assets/about.png";
const About = () => {
    return (
        <section className=" w-full h-screen flex md:flex-row  flex-col">
            <div className=" md:h-full h-1/2 md:w-3/5 w-full bg-[#A7B6CC] md:text-[1.4vw] text-[3.1vw] py-10 md:px-20 px-10 flex flex-col justify-center text-white gap-8">
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

            <div className=" md:h-full h-1/2 md:w-2/5 w-full bg-amber-600 bg-[url(/assets/giftBoxMockup2.png)] bg-center bg-cover"></div>
        </section>
    );
};

export default About;
