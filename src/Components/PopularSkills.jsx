import React from "react";
import PopularSkillCard from "./PopularSkillCard";

const PopularSkills = ({ skills }) => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="
            text-3xl sm:text-4xl md:text-4xl
            font-bold
            text-center
            mb-12
            animate__animated animate__fadeInDown
          "
        >
          Popular Skills
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8
          "
        >
          {skills?.slice(0, 6).map((skill, index) => (
            <div
              key={skill.skillId}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="animate__animated animate__fadeInUp"
            >
              <PopularSkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSkills;
