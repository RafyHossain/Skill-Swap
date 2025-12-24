import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PopularSkillCard = ({ skill }) => {
  const { skillName, image, rating, price, skillId } = skill;

  return (
    <div
      data-aos="fade-up"
      className="
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        overflow-hidden
        hover:-translate-y-1
        animate__animated animate__fadeInUp
      "
    >
      <img
        src={image}
        alt={skillName}
        className="
          w-full
          h-40 sm:h-44 md:h-48
          object-cover
        "
      />

      <div className="p-4 flex flex-col h-full">
        <h3 className="text-base sm:text-lg font-semibold mb-2">{skillName}</h3>

        <div className="flex items-center gap-1 mb-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>

        <p className="text-lg font-bold text-primary mb-4"><span className="font-bold text-blue-950">Price: </span>${ price}</p>

        <Link
          to={`/skill-details/${skillId}`}
          className="
            btn btn-outline btn-primary btn-sm w-full
            mt-auto
            animate__animated
            hover:animate__pulse
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PopularSkillCard;
