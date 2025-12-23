import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import HowWorks from '../Components/HowWorks';
import { useLoaderData } from 'react-router';
import PopularSkills from '../Components/PopularSkills';

const Home = () => {
    const skills=useLoaderData();
    return (
        <div>
            <Hero></Hero>
             <PopularSkills skills={skills}></PopularSkills>
            <HowWorks></HowWorks>
           

            
        </div>
    );
};

export default Home;