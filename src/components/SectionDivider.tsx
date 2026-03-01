"use client";

import React from 'react';

const SectionDivider = () => {
  return (
    <div 
      className="w-full py-2 flex justify-center"
      style={{ 
        background: '#DBE2CC', // Matching the transition color between sections
      }}
    >
      <div className="max-w-md w-full px-6">
        <svg viewBox="0 0 800 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M 20 50 C 80 52, 120 54, 160 50 S 240 42, 280 46 S 360 55, 390 50 C 402 48, 415 36, 405 36 C 395 36, 385 52, 400 52 C 430 52, 460 44, 500 48 S 580 54, 620 50 S 700 46, 740 48 S 770 50, 780 50" 
            fill="none" 
            stroke="#3d4a3a" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;