import React from "react";

const countries = [
  { rank: 1, name: "Denmark", score: 82.5 },
  { rank: 2, name: "Sweden", score: 81.3 },
  { rank: 3, name: "Norway", score: 80.1 },
  { rank: 4, name: "Germany", score: 78.6 },
  { rank: 5, name: "United Kingdom", score: 77.9 },
];

const CountryRanking = () => {
  return (
    <div className="min-h-screen white text-white p-6 mt-15">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Country Rankings by Climate Performance</h1>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 border-b">Rank</th>
                <th className="p-3 border-b">Country</th>
                <th className="p-3 border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-700 transition duration-200"
                >
                  <td className="p-3">{country.rank}</td>
                  <td className="p-3">{country.name}</td>
                  <td className="p-3">{country.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CountryRanking;
