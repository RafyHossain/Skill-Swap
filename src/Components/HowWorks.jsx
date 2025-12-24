import React, { useEffect, useState } from "react";
import {
  FaUserPlus,
  FaSearch,
  FaHandshake,
  FaComments,
  FaSyncAlt,
} from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const HowWorks = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch("/howItWorks.json")
      .then((res) => res.json())
      .then((data) => setSteps(data));
  }, []);

  // icon mapper
  const iconMap = {
    user: <FaUserPlus className="text-4xl text-primary" />,
    search: <FaSearch className="text-4xl text-primary" />,
    handshake: <FaHandshake className="text-4xl text-primary" />,
    chat: <FaComments className="text-4xl text-primary" />,
    repeat: <FaSyncAlt className="text-4xl text-primary" />,
    star: <MdOutlineRateReview className="text-4xl text-primary" />,
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                p-6
                rounded-2xl
                bg-white
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                animate__animated animate__fadeInUp
              "
            >
              <div className="mb-4 flex justify-center">
                {iconMap[step.icon]}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-center">
                {step.title}
              </h3>

              <p className="text-gray-500 mb-3 text-center text-sm">
                {step.subtitle}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed text-center">
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
