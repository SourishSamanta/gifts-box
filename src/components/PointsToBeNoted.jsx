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
      <h2 className="text-4xl font-bold cherry mb-15">
        
          Points to be Noted
        
      </h2>

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
