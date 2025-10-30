import React, { useEffect } from "react";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="w-full pt-[8vh]">
      {/* Top Banner */}
      <div className="bg-[url(/assets/aboutBg.png)] bg-cover flex items-center justify-center h-[30vh] text-center text-white text-4xl font-bold relative">
        <div className="bg-pink-400 bg-opacity-30 h-full w-full absolute top-0 left-0"></div>
        <span className="cherry relative z-10">About Us</span>
      </div>

      {/* Story Section */}
      <div className="bg-[#FFF7EC] px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12 relative">
        {/* Decorative element */}
        {/* <img
          src="/assets/gift.png"
          alt="Gift"
          className="absolute top-5 left-5 w-20 opacity-30 rotate-12"
        /> */}

        {/* Story Content */}
        <div className="flex-1 text-gray-800">
          <h2 className="cherry text-3xl md:text-5xl mb-6 text-orange-500 text-center md:text-left">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            <span className="font-semibold text-pink-500">
              From one party to a passion.
            </span>{" "}
            It all started at a birthday party — where I noticed how return gifts, though thoughtful,
            often lacked that personal spark. That simple observation turned into a big idea.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            When it was my daughter’s birthday, I wanted her day to be truly unforgettable — every smile,
            every moment, and yes, every return gift. That’s when I began exploring creative ways to make
            each token meaningful and unique. 
          </p>
          <p className="text-lg leading-relaxed mb-6">
            What began with just 5–6 handmade ideas grew into{" "}
            <span className="font-semibold text-green-500">Your Gifts Box</span> —
            now offering over 500 personalized products for kids, adults, and corporate clients.
          </p>
          <p className="text-lg leading-relaxed">
            Every creation is crafted with love, detail, and a personal touch that makes it truly yours.
            Whether it’s a birthday return gift, a festive hamper, or a custom corporate box —
            we’re here to make every occasion unforgettable.
          </p>

          <p className="text-lg mt-6 italic text-gray-600">
            Thank you for being part of our journey.  
            <br />
            <span className="font-semibold text-pink-500">
              Let’s keep spreading smiles, one gift at a time.
            </span>
          </p>
        </div>

        {/* Owner Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative md:w-[40vw] w-[40vh] md:h-[40vh] h-[55vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-300">
            <img
              src="/assets/founder.jpeg"
              alt="Owner"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white text-center py-2 cherry text-lg">
              Founder, Your Gifts Box
            </div>
          </div>
        </div>
      </div>

      {/* Tagline Section */}
      <div className="bg-gradient-to-r from-pink-200 via-orange-100 to-green-100 py-16 text-center">
        <h2 className="cherry text-3xl md:text-4xl font-semibold mb-4 text-gray-700">
          “Every Gift Tells a Story — Let Yours Be Beautiful.”
        </h2>
        <p className="text-gray-600 px-5 text-md max-w-3xl mx-auto">
          Our mission is to blend creativity, emotion, and craftsmanship — so that every box you open
          brings a smile that lasts.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
