import React, { useRef, useState } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
const sectionRef =useRef(null);
const project1Ref=useRef(null);
const project2Ref=useRef(null);
const project3Ref=useRef(null);
const [selectedProject, setSelectedProject] = useState(null);

const projects =[project1Ref.current,project2Ref.current,project3Ref.current];

const projectsData = [
  {
    id: 1,
    title: "On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde",
    shortDesc: "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience",
    image: "/images/project1.png",
    purpose: "To provide a seamless and intuitive ride-booking experience for users seeking on-demand transportation services.",
    description: "Ryde is a full-featured mobile application that connects riders with drivers in real-time. The app features live tracking, secure payment integration, ride history, and an intuitive user interface designed for both riders and drivers.",
    technologies: ["React Native", "Expo", "TailwindCSS", "Firebase", "Google Maps API", "Stripe"],
    bgColor: "#ffefdb"
  },
  {
    id: 2,
    title: "Library Management Platform",
    shortDesc: "A comprehensive system for managing library resources and operations",
    image: "/images/project2.png",
    purpose: "To streamline library operations including book cataloging, member management, and borrowing processes.",
    description: "A modern library management system that digitizes the entire library workflow. Features include book inventory management, member registration, automated reminders for due dates, search functionality, and detailed analytics for library administrators.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn UI"],
    bgColor: "#ffefdb"
  },
  {
    id: 3,
    title: "YC Directory - A Startup Showcase App",
    shortDesc: "Discover and showcase innovative startups",
    image: "/images/project3.png",
    purpose: "To create a platform where entrepreneurs can showcase their startups and investors can discover promising ventures.",
    description: "YC Directory is a comprehensive startup showcase platform inspired by Y Combinator. It allows founders to present their startups with detailed information, pitch decks, and metrics. Investors can filter, search, and connect with startups based on various criteria including industry, funding stage, and location.",
    technologies: ["Next.js", "React", "Sanity CMS", "TailwindCSS", "TypeScript", "Server Actions"],
    bgColor: "#ffe7eb"
  }
];

const openProjectModal = (projectId) => {
  const project = projectsData.find(p => p.id === projectId);
  setSelectedProject(project);
  document.body.style.overflow = 'hidden'; // Prevent background scroll
};

const closeProjectModal = () => {
  setSelectedProject(null);
  document.body.style.overflow = 'auto'; // Restore scroll
};

const toggleProject = (projectId) => {
  setExpandedProject(expandedProject === projectId ? null : projectId);
};



useGSAP(()=>{
const projects =[project1Ref.current,project2Ref.current,project3Ref.current];



    projects.forEach((card,index)=>{
    gsap.fromTo(
        card,
        {
            y:50,opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:1,
            delay:0.6 *(index + 1),
            scrollTrigger:{
                trigger:card,
                start:'top bottom-=100',
            }
        }
    )
})
gsap.fromTo(
    sectionRef.current,
    {opacity:0},
    {opacity:1,duration:1.5}
)
},[]);
  return (
    <>
    <section id="work" className="section-padding">
       <TitleHeader 
          title="Featured Projects Showcase" 
          sub="🚀 Explore My Best Work"
       />
       <div ref={sectionRef} className="app-showcase">
        <div className='w-full'>
             
            <div className='showcaselayout'>
                {/* left*/}
                <div 
                    className='first-project-wrapper cursor-pointer transition-all duration-300 hover:scale-[1.02]' 
                    ref={project1Ref}
                    onClick={() => openProjectModal(1)}
                >
                    <div className='image-wrapper'>
                        <img src={projectsData[0].image} alt={projectsData[0].title} />
                    </div>
                    <div className='text-content'>
                        <h2>{projectsData[0].title}</h2>
                        <p>{projectsData[0].shortDesc}</p>
                        <p className='text-sm text-white-50 italic mt-4'>Click to see full details</p>
                    </div>
                </div>

                {/*right */}
                  <div className='project-list-wrapper overflow-hidden' ref={project2Ref}>
                    <div 
                        className='project cursor-pointer transition-all duration-300 hover:scale-[1.02]' 
                        onClick={() => openProjectModal(2)}
                    >
                        <div className={`image-wrapper bg-[${projectsData[1].bgColor}]`}>
                            <img src={projectsData[1].image} alt={projectsData[1].title} />
                        </div>
                        <h2>{projectsData[1].title}</h2>
                        <p className='text-white-50 mt-2'>{projectsData[1].shortDesc}</p>
                        <p className='text-xs text-white-50 italic mt-2'>Click for details</p>
                    </div>
                    
                    <div 
                        className='project cursor-pointer transition-all duration-300 hover:scale-[1.02]' 
                        ref={project3Ref}
                        onClick={() => openProjectModal(3)}
                    >
                        <div className={`image-wrapper bg-[${projectsData[2].bgColor}]`}>
                            <img src={projectsData[2].image} alt={projectsData[2].title} />
                        </div>
                        <h2>{projectsData[2].title}</h2>
                        <p className='text-white-50 mt-2'>{projectsData[2].shortDesc}</p>
                        <p className='text-xs text-white-50 italic mt-2'>Click for details</p>
                    </div>
                  </div>

            </div>
        </div>
      
       </div>
    </section>

    {/* Project Detail Modal */}
    {selectedProject && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
        onClick={closeProjectModal}
      >
        <div 
          className="bg-black-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-black-200 border-b border-white/10 p-6 flex justify-between items-start z-10">
            <h2 className="text-2xl md:text-3xl font-bold pr-8">{selectedProject.title}</h2>
            <button 
              onClick={closeProjectModal}
              className="text-white hover:text-red-400 transition-colors text-3xl leading-none"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Short Description */}
            <div>
              <p className="text-lg text-white-50">{selectedProject.shortDesc}</p>
            </div>

            {/* Purpose */}
            <div className="bg-black-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                🎯 <span>Purpose</span>
              </h3>
              <p className="text-white-50 leading-relaxed">{selectedProject.purpose}</p>
            </div>

            {/* Description */}
            <div className="bg-black-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                📝 <span>Description</span>
              </h3>
              <p className="text-white-50 leading-relaxed">{selectedProject.description}</p>
            </div>

            {/* Technologies */}
            <div className="bg-black-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🛠️ <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 bg-black-200 border-t border-white/10 p-6">
            <button
              onClick={closeProjectModal}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default ShowcaseSection
