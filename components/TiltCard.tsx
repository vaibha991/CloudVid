import React from 'react';
import Tilt from 'react-parallax-tilt';
import './TiltCard.css'; // import your CSS file

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.25}
      scale={1.05}
      transitionSpeed={250}
      className={`tilt-card ${className || ''}`}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;
