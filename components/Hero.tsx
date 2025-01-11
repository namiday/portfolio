import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {

  const scrollToContact = () => {
    const anc = document.getElementById('contact');

    if(anc){ anc.scrollIntoView({ behavior : 'smooth', block: "start"});}
  }

  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-30 left-200 h-[80vh] w-[50vh] ' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue'/>
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            DevWeb
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Crée des projets pour vous'
          />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Bonjour, je suis Alexandre
          </p>

          <a href='#projects'>
            <MagicButton
              title='Voir mon travail'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Hero
