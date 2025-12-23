import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen mt-2 "
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/chqM5v6n/Gemini-Generated-Image-vhskpcvhskpcvhsk.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Exchange Skills. Grow Together.
          </h1>

          <p className="mb-5">
            SkillSwap connects people in your local community to learn, teach,
            and trade skills. From coding and languages to music and fitness —
            share what you know and learn what you love.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
