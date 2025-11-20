import React, { useEffect } from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import { gsap } from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
    useEffect(() => {
        // Animate individual words/icons
        gsap.fromTo(
            '.hero-text .wrapper span',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power2.out' }
        );

        // Animate remaining h1 elements
        gsap.fromTo(
            '.hero-text h1:not(:first-child)',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' }
        );
    }, []);

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-1 z-10">
                <img src="/images/bg.png" alt="" />
            </div>
            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span
                                                key={word.text}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-7 h-7 md:p-2 p-1 rounded-full bg-white/50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                Hi, I’m Sithum, a developer
                            </p>
                            <Button
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="button"
                                text="See my Work"
                            />
                        </div>
                    </div>
                </header>
                <figure>
                    <div className="hero-3d-layout flex">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    );
};

export default Hero;
