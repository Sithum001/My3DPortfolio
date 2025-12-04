import React, { useEffect, useRef } from 'react';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import { gsap } from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
    const imageRef = useRef(null);
    const imageContainerRef = useRef(null);

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

        // Parallax effect on mouse move
        const handleMouseMove = (e) => {
            if (!imageRef.current) return;
            
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const xPos = (clientX / innerWidth - 0.5) * 30;
            const yPos = (clientY / innerHeight - 0.5) * 30;
            
            gsap.to(imageRef.current, {
                x: xPos,
                y: yPos,
                duration: 0.5,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleImageMouseMove = (e) => {
        if (!imageContainerRef.current) return;
        const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const centerX = width / 2;
        const centerY = height / 2;

        const speed = 20;
        const rotateY = ((x - centerX) / centerX) * speed;
        const rotateX = -((y - centerY) / centerY) * speed;
        
        imageContainerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        
        // GlowCard effect - calculate angle for glow
        const xOffset = x - centerX;
        const yOffset = y - centerY;
        let angle = Math.atan2(yOffset, xOffset) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        imageContainerRef.current.style.setProperty('--start', angle + 60);
    };

    const handleImageMouseLeave = () => {
        if (!imageContainerRef.current) return;
        imageContainerRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    const handleDownloadCV = () => {
        // Open CV in new tab
        window.open('/CV.pdf', '_blank');
    };

    return (
        <section id="hero" className="relative overflow-hidden min-h-screen bg-black">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/30"></div>
                
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                    <div className="particle particle-5"></div>
                    <div className="particle particle-6"></div>
                    <div className="particle particle-7"></div>
                    <div className="particle particle-8"></div>
                    <div className="particle particle-9"></div>
                    <div className="particle particle-10"></div>
                    <div className="particle particle-11"></div>
                    <div className="particle particle-12"></div>
                    <div className="particle particle-13"></div>
                    <div className="particle particle-14"></div>
                    <div className="particle particle-15"></div>
                </div>
                
                {/* Animated Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float-delayed"></div>
            </div>
            
            <div className="hero-layout relative z-20">
                {/* Profile Picture - First on Mobile, Right side on Desktop */}
                <figure className="flex items-center justify-center mb-8 xl:mb-0 w-full xl:w-1/2 order-1 xl:order-2">
                    <div 
                        ref={imageContainerRef}
                        onMouseMove={handleImageMouseMove}
                        onMouseLeave={handleImageMouseLeave}
                        className="profile-card relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] overflow-visible rounded-full transition-transform duration-300 ease-out cursor-pointer"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* GlowCard effect layer */}
                        <div className="profile-glow pointer-events-none"></div>
                        
                        <div 
                            ref={imageRef}
                            className="relative w-full h-full z-10 overflow-hidden rounded-full"
                        >
                            <img 
                                src="/images/profile.png" 
                                alt="Sithum Gimhana" 
                                className="w-full h-[130%] object-cover object-[center_10%] shadow-2xl border-4 border-white/10 rounded-full"
                            />
                        </div>
                    </div>
                </figure>

                {/* Text Content and Button - Second on Mobile, Left side on Desktop */}
                <header className="flex flex-col justify-center w-full xl:w-1/2 md:px-20 px-5 xl:pl-20 xl:pr-10 order-2 xl:order-1 mb-4">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                         
                            <h1>Hi! I am</h1>
                            <h1>Sithum Gimhana</h1>
                            
                               <h1>
                                I am a
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span
                                                key={word.text}
                                                className="flex items-center md:gap-3 gap-1 pb-2 whitespace-nowrap"
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
                            <p className="text-white-50 text-base md:text-xl relative z-10 pointer-events-none w-full md:w-[90%] mb-4">
                               I have a strong background in web development, with a focus on creating dynamic and responsive user interfaces. My passion for coding drives me to continuously learn and adapt to new technologies, ensuring that I stay at the forefront of the industry and consistently deliver high-quality, user-centered digital solutions.
                            </p>
                            <button
                                onClick={handleDownloadCV}
                                className="w-full sm:w-64 md:w-72 lg:w-80 h-12 sm:h-14 md:h-16 mt-4 md:mt-6 cta-wrapper pointer-events-auto"
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
         
            </div>
        
            {/* Animated Counter - Third on both Mobile and Desktop */}
            <AnimatedCounter />
          
        </section>
    );
};

export default Hero;
