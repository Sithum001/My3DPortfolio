import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        <TitleHeader
          title="What People Say About Me?"
          sub="Client Feedback Highlights"
        />

        {/* Column Layout with Vertical Spacing */}
        <div className="lg:columns-3 md:columns-2 columns-1 space-y-6 mt-16 break-inside-avoid-column">
          {testimonials.map(({ imgPath, name, mentions, review }, i) => (
            <GlowCard
              key={i}
              card={{ review }}
              className="break-inside-avoid p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={imgPath}
                  alt={name}
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <p className="font-bold">{name}</p>
                  <p className="text-white-50">{mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
