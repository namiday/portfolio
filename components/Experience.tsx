// components/Experience.tsx
import React from 'react';
import { workExperience } from './data';
import { Button } from './ui/MovingBorders';
import VerticalTimeline from './ui/VerticalTimeline';

const Experience = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className="text-center text-4xl font-bold mt-4 text-black ">
            Mes 
        <span className='text-sky-800'> expériences professionnelles</span>
      </h1>
        <div className='w-full mt-12 gap-10'>
            <VerticalTimeline/>
        </div>
    </div>
  );
};

export default Experience;
