import React from 'react';
import { useEffect, useState } from "react";
import {
  FaUserPlus,
  FaSearch,
  FaHandshake,
  FaComments,
  FaSyncAlt,
  FaStreetView,
} from "react-icons/fa";
import { MdOutlineRateReview } from 'react-icons/md';


const HowWorks = () => {
     const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/howItWorks.json")
      .then(res => res.json())
      .then(data => setSteps(data));
  }, []);

  // icon mapper INSIDE component file
  const iconMap = {
    user: <FaUserPlus className="text-3xl text-primary" />,
    search: <FaSearch className="text-3xl text-primary" />,
    handshake: <FaHandshake className="text-3xl text-primary" />,
    chat: <FaComments className="text-3xl text-primary" />,
    repeat: <FaSyncAlt className="text-3xl text-primary" />,
      star: <MdOutlineRateReview className="text-3xl text-primary" />
  };
    return (
        <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(step => (
            <div
              key={step.id}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
            >
              {/* ICON */}
              <div className="mb-4">
                {iconMap[step.icon]}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 mb-3">
                {step.subtitle}
              </p>

              <p className="text-gray-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowWorks;