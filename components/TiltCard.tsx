'use client';

import Tilt from 'react-parallax-tilt';
import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className }: TiltCardProps) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.05}
      transitionSpeed={250}
      className={`rounded-xl p-5 bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-xl ${className}`}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;
