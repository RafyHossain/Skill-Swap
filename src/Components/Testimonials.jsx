import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Web Developer",
    initial: "S",
    feedback:
      "I taught JavaScript and learned photography in return. The platform made it easy to find the perfect match for my skills.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Language Teacher",
    initial: "M",
    feedback:
      "Teaching Mandarin and learning guitar has been a rewarding experience. I've made great connections through SkillSwap.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Graphic Designer",
    initial: "E",
    feedback:
      "The skill exchange model is brilliant! I improved my design portfolio while learning cooking from a professional chef.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="
                bg-white
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                p-6
                animate__animated animate__fadeInUp
              "
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center font-bold text-lg text-primary">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                “{item.feedback}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
