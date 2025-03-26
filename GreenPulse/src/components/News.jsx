import React from "react";

const NewsEvents = () => {
  return (
    <div className="min-h-screen bg-white text-white p-6 mt-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-tea-green text-black mb-6">Climate News & Events</h1>
        
        {/* News Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-black text-beige mb-4">Latest News</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-cornsilk">News Title {item}</h3>
                <p className="text-buff mt-2">Brief description of the news article. This section will be dynamic.</p>
                <button className="mt-4 px-4 py-2 bg-tea-green text-gray-400 rounded-md font-semibold hover:bg-green-400 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Events Section */}
        <section>
          <h2 className="text-3xl font-semibold text-beige mb-4 text-black">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((event) => (
              <div key={event} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-cornsilk">Event Title {event}</h3>
                <p className="text-buff mt-2">Brief details about the event. This will be dynamically updated.</p>
                <button className="mt-4 px-4 py-2 bg-papaya-whip text-gray-400 rounded-md font-semibold hover:bg-orange-300 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsEvents;