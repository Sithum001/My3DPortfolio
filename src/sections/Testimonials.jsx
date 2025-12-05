import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'
import ParticleBackground from '../components/ParticleBackground'

const Testimonials = () => {
  return (
    <section id="experience" className="relative flex-center section-padding">
      <ParticleBackground className="z-0" />
      <div className="relative z-10 w-full h-full md:px-8 px-5">

        <TitleHeader
          title="Leadership & Community Experience"
          sub="Club & Organization Involvement"
        />

        {/* Grid with clear gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-8 mt-12 items-center">
          
          {testimonials.map(({ imgPath, name, mentions, review }, i) => (
            <div 
              key={i} 
              className={`
                duration-300 transition-transform 
                ${i === 1 ? 'md:scale-105 relative z-10' : 'scale-100'} 
              `}
            >
              <GlowCard
                
                showStars={false}
                className="break-inside-avoid"
              >
                {/* Header Container: Image Left, Text Right */}
                <div className="flex items-start gap-3 mb-3">
                  
                  {/* Profile Picture (Top Left) */}
                  <img
                    src={imgPath}
                    alt={name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/10 shrink-0"
                  />

                  {/* Name and Role */}
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {name}
                    </h3>
                    <p className="text-xs text-white-50 mt-1">
                      {mentions}
                    </p>
                  </div>
                </div>  
                <div className="text-white/50 text-base mb-4">
                                            { review }
                </div>
                

                {/* 
                   Note: The review text is passed in `card={{ review }}`.
                   If the stars are still showing, go to your 
                   'GlowCard.jsx' file and remove the star icons there.
                */}
              </GlowCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials