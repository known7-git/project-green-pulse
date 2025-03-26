import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to Green Pulse, your trusted platform for tracking and reducing
        your carbon footprint. Our mission is to empower individuals and
        organizations with actionable insights and sustainable solutions to
        combat climate change.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
      <p className="text-gray-700 mb-6">
        At Green Pulse, we aim to create awareness about carbon emissions and
        provide tools to help you make informed decisions towards a greener
        planet. Whether it’s through carbon tracking, renewable energy
        solutions, or green initiatives, we are committed to driving
        sustainability.
      </p>
      <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Accurate carbon footprint tracking</li>
        <li>Practical solutions for a sustainable lifestyle</li>
        <li>Latest news and updates on environmental initiatives</li>
        <li>A dedicated community of eco-conscious individuals</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Join Us</h2>
      <p className="text-gray-700">
        Be a part of the movement towards a sustainable future. Explore our
        solutions and take action today to reduce your environmental impact.
      </p>
    </div>
  );
};

export default AboutUs;
