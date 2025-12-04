import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import ParticleBackground from '../components/ParticleBackground'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(()=>{
        gsap.utils.toArray('.timeline-card').forEach((card, index)=>{
             gsap.from(card, {
                xPercent: index % 2 === 0 ? -100 : 100,
                opacity: 0,
                duration:1,
                ease:'power2.inOut',
                scrollTrigger:{
                    trigger:card ,
                    start:'top 80%'
                }
             })
        })

        gsap.fromTo('.timeline',
            {
                scaleY: 0,
                transformOrigin:'top center'
            },
            {
                scaleY: 1,
                ease:'none',
                scrollTrigger:{
                    trigger:'.experience-timeline-wrapper',
                    start:'top center',
                    end:'bottom center',
                    scrub: 1
                }
            }
        )
    },[]);
  return (
   <section id='education' className='relative w-full md:mt-40 mt-20 section-padding xl:px-0'>
    <ParticleBackground className="z-0" />
    <div className='relative z-10 w-full h-full md:px-20 px-5'>
       <TitleHeader title="Education" 
       sub="💼 The academic experiences that built my technical expertise"/> 

       <div className='experience-timeline-wrapper mt-32 relative min-h-screen'>
        {/* Center timeline line */}
        <div className='absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 hidden xl:block z-10'>
            <div className='timeline w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent'/>
        </div>

        <div className='relative z-20 xl:space-y-24 space-y-10 pb-20'>
            {expCards.map((card, index)=>(
                <div key={card.title} className='timeline-card flex flex-col xl:flex-row items-center xl:items-stretch relative'>
                  
                   {/* Left side content (for even index) or empty space (for odd index) */}
                   <div className={`xl:w-5/12 w-full ${index % 2 === 0 ? 'xl:block' : 'xl:block'} ${index % 2 === 1 ? 'xl:order-1' : 'xl:order-1'}`}>
                        {index % 2 === 0 && (
                            <div className='xl:pr-8'>
                                <GlowCard showStars={false} showReview={false}>
                                    {/* Logo, Title and Date in horizontal layout */}
                                    <div className='flex items-start gap-4 mb-6'>
                                        <img src={card.logoPath} alt={card.title} className='w-16 h-16 object-contain rounded-lg flex-shrink-0' />
                                        <div className='flex flex-col'>
                                            <h1 className='font-semibold text-xl md:text-2xl mb-2'>{card.title}</h1>
                                            <p className='text-[#cfe2f5] text-xl italic mb-4'>
                                                           {card.subtitle}
                                             </p>
                                            <p className='text-white-50 text-sm'>
                                                📆 {card.date}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <ul className='list-disc ml-5 mt-5 flex flex-col gap-3 text-white-50'>
                                        {card.responsibilities.map((responsibility, idx)=>(
                                            <li key={idx} className='text-base md:text-lg'>
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </GlowCard>
                            </div>
                        )}
                   </div>

                   {/* Center logo on timeline */}
                   <div className='xl:w-2/12 flex justify-center xl:order-2 my-4 xl:my-0'>
                        <div className='timeline-logo relative z-30'>
                            <img src={card.logoPath} alt="logo" className='w-30px h-30px object-contain' />
                        </div>
                   </div>

                   {/* Right side content (for odd index) or empty space (for even index) */}
                   <div className={`xl:w-5/12 w-full ${index % 2 === 1 ? 'xl:block' : 'xl:block'} xl:order-3`}>
                        {index % 2 === 1 && (
                            <div className='xl:pl-8'>
                                <GlowCard showStars={false} showReview={false}>
                                    {/* Logo, Title and Date in horizontal layout */}
                                    <div className='flex items-start gap-4 mb-6'>
                                        <img src={card.logoPath} alt={card.title} className='w-16 h-16 object-contain rounded-lg flex-shrink-0' />
                                        <div className='flex flex-col'>
                                            <h1 className='font-semibold text-xl md:text-2xl mb-2'>{card.title}</h1>
                                            <p className='text-[#cfe2f5] text-xl italic mb-4'>
                                                           {card.subtitle}
                                             </p>
                                            <p className='text-white-50 text-sm'>
                                                📆 {card.date}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <ul className='list-disc ml-5 mt-5 flex flex-col gap-3 text-white-50'>
                                        {card.responsibilities.map((responsibility, idx)=>(
                                            <li key={idx} className='text-base md:text-lg'>
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </GlowCard>
                            </div>
                        )}
                   </div>
                </div>
            ))}
        </div>
       </div>
    </div>
   </section>
  )
}

export default ExperienceSection
