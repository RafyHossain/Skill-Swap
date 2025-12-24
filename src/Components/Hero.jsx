import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div
      className="
        hero 
        min-h-[90vh] md:min-h-screen
        mt-2
        bg-cover bg-center
      "
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/chqM5v6n/Gemini-Generated-Image-vhskpcvhskpcvhsk.png)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-neutral-content text-center px-4">
        <div className="max-w-xs sm:max-w-md md:max-w-lg">
          <h1
            data-aos="fade-up"
            className="
              mb-5
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold
              animate__animated animate__fadeInDown
            "
          >
            Exchange Skills <br className="hidden sm:block" /> Grow Together.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              mb-6
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-gray-200
            "
          >
            SkillSwap connects people in your local community to learn, teach,
            and trade skills. From coding and languages to music and fitness —
            share what you know and learn what you love.
          </p>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="flex justify-center"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
