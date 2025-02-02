// components/Clients.tsx
import Image from "next/image";
import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from './data';
const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className="text-center text-4xl font-bold mt-4 text-black ">
        Les avis de 
        <span className='text-sky-800'> mes clients</span>
      </h1>
      <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <InfiniteMovingCards
        items={testimonials}
        direction='left'
        speed='slow' 
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={100}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;