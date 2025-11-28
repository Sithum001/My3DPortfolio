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

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'Sithum_Gimhana_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-1 z-10">
                <img src="/images/bg.png" alt="" />
            </div>
            <div className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                         
                            <h1>Hi! I'am</h1>
                            <h1>Sithum Gimhana</h1>
                            
                               <h1>
                                I'am a
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
                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none md:w-1/2">
                               I have a strong background in web development, with a focus on creating dynamic and responsive user interfaces. My passion for coding drives me to continuously learn and adapt to new technologies, ensuring that I stay at the forefront of the industry and consistently deliver high-quality, user-centered digital solutions.
                            </p>
                            <button
                                onClick={handleDownloadCV}
                                className="md:w-80 md:h-16 w-60 h-12 mt-6 cta-wrapper pointer-events-auto"
                            >
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                    <p className="text">Download MY CV</p>
                                    <div className="arrow-wrapper">
                                        <img src="/images/arrow-down.svg" alt="arrow" />
                                    </div>
                                </div>
                            </button>
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
