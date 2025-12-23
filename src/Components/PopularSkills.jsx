import React from 'react';
import PopularSkillCard from './PopularSkillCard';

const PopularSkills = ({skills}) => {
    return (
         <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.slice(0, 6).map(skill => (
            <PopularSkillCard
              key={skill.skillId}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </section>
    );
};

export default PopularSkills;