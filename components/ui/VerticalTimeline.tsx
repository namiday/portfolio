"use client";

import React from 'react';
import { Chrono } from 'react-chrono';

const items = [
  {
    title: '2025',
    cardTitle: 'Software Engineer',
    cardDetailedText: 'Building scalable applications.',
  },
  {
    title: '2022',
    cardTitle: "Master's Degree",
    cardDetailedText: 'AI and Machine Learning.',
  },
  {
    title: '2018',
    cardTitle: "Bachelor's Degree",
    cardDetailedText: 'Computer Science and Engineering.',
  },
];

const VerticalTimeline = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>My Timeline</h1>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" />
    </div>
  );
};

export default VerticalTimeline;
