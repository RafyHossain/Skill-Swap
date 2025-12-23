import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PopularSkillCard = ({ skill }) => {
  const { skillName, image, rating, price } = skill;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img
        src={image}
        alt={skillName}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {skillName}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>

        <p className="text-lg font-bold text-primary mb-4">
          ${price}
        </p>

        <Link to="/auth/login" className="btn btn-outline btn-primary btn-sm w-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PopularSkillCard;
