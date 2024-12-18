import { useState } from 'react';
import Confetti from 'react-confetti';

const CardWithConfetti = ({ title="", description="" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <Confetti
          width={300}
          height={300}
          numberOfPieces={100}
          recycle={false}
          className="absolute inset-0 pointer-events-none"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-gunmetal">{title}</h3>
      <p className="text-charcoal">{description}</p>
    </div>
  );
};

export default CardWithConfetti;