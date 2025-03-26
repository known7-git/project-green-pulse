import React from "react";

const DoomsdayClock = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 text-black p-4">
      <h1 className="text-4xl font-bold mb-4">Doomsday Clock</h1>
      <p className="text-lg text-gray-400 max-w-lg text-center mb-6">
        The Doomsday Clock symbolizes how close humanity is to global catastrophe due to climate change, nuclear risk, and other existential threats.
      </p>
      <div className="relative flex items-center justify-center w-64 h-64 border-8 border-yellow-400 rounded-full shadow-lg">
        <div className="absolute w-4 h-24 bg-yellow-400 rounded-full transform origin-bottom rotate-[-10deg]"></div>
        <span className="absolute text-3xl font-bold">11:50</span>
      </div>
      <p className="mt-6 text-lg font-semibold text-red-400">Time left: 10 minutes to midnight</p>
    </div>
  );
};

export default DoomsdayClock;
