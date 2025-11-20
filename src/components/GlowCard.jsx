import React, { useRef } from 'react';

const GlowCard = ({ card, children, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    //get the mouse position relative to card 
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width /2;
    const y = e.clientY - rect.top - rect.height/2;
    //calc the angle from the centere of the card
      let angle = Math.atan2(y, x) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      card.style.setProperty('--start', angle + 60);

 
  };

  return (
   <div
  ref={(el) => (cardRefs.current[index] = el)}
  onMouseMove={handleMouseMove(index)}
  className="card card-border timeline-card rounded-xl p-10 relative"
>
  {/* Glow Layer */}
  <div className="glow"></div>

  {/* Actual Card Content */}
  <div className="relative z-10">
    <div className="flex items-center gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src="/images/star.png" alt="star" className="size-5" />
      ))}
    </div>

    <p className="text-white/50 text-lg mb-5">{card.review}</p>

    {children}
  </div>
</div>

  );
};

export default GlowCard;
