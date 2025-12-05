import React, { useRef, useState } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';
import ParticleBackground from '../components/ParticleBackground';
import { FaGithub } from 'react-icons/fa';

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
const project8Ref=useRef(null);
const [selectedProject, setSelectedProject] = useState(null);

const projectsData = [
  {
    id: 1,
    title: "Mindfull Connect - Online Counseling Platform",
    shortDesc: "Mindfull Connect is a modern online counseling platform that connects users with professional counselors through a secure, user-friendly interface featuring OTP login, scheduling, and responsive design.",
    image: "/images/project1.png",
    purpose: "The purpose of Mindfull Connect is to make mental-health support more accessible by providing a convenient digital platform for counseling. It aims to help users seek guidance comfortably and securely while enabling counselors to manage sessions efficiently. The platform focuses on reducing barriers to mental-health services through technology.",
    description: "Mindfull Connect is an online counseling and mental-wellness platform designed to bridge the gap between users and qualified counselors. The system provides a secure and user-friendly environment where individuals can create accounts, schedule sessions, and communicate with mental-health professionals. The platform includes OTP-based user authentication, a modern interface, and a responsive design to ensure accessibility and reliability. Built using Next.js and MongoDB, Mindfull Connect emphasizes performance, security, and an intuitive user experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    bgColor: "#ffefdb",
    githubUrl: "https://mindfull-connect.vercel.app/"
  },
  {
    id: 2,
    title: "Goods Distribution System for Garment Factories",
    shortDesc: "An automated ESP32-based goods transportation system for garment factories that improves workflow efficiency through autonomous delivery, real-time notifications, and worker progress tracking.",
    image: "/images/project2.png",
    purpose: "The main purpose of this system is to streamline garment factory operations by automating the movement of goods, reducing worker strain, and improving overall workflow transparency. It aims to create a more efficient, safe, and humane manufacturing environment by combining automation with real-time monitoring and data-driven insights.",
    description: "The Goods Distribution System for Garment Factories is an automated microcontroller-based solution designed to improve the efficiency and workflow of clothing transportation within production lines. The system autonomously transfers goods between workstations, ensuring timely delivery and reducing manual labor. It features real-time supervisor notifications, progress tracking for each worker, and intelligent navigation logic for precise movement. By combining ESP32-based control, custom PCB design, and IoT connectivity, the system enhances productivity while supporting a more organized and employee-friendly manufacturing environment.",
    technologies: ["ESP32", "Custom PCBs (EasyEDA)", "3D Printed Components","C++", "Arduino IDE","Firebase Realtime Database"],
    bgColor: "#ffefdb",
    githubUrl: "https://github.com/yourusername/goods-distribution-system"
  },
  {
    id: 3,
    title: "Enterprice resouce palaning system",
    shortDesc: "A Next.js-based ERP platform for managing customers, orders, suppliers, inventory, and employee salaries with built-in report generation for better decision-making.",
    image: "/images/project3.png",
    purpose: "TThe purpose of this ERP system is to centralize and streamline daily business operations, reduce manual workload, and improve accuracy in organizational processes. By integrating key business functions into a single platform, the system helps companies manage resources efficiently and make informed operational decisions.",
    description: "The ERP System is a comprehensive management platform designed to simplify core business operations such as customer management, order processing, supplier handling, inventory tracking, and employee salary management. The platform also includes automated report generation to support data-driven decision-making. As the Front-End Developer, I built an intuitive and responsive interface using Next.js, ensuring smooth user interactions and efficient workflow navigation across all modules.",
    technologies: ["Next.js", "React", "Sanity CMS", "TailwindCSS", "TypeScript", "Server Actions"],
    bgColor: "#ffe7eb",
    githubUrl: "https://github.com/Sithum001/silekta-frontend.git"
  },
  {
    id: 4,
    title: "GoMate - Multi-Modal Public Transport Application",
    shortDesc: "A multi-modal public transport mobile app that allows users to search routes, view real-time schedules, and plan trips across bus, train, metro, tram, and ferry services.",
    image: "/images/project4.png",
    purpose: "The purpose of GoMate is to simplify public transport usage by integrating multiple travel modes into one unified platform. It aims to help commuters and travelers easily discover optimal routes, stay updated with real-time transportation data, and navigate efficiently without switching between multiple apps or websites.",
    description: "GoMate is a feature-rich mobile travel companion built to streamline public transportation navigation across the UK. The app enables users to explore routes across multiple transport modes, check live schedules, view destination details, and save their favorite places and trips for quick access. With an intuitive interface and seamless dark mode support, GoMate enhances the user’s travel experience while ensuring reliability, accuracy, and convenience.",
    technologies: [" React Native", "Expo CLI", "Transport API UK"],
    bgColor: "#e8f4ff",
    githubUrl: "https://github.com/Sithum001/GoMate.git"
  },
  {
    id: 5,
    title: " Point of Sales (POS) System",
    shortDesc: "A full-stack POS system for retail businesses that manages sales, billing, inventory, and reports to improve transaction speed and operational efficiency.",
    image: "/images/project5.png",
    purpose: "The purpose of this POS system is to provide retail businesses with a reliable and user-friendly tool for managing sales, inventory, and reports. It aims to enhance transaction speed, reduce manual workload, and offer accurate, real-time insights into product movement and business performance.",
    description: "The Point of Sales (POS) System is a complete retail management solution designed to simplify sales operations and inventory tracking. The system manages product cataloguing, billing, stock updates, and sales reporting, allowing businesses to handle daily transactions efficiently. As the Full Stack Developer, I designed and implemented both the user interface and backend logic to ensure smooth, accurate, and fast retail operations. The platform helps eliminate manual errors, improves record-keeping, and enhances overall business workflow.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap","PHP","MySQL"],
    bgColor: "#e8ffe8",
    githubUrl: "https://github.com/Sithum001/POS-System-in-PHP.git"
  },
  {
    id: 6,
    title: "Portfolio",
    shortDesc: "A personal portfolio showcasing my skills, projects, and experience as a Full-Stack Developer and UI/UX Engineer.",
    image: "/images/project6.png",
    purpose: "The purpose of the portfolio is to present my technical abilities, showcase real-world projects, and provide potential clients, employers, or collaborators with an organized overview of my professional capabilities. It acts as a central hub to demonstrate my coding style, creativity, and problem-solving approach while building trust and credibility.",
    description: "This portfolio serves as a professional digital identity, highlighting my expertise in full-stack development, UI/UX design, and modern web technologies. It features an interactive and responsive interface, detailed project showcases, skill categories, and contact channels. The design focuses on clarity, smooth animations, and a modern aesthetic to provide visitors with an engaging browsing experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "GSAP","Framer Motion","Threejs"],
    bgColor: "#fff0e8",
    githubUrl: "https://github.com/Sithum001/My3DPortfolio.git"
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    shortDesc: "A modern online shopping platform with seamless user experience",
    image: "/images/project7.png",
    purpose: "To provide a complete e-commerce solution with product management, secure payments, and order tracking.",
    description: "A full-featured e-commerce platform built with modern web technologies. Features include product catalog, shopping cart, secure payment processing, order management, user authentication, and admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    bgColor: "#ffe8f0",
    githubUrl: "https://github.com/Sithum001/cara-Ecommerce.git"
  },
  {
    id: 8,
    title: " eBookNest - AI-Powered eBook Creation Platform (Ongoing)",
    shortDesc: "eBookNest is an AI-powered platform that helps users plan, write, and export complete eBooks using Google Gemini AI, featuring secure authentication and a modern writing interface.",
    image: "/images/project8.png",
    purpose: "The purpose of eBookNest is to empower authors, students, and content creators to efficiently produce high-quality eBooks with AI support. It aims to reduce manual effort in writing and formatting, while providing a secure, intuitive, and feature-rich platform for all stages of eBook creation.",
    description: "eBookNest is a platform that allows users to plan, write, and export complete eBooks with the help of Google Gemini AI. It features secure JWT authentication, AI-powered outline and chapter generation, a modern Markdown editor with live preview, drag-and-drop chapter management, customizable book details, and export options in PDF and DOCX formats",
    technologies: ["React JS", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Gemini AI", "JWT", "Git"],
    bgColor: "#e8f0ff",
    githubUrl: "https://github.com/yourusername/ebooknest"
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

useGSAP(()=>{
const projects =[project1Ref.current,project2Ref.current,project3Ref.current,project4Ref.current,project5Ref.current,project6Ref.current,project7Ref.current,project8Ref.current];

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
    <section id="project" className="relative section-padding">
       <ParticleBackground className="z-0" />
       <div className="relative z-10">
       <TitleHeader 
          title="Featured Projects Showcase" 
          sub="🚀 Explore My Best Work"
       />
       <div ref={sectionRef} className="app-showcase">
        <div className='w-full'>
             
            <div className='showcaselayout'>
                {/* 
                   PROJECT 1 
                   Ref is on wrapper; Hover/Click is on inner div.
                */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div 
                        className='w-full h-full cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2' 
                        onClick={() => openProjectModal(1)}
                    >
                        <div className='image-wrapper'>
                            <img src={projectsData[0].image} alt={projectsData[0].title} />
                        </div>
                        <div className='text-content'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>{projectsData[0].title}</h2>
                            <p className='text-white-50 mt-2'>{projectsData[0].shortDesc}</p>
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
                </div>

                {/* 
                   RIGHT COLUMN (Projects 2 & 3) 
                   Wrapper has project2Ref, so Project 2 (being first child) works by default.
                   Project 3 needs a wrapper because it has its own Ref.
                */}
                  <div className='project-list-wrapper overflow-visible' ref={project2Ref}>
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
                    
                    {/* Project 3 - Wrapped */}
                    <div ref={project3Ref}>
                        <div 
                            className='project cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2' 
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

            </div>

            {/* Additional Projects Grid */}
            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                {/* Project 4 - Wrapped */}
                <div ref={project4Ref}>
                    <div 
                        className='project h-full cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
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
                </div>

                {/* Project 5 - Wrapped */}
                <div ref={project5Ref}>
                    <div 
                        className='project h-full cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
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
                </div>

                {/* Project 6 - Wrapped */}
                <div ref={project6Ref}>
                    <div 
                        className='project h-full cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
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
                </div>

                {/* Project 7 - Wrapped */}
                <div ref={project7Ref}>
                    <div 
                        className='project h-full cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden'
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

            {/* PROJECT 8 - New Row */}
            <div className='w-full mt-10'>
                <div ref={project8Ref}>
                    <div 
                        className='project h-full cursor-pointer transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-2 bg-black-200 rounded-2xl overflow-hidden max-w-md mx-auto'
                        onClick={() => openProjectModal(8)}
                    >
                        <div className='image-wrapper bg-[#e8f0ff]'>
                            <img src={projectsData[7].image} alt={projectsData[7].title} className='w-full h-48 object-cover' />
                        </div>
                        <div className='p-6'>
                            <h2 className='text-xl font-bold mb-2'>{projectsData[7].title}</h2>
                            <p className='text-white-50 text-sm mb-3'>{projectsData[7].shortDesc}</p>
                            <div className='flex flex-wrap gap-2 mb-3'>
                                {projectsData[7].technologies.slice(0, 3).map((tech) => (
                                    <span key={tech} className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs'>
                                        {tech}
                                    </span>
                                ))}
                                {projectsData[7].technologies.length > 3 && (
                                    <span className='text-blue-300 text-xs py-1'>+{projectsData[7].technologies.length - 3}</span>
                                )}
                            </div>
                            <p className='text-xs text-white-50 italic'>Click for details</p>
                        </div>
                    </div>
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
            <div className="flex gap-4">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <FaGithub size={20} />
                  <span>View Code</span>
                </a>
              )}
              <button
                onClick={closeProjectModal}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default ShowcaseSection