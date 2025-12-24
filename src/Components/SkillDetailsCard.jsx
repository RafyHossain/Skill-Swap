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
    <div
      data-aos="fade-up"
      className="
        card
        bg-base-100
        shadow-xl
        border
        p-5 sm:p-6 md:p-8
        animate__animated animate__fadeInUp
      "
    >
      <h2 className="font-bold mb-4 text-lg sm:text-xl">
        Details of {skillName}
      </h2>

      <figure>
        <img
          src={image}
          alt={skillName}
          className="
            w-full
            h-56 sm:h-64 md:h-[350px]
            object-cover
            rounded-xl
          "
        />
      </figure>

      <div className="card-body space-y-5 px-0">
        <h2 className="card-title text-xl sm:text-2xl font-bold">
          {skillName}
        </h2>

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-600">
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaUser /> <span className="font-semibold">{providerName}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> {providerEmail}
            </p>
          </div>

          <div className="space-y-2 sm:text-right">
            <p className="flex sm:justify-end items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">Rating:</span>
              <span className="font-bold">{rating}</span>
            </p>
            <p className="font-semibold text-primary">
              <span className="text-black">Price:</span> ${price}
            </p>
          </div>
        </div>

        <div className="border border-dashed"></div>

        <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-600">
          <p>
            Slots Available: <span className="font-bold">{slotsAvailable}</span>
          </p>
          <p className="flex items-center gap-1">
            <FaTag /> {category}
          </p>
        </div>

        <div className="border border-dashed"></div>

        <div data-aos="zoom-in" className="max-w-2xl mx-auto w-full">
          <BookSessionForm />
        </div>

        <div>
          <Link to="/">
            <button className="btn btn-outline btn-primary btn-sm hover:animate__pulse animate__animated">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillDetailsCard;
