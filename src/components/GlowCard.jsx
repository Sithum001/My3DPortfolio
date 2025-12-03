import React, { useRef } from 'react';

const GlowCard = ({ card, children, index, showStars = true, showReview = true }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    //get the mouse position relative to card 
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width /2;
    const y = e.clientY - rect.top - rect.height/2;
    //calc the angle from the centere of the card
      let angle = Math.atan2(y, x) * (180 / Math.PI);
      angle = (angle + 360) % 360;
      cardElement.style.setProperty('--start', angle + 60);

 
  };

  return (
   <div
  ref={cardRef}
  onMouseMove={handleMouseMove}
  className="card card-border rounded-xl p-10 relative break-inside-avoid-column"
>
  {/* Glow Layer */}
  <div className="glow"></div>

  {/* Actual Card Content */}
  <div className="relative z-10">
    {showStars && card && (
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>
    )}

    {showReview && card?.review && (
      <p className="text-white/50 text-lg mb-5">{card.review}</p>
    )}

    {children}
  </div>
</div>

  );
};

export default GlowCard;
