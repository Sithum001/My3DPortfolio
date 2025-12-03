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
const project4Ref=useRef(null);
const project5Ref=useRef(null);
const project6Ref=useRef(null);
const project7Ref=useRef(null);
const [selectedProject, setSelectedProject] = useState(null);

const projects =[project1Ref.current,project2Ref.current,project3Ref.current,project4Ref.current,project5Ref.current,project6Ref.current,project7Ref.current];

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
  },
  {
    id: 4,
    title: "Resource Hub",
    shortDesc: "A comprehensive web application designed for efficient management of organizational resources",
    image: "/images/project1.png",
    purpose: "To centralize and streamline resource management for organizations, improving efficiency and collaboration.",
    description: "Resource Hub is a comprehensive web application designed for efficient management of organizational resources. It features real-time dashboards, resource allocation, team collaboration tools, and advanced analytics to help organizations optimize their resource utilization and project management.",
    technologies: ["HTML", "JWT", "MUI", "Tailwind CSS", "JavaScript", "React JS", "MySQL", "Ballerina"],
    bgColor: "#e8f4ff"
  },
  {
    id: 5,
    title: "Finly Money Manager",
    shortDesc: "A comprehensive personal finance management application",
    image: "/images/project2.png",
    purpose: "To help users track expenses, manage budgets, and achieve financial goals through smart money management.",
    description: "Finly Money Manager is a comprehensive personal finance management application that helps users track expenses, set budgets, and visualize spending patterns. Features include transaction categorization, budget alerts, financial reports, and goal tracking to promote better financial habits.",
    technologies: ["React JS", "Spring Boot", "MySQL", "Render", "Netlify"],
    bgColor: "#e8ffe8"
  },
  {
    id: 6,
    title: "LUIGI - Pet Robot Car",
    shortDesc: "A smart, AI-powered robotic pet designed for fun, companionship, and emotional interaction",
    image: "/images/project3.png",
    purpose: "To create an interactive robotic companion that provides entertainment and emotional support through AI-powered interactions.",
    description: "LUIGI is a smart, AI-powered robotic pet designed for fun, companionship, and emotional interaction. It can recognize voice commands, navigate autonomously, interact with its environment, and respond to user emotions. Perfect for tech enthusiasts and anyone looking for a unique robotic companion.",
    technologies: ["Python", "Tkinter", "Raspberry Pi", "ESP32"],
    bgColor: "#fff0e8"
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    shortDesc: "A modern online shopping platform with seamless user experience",
    image: "/images/project1.png",
    purpose: "To provide a complete e-commerce solution with product management, secure payments, and order tracking.",
    description: "A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, secure payment processing, order management, user authentication, and admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    bgColor: "#ffe8f0"
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
const projects =[project1Ref.current,project2Ref.current,project3Ref.current,project4Ref.current,project5Ref.current,project6Ref.current,project7Ref.current];



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
    <section id="project" className="section-padding">
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
                        <div className='flex flex-wrap gap-2 mt-4'>
                            {projectsData[0].technologies.slice(0, 4).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[0].technologies.length > 4 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[0].technologies.length - 4} more</span>
                            )}
                        </div>
                        <p className='text-sm text-white-50 italic mt-4'>Click to see full details</p>
                    </div>
                </div>

                {/*right */}
                  <div className='project-list-wrapper overflow-hidden' ref={project2Ref}>
                    <div 
                        className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2' 
                        onClick={() => openProjectModal(2)}
                    >
                        <div className={`image-wrapper bg-[${projectsData[1].bgColor}]`}>
                            <img src={projectsData[1].image} alt={projectsData[1].title} />
                        </div>
                        <h2>{projectsData[1].title}</h2>
                        <p className='text-white-50 mt-2'>{projectsData[1].shortDesc}</p>
                        <div className='flex flex-wrap gap-2 mt-3'>
                            {projectsData[1].technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[1].technologies.length > 3 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[1].technologies.length - 3}</span>
                            )}
                        </div>
                        <p className='text-xs text-white-50 italic mt-2'>Click for details</p>
                    </div>
                    
                    <div 
                        className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2' 
                        ref={project3Ref}
                        onClick={() => openProjectModal(3)}
                    >
                        <div className={`image-wrapper bg-[${projectsData[2].bgColor}]`}>
                            <img src={projectsData[2].image} alt={projectsData[2].title} />
                        </div>
                        <h2>{projectsData[2].title}</h2>
                        <p className='text-white-50 mt-2'>{projectsData[2].shortDesc}</p>
                        <div className='flex flex-wrap gap-2 mt-3'>
                            {projectsData[2].technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[2].technologies.length > 3 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[2].technologies.length - 3}</span>
                            )}
                        </div>
                        <p className='text-xs text-white-50 italic mt-2'>Click for details</p>
                    </div>
                  </div>

            </div>

            {/* Additional Projects Grid */}
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                {/* Project 4 */}
                <div 
                    className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
                    ref={project4Ref}
                    onClick={() => openProjectModal(4)}
                >
                    <div className='image-wrapper bg-[#e8f4ff]'>
                        <img src={projectsData[3].image} alt={projectsData[3].title} className='w-full h-48 object-cover' />
                    </div>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold mb-2'>{projectsData[3].title}</h2>
                        <p className='text-white-50 text-sm mb-3'>{projectsData[3].shortDesc}</p>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {projectsData[3].technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[3].technologies.length > 3 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[3].technologies.length - 3}</span>
                            )}
                        </div>
                        <p className='text-xs text-white-50 italic'>Click for details</p>
                    </div>
                </div>

                {/* Project 5 */}
                <div 
                    className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
                    ref={project5Ref}
                    onClick={() => openProjectModal(5)}
                >
                    <div className='image-wrapper bg-[#e8ffe8]'>
                        <img src={projectsData[4].image} alt={projectsData[4].title} className='w-full h-48 object-cover' />
                    </div>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold mb-2'>{projectsData[4].title}</h2>
                        <p className='text-white-50 text-sm mb-3'>{projectsData[4].shortDesc}</p>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {projectsData[4].technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[4].technologies.length > 3 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[4].technologies.length - 3}</span>
                            )}
                        </div>
                        <p className='text-xs text-white-50 italic'>Click for details</p>
                    </div>
                </div>

                {/* Project 6 */}
                <div 
                    className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
                    ref={project6Ref}
                    onClick={() => openProjectModal(6)}
                >
                    <div className='image-wrapper bg-[#fff0e8]'>
                        <img src={projectsData[5].image} alt={projectsData[5].title} className='w-full h-48 object-cover' />
                    </div>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold mb-2'>{projectsData[5].title}</h2>
                        <p className='text-white-50 text-sm mb-3'>{projectsData[5].shortDesc}</p>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {projectsData[5].technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[5].technologies.length > 3 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[5].technologies.length - 3}</span>
                            )}
                        </div>
                        <p className='text-xs text-white-50 italic'>Click for details</p>
                    </div>
                </div>

                {/* Project 7 */}
                <div 
                    className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
                    ref={project7Ref}
                    onClick={() => openProjectModal(7)}
                >
                    <div className='image-wrapper bg-[#ffe8f0]'>
                        <img src={projectsData[6].image} alt={projectsData[6].title} className='w-full h-48 object-cover' />
                    </div>
                    <div className='p-6'>
                        <h2 className='text-xl font-bold mb-2'>{projectsData[6].title}</h2>
                        <p className='text-white-50 text-sm mb-3'>{projectsData[6].shortDesc}</p>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {projectsData[6].technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                    {tech}
                                </span>
                            ))}
                            {projectsData[6].technologies.length > 3 && (
                                <span className='text-blue-300 text-xs py-1'>+{projectsData[6].technologies.length - 3}</span>
                            )}
                        </div>
                        <p className='text-xs text-white-50 italic'>Click for details</p>
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
