import React from "react";

const CausesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-200">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Climate Change: Causes, Effects & Solutions</h1>
      
      <Causes />
      <Effects />
      <Prevention />
      <Solutions />
    </div>
  );
};

const Causes = () => (
  <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-tea-green">Causes</h2>
    <ul className="list-disc list-inside">
      <li>Greenhouse gas emissions from industries and vehicles</li>
      <li>Deforestation reducing carbon absorption</li>
      <li>Fossil fuel combustion for energy</li>
      <li>Intensive agriculture and livestock farming</li>
    </ul>
  </section>
);

const Effects = () => (
  <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-beige">Effects</h2>
    <ul className="list-disc list-inside">
      <li>Rising global temperatures and heatwaves</li>
      <li>Melting ice caps and rising sea levels</li>
      <li>More frequent natural disasters</li>
      <li>Loss of biodiversity and ecosystems</li>
    </ul>
  </section>
);

const Prevention = () => (
  <section className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-cornsilk">Prevention</h2>
    <ul className="list-disc list-inside">
      <li>Switching to renewable energy sources</li>
      <li>Reforestation and afforestation</li>
      <li>Implementing strict carbon regulations</li>
      <li>Encouraging sustainable agriculture</li>
    </ul>
  </section>
);

const Solutions = () => (
  <section className="p-6 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-papaya-whip">Solutions</h2>
    <ul className="list-disc list-inside">
      <li>Carbon capture and storage technologies</li>
      <li>Adoption of electric vehicles and clean transport</li>
      <li>Public awareness and climate education</li>
      <li>Global policies and international cooperation</li>
    </ul>
  </section>
);

export default CausesPage;
