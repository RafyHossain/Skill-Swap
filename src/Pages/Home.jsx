import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HowWorks from "../Components/HowWorks";
import { useLoaderData } from "react-router";
import PopularSkills from "../Components/PopularSkills";
import TopRatedProviders from "../Components/TopRatedProviders";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  const skills = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <PopularSkills skills={skills}></PopularSkills>
      <TopRatedProviders></TopRatedProviders>
      <HowWorks></HowWorks>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
