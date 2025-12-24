import React from "react";
import { FaStar, FaUser, FaEnvelope, FaTag } from "react-icons/fa";
import { Link } from "react-router";
import BookSessionForm from "./BookSessionForm";

const SkillDetailsCard = ({ skill }) => {
  if (!skill) return null;

  const {
    skillName,
    image,
    description,
    providerName,
    providerEmail,
    rating,
    price,
    slotsAvailable,
    category,
  } = skill;

  return (
    <div className="card bg-base-100 shadow-lg border p-8">

        <h2 className="font-bold mb-3"> Details of {skillName}</h2>
      
      {/* Image */}
      <figure>
        <img
          src={image}
          alt={skillName}
          className="w-full h-[350px] object-cover rounded-xl"
        />
      </figure>

      {/* Body */}
      <div className="card-body space-y-4">

        {/* Title */}
        <h2 className="card-title text-2xl font-bold">
          {skillName}
        </h2>

        {/* Provider Info */}
        <div className="flex items-center justify-between text-sm text-gray-600">

          <div className="space-y-1">
            <p className="flex items-center gap-2">
              <FaUser /> <span className="font-semibold">{providerName}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> {providerEmail}
            </p>
          </div>

          <div className="text-right space-y-1">
            <p className="flex items-center gap-1 justify-end">
              <FaStar className="text-yellow-400" /> <span className="font-semibold">Rating:</span><span className="font-bold">{rating}</span>
            </p>
            <p className="font-semibold text-primary"><span className="font-semibold text-black">Price :</span>
              ${price}
            </p>
          </div>
        </div>
        <div className="border border-dashed"></div>

        {/* Description */}
        <p className="text-gray-800 leading-relaxed">
          {description}
        </p>

        {/* Extra Info */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>Slots Available: <span className="font-bold">{slotsAvailable}</span> </p>
          <p className="flex items-center gap-1">
            <FaTag /> {category}
          </p>
        </div>
        <div className="border border-dashed"></div>

        <div className="max-w-2xl mx-auto"><BookSessionForm></BookSessionForm></div>

        {/* Button */}
        <div>
          <Link to="/">
            <button className="btn btn-outline btn-primary btn-sm">
              Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SkillDetailsCard;
