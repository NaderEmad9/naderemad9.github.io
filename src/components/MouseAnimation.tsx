
import React from 'react';

const MouseAnimation = () => {
  return (
    <div className="flex flex-col items-center animate-bounce">
      <div className="relative w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full">
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default MouseAnimation;
