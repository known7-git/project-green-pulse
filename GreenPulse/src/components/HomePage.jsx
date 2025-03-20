import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faGlobe, faTree } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen  text-center p-6 overflow-hidden">
            {/* Doodles using FontAwesome Icons */}
            <FontAwesomeIcon icon={faLeaf} className="" />
            <FontAwesomeIcon icon={faGlobe} className="" />
            <FontAwesomeIcon icon={faTree} className="" />
            
            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-green-800">Green Pulse</h1>
            <h2 className="text-xl md:text-2xl text-green-600 mt-2 italic">"Powering a Sustainable Tomorrow"</h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
                Your One Stop Solution for Everything Related to Climate Change
            </p>
            <button className="mt-6 bg-green-500 px-6 py-3 text-lg text-white rounded-lg hover:bg-green-600 transition">
                Learn More
            </button>
        </div>
    );
};

export default HomePage;