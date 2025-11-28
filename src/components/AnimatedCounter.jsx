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
        <div className="mx-auto grid-4-cols">
            {counterItems.map((item, index)=>(
                <div key={index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                <div className="counter-number text-white text-5xl font-bold mb-2">
                  <CountUp 
                    suffix={item.suffix} 
                    end={item.value}
                    start={startCounting ? 0 : null}
                    duration={2.5}
                  />
                </div>
                <div className="text-white-50 text-lg">{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter
