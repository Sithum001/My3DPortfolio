import { useRef } from "react";
import TitleHeader from '../components/TitleHeader'

const frontendSkills = [
  { name: "HTML", logo: "/images/icons/html.png" },
  { name: "CSS", logo: "/images/icons/css.png" },
  { name: "JavaScript", logo: "/images/icons/javascript.png" },
  { name: "React", logo: "/images/icons/react.png" },
  { name: "React Native", logo: "/images/icons/react-native.png" },
  { name: "Next.js", logo: "/images/icons/nextjs.png" },
  { name: "TailwindCSS", logo: "/images/icons/tailwind.png" },
  { name: "Bootstrap", logo: "/images/icons/bootstrap.png" },
];
const backendSkills = [
  { name: "PHP", logo: "/images/icons/php.png" },
  { name: "Node.js", logo: "/images/icons/nodejs.png" },
  { name: "Laravel", logo: "/images/icons/laravel.png" },
  { name: "MySQL", logo: "/images/icons/mysql.png" },
  { name: "MongoDB", logo: "/images/icons/mongodb.png" },

];
const languages = [
  { name: "C", logo: "/images/icons/C.png" },
  { name: "Java", logo: "/images/icons/java.png" },
  { name: "JavaScript", logo: "/images/icons/javascript.png" },
  { name: "Python", logo: "/images/icons/python.png" },
];
const tools = [
  { name: "Git", logo: "/images/icons/git.png" },
  { name: "Figma", logo: "/images/icons/figma.png" },
  { name: "Canva", logo: "/images/icons/canva.png" },
  { name: "Jira", logo: "/images/icons/jira.png" },
  { name: "Postman", logo: "/images/icons/postman.png" },
];

export default function TechStack() {
  const renderSkillCard = (skill) => (
    <div
      key={skill.name}
      className="flex items-center justify-center space-x-1 sm:space-x-2 bg-black-300 border border-black-500 px-1.5 py-1 sm:px-2 sm:py-2 rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm hover:scale-105 transition-transform w-full min-w-0"
    >
      {/* Logo */}
      <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 relative shrink-0">
        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
      </div>

      {/* Skill Name */}
      <span className="text-white font-medium text-[9px] sm:text-xs md:text-sm truncate">
        {skill.name}
      </span>
    </div>
  );

  const BigCard = ({ title, skills }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const centerX = width / 2;
      const centerY = height / 2;

      const speed = 20;
      const rotateY = ((x - centerX) / centerX) * speed;
      const rotateX = -((y - centerY) / centerY) * speed;
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      cardRef.current.style.boxShadow = `0 0 20px rgba(59, 130, 246, 0.5)`;
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      cardRef.current.style.boxShadow = `none`;
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="big-card bg-black-200 border border-black-300 rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 flex flex-col items-center w-full sm:w-[48%] mb-5 h-auto sm:min-h-[400px]"
      >
        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-6 text-white tracking-wide text-center">{title}</h3>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 w-full flex-1 content-start">
          {skills.map(renderSkillCard)}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 bg-black text-white overflow-hidden px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-center mb-8">
        <TitleHeader
          title="Skills & Expertise"
          sub="Technologies and tools I use to design, develop, and deliver impactful digital experiences."
        />
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-4"></div>
      </div>

      <div className="flex flex-wrap gap-2 lg:gap-5 py-10 justify-between">
        <BigCard title="Frontend" skills={frontendSkills} />
        <BigCard title="Backend" skills={backendSkills} />
        <BigCard title="Languages" skills={languages} />
        <BigCard title="Tools" skills={tools} />
      </div>

    </section>
  );
}