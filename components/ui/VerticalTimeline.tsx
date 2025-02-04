"use client";

import React, { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: '2021-...',
    cardTitle: 'Consultant informatique dans la défense',
    cardDetailedText: 'Developpement sur des sujets embarqués en C, C++ avec une forte composante temps réel.',
  },
  {
    title: '2018-2021',
    cardTitle: "Ingénieur Informatique R&D",
    cardDetailedText: 'Developpement de fonctionnalités 5G en C++.',
  },
  {
    title: '2016-2018',
    cardTitle: "Ingénieur embarqué alternant",
    cardDetailedText: 'Développement de programme de suivi pour des bancs de tests sur puces électroniques',
  },
  {
    title: '2015-2016',
    cardTitle: "Apprenti développeur Mobile et web",
    cardDetailedText: "Developpement d'application mobile de gestion de production pour les cadres de l'entreprise",
  },
];

const VerticalTimeline = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My Timeline</h1>
      <Chrono 
        items={items} 
        mode="VERTICAL_ALTERNATING" 
        theme={{
          primary: '#1B263B',
          secondary: '#1B263B',
          cardBgColor: 'white',
          titleColor: 'black',
          titleColorActive: 'white',
        }} 
      />
    </div>
  );
};

export default VerticalTimeline;