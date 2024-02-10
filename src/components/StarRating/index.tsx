"use client";

// components/StarRating.tsx
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating: React.FC = () => {
  const totalStars = 5;
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleClick = (star: number) => {
    setRating(star);
  };

  const handleMouseOver = (star: number) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex items-center mb-[40px] lg:mb-[100px]">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className="star flex items-center"
            color={starValue <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"}
            onClick={() => handleClick(starValue)}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
