import React from 'react';

// Define types for the Star component props
interface StarProps {
  filled: boolean;
}

// Define types for the Rating component props
interface RatingProps {
  rating?: number; 
}


const Star: React.FC<StarProps> = ({ filled }) => {
  // Log the value of `filled` to the console
  // console.log("Star filled:", filled);

  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1054 16.5737L17.6107 20.5L15.8844 13.1L21.6317 8.12105L14.0633 7.47895L11.1054 0.5L8.14752 7.47895L0.579102 8.12105L6.32647 13.1L4.60015 20.5L11.1054 16.5737Z"
        fill={filled ? '#FFB800' : '#C4C4C4'} // Yellow for filled, Gray for empty
      />
    </svg>
  );
};

const HalfStar: React.FC = () => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="halfFill" x1="0" x2="1" y1="0" y2="0">
        <stop offset="50%" stopColor="#FFB800" />
        <stop offset="50%" stopColor="#C4C4C4" />
      </linearGradient>
    </defs>
    <path
      d="M11.1054 16.5737L17.6107 20.5L15.8844 13.1L21.6317 8.12105L14.0633 7.47895L11.1054 0.5L8.14752 7.47895L0.579102 8.12105L6.32647 13.1L4.60015 20.5L11.1054 16.5737Z"
      fill="url(#halfFill)"
    />
  </svg>
);

const Rating: React.FC<RatingProps> = ({ rating = 0 }) => {
  // console.log('from rating components', rating);

  // Ensure rating is a number and reviews is a valid number
  const fullStars = Math.floor(rating); // Number of fully filled stars
  const hasHalfStar = rating % 1 !== 0; // Check for half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars

  return (
    <div className="flex gap-2">
      <div className="flex gap-0.5">
        {/* Render full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={`full-${index}`} filled />
        ))}

        {/* Render half star */}
        {hasHalfStar && <HalfStar />}

        {/* Render empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star key={`empty-${index}`} filled={false} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
