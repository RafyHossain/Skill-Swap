import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/top.json")
      .then((res) => res.json())
      .then((data) => setProviders(data));
  }, []);

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="card bg-white shadow-md hover:shadow-xl transition"
            >
              <figure className="px-6 pt-6">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="rounded-full w-24 h-24 mx-auto object-cover"
                />
              </figure>

              <div className="card-body text-center">
                <h3 className="font-bold text-lg">{provider.name}</h3>
                <p className="text-gray-500">{provider.skill}</p>
                <p className="text-yellow-500 font-semibold">
                   Rating  {provider.rating}
                </p>
                <div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedProviders;
