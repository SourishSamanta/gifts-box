import React from 'react';

const steps = [
  {
    title: "PICK A PRODUCT",
    desc: "Browse our curated collections or tell us your idea.",
    icon: "🔍"
  },
  {
    title: "PERSONALISE IT",
    desc: "Choose names, messages, designs, colors—your gift, your rules.",
    icon: "🎨"
  },
  {
    title: "DELIVERED TO YOUR DOORSTEP",
    desc: "We pack it with care and ship across India.",
    icon: "🚚"
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen bg-[#A7B6CC] flex flex-col items-center py-20 relative">
      <h1 className="text-5xl font-bold text-white mb-16 cherry tracking-wide">
        
          How It Works?
       
      </h1>

      <div className="flex flex-col gap-10 items-center relative z-10 mt-20">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl w-[30vw] flex gap-4 items-center mr-80">
          <span className="text-4xl">{steps[0].icon}</span>
          <div>
            <h2 className="font-bold text-[#5A6B89]">{steps[0].title}</h2>
            <p className="text-[#5A6B89] text-sm">{steps[0].desc}</p>
          </div>
        </div>

        {/* Connector */}
        <div className="w-[2px] h-10 border-l-2 border-dotted border-white" />

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl w-[30vw] flex gap-4 items-center ml-80">
          <span className="text-4xl">{steps[1].icon}</span>
          <div>
            <h2 className="font-bold text-[#5A6B89]">{steps[1].title}</h2>
            <p className="text-[#5A6B89] text-sm">{steps[1].desc}</p>
          </div>
        </div>

        {/* Connector */}
        <div className="w-[2px] h-10 border-l-2 border-dotted border-white" />

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl w-[30vw] flex gap-4 items-center mr-80">
          <span className="text-4xl">{steps[2].icon}</span>
          <div>
            <h2 className="font-bold text-[#5A6B89]">{steps[2].title}</h2>
            <p className="text-[#5A6B89] text-sm">{steps[2].desc}</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HowItWorks;
