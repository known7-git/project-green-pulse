import React from "react";

const CarbonFootprintTracker = () => {
  return (
    <div className="min-h-screen mt-15 text-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Carbon Footprint Tracker</h1>
      
      {/* Input Form */}
      <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Calculate Your Carbon Footprint</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Daily Commute (km)</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter km" />
          </div>
          <div>
            <label className="block font-medium">Electricity Usage (kWh per day)</label>
            <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter kWh" />
          </div>
          <div>
            <label className="block font-medium">Diet Type</label>
            <select className="w-full p-2 border rounded-md">
              <option>Vegan</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Calculate
          </button>
        </form>
      </div>

      {/* Leaderboard */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
        <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
          <li className="flex justify-between p-2 border-b"><span>1. User A</span> <span>200 kg CO₂</span></li>
          <li className="flex justify-between p-2 border-b"><span>2. User B</span> <span>220 kg CO₂</span></li>
          <li className="flex justify-between p-2"><span>3. User C</span> <span>250 kg CO₂</span></li>
        </ul>
      </div>
    </div>
  );
};

export default CarbonFootprintTracker;