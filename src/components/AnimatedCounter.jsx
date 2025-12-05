import React, { useState, useEffect, useRef } from 'react'
import { counterItems } from '../constants'
import { div } from 'three/tsl'
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  const [startCounting, setStartCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startCounting) {
            setStartCounting(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [startCounting]);

  return (
    <div ref={counterRef} id="counter" className="padding-x-lg xl:mt-0 mt-32">
        <div className="mx-auto grid-4-cols gap-6">
            {counterItems.map((item, index)=>(
                <div key={index} className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-md rounded-xl p-10 flex flex-col justify-center border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105">
                <div className="counter-number text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-6xl font-bold mb-3 drop-shadow-lg">
                  <CountUp 
                    suffix={item.suffix} 
                    end={item.value}
                    start={startCounting ? 0 : null}
                    duration={4.5}
                  />
                </div>
                <div className="text-gray-200 text-lg font-semibold tracking-wide">{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter
