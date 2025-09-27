import React from 'react';

const notes = [
  {
    icon: "❤️",
    bg: "bg-green-300",
    title: "All our products are made to order with love and care.",
  },
  {
    icon: "🕒",
    bg: "bg-blue-300",
    title: "Please allow 7 working days for crafting your customised gift after the order is placed.",
  },
  {
    icon: "📦",
    bg: "bg-pink-300",
    title: "As each item is uniquely customised, we do not accept returns or exchanges.",
  },
  {
    icon: "📝",
    bg: "bg-purple-300",
    title: "Please make sure all personalisation details are correct before confirming your order.",
  },
];

const PointsToBeNoted = () => {
  return (
    <section className="bg-[#F4E6DD] w-full py-30 px-4 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-10 flex flex-wrap justify-center text-shadow-[10px] text-shadow-orange-500">
                <span className="text-orange-500 cherry text-stroke-white">
                    P
                </span>
                <span className="text-yellow-500 cherry text-stroke-white">
                    o
                </span>
                <span className="text-green-600 cherry text-stroke-white">
                    i
                </span>
                
                <span className="text-pink-500 cherry text-stroke-white">
                    n
                </span>
                <span className="text-orange-400 cherry text-stroke-white">
                    t
                </span>
                <span className="text-purple-500 cherry text-stroke-white">
                    s
                </span>
                <span className="w-4"></span>
                <span className="text-green-500 cherry text-stroke-white">
                    t
                </span>
                <span className="text-orange-600 cherry text-stroke-white">
                    o
                </span>
                <span className="w-4"></span>
                <span className="text-pink-400 cherry text-stroke-white">
                    b
                </span>
                <span className="text-green-600 cherry text-stroke-white">
                    e
                </span>
                <span className="w-4"></span>
                <span className="text-orange-500 cherry text-stroke-white">
                    N
                </span>
                <span className="text-yellow-500 cherry text-stroke-white">
                    o
                </span>
                <span className="text-green-600 cherry text-stroke-white">
                    t
                </span>
                
                <span className="text-pink-500 cherry text-stroke-white">
                    e
                </span>
                <span className="text-orange-400 cherry text-stroke-white">
                    d
                </span>
                
                
            </h1>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {notes.map((note, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-5 rounded-xl shadow-lg border-2 ${note.bg} border-white`}
          >
            <div className="text-3xl">{note.icon}</div>
            <p className="text-[#3b3b3b] font-medium">{note.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PointsToBeNoted;
