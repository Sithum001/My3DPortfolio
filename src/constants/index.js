const navLinks = [
   {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#project",
  },
  {
    name: "Education",
    link: "#education",
  },
 
  {
    name: "Experience",
    link: "#experience",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Sithum001",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sithum-gimhana",
    icon: "linkedin",
  },
];

const footerSocialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Sithum001",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sithum-gimhana",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/sithum.gimhana",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sithum_gimhana",
    icon: "instagram",
  },
];

const words = [
  { text: "Full stack developer", imgPath: "/images/ideas.svg" },
  { text: "Tech enthusiast", imgPath: "/images/concepts.svg" },
  { text: "UI/UX designer", imgPath: "/images/designs.svg" },
  { text: "Passionate Coder", imgPath: "/images/code.svg" },
  { text: "Full stack developer", imgPath: "/images/ideas.svg" },
  { text: "Tech enthusiast", imgPath: "/images/concepts.svg" },
  { text: "UI/UX designer", imgPath: "/images/designs.svg" },
  { text: "Passionate Coder", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 25, suffix: "+", label: "Technologies Mastered" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 150, suffix: "+", label: "Contributions" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/uom.png",
    title: "Bsc.(Hons) in Information Technology",
    subtitle:"University of Moratuwa, Sri Lanka",
    date: "2023 - Present",
    responsibilities: [
      "I am currently pursuing a BSc. (Hons) in Information Technology at the University of Moratuwa, where I am developing a strong foundation in software engineering, web development, and problem-solving. My academic journey has helped me enhance both my technical skills and my ability to work on real-world projects.In addition to coursework, I actively participate in collaborative assignments, coding practices, and tech-related initiatives, which have strengthened my teamwork, creativity, and adaptability in fast-paced environments.",
      
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/dmc.png",
    title: "A/L in Mathematics, Physics, and Chemistry",
    subtitle:"De Mazenod College Kandana ,Sri Lanka",
    date: "2022",
    responsibilities: [
      "Grade: A B B",
      "I completed my Advanced Level (A/L) education at De Mazenod College, Kandana, where I followed the Mathematics stream. My studies provided me with a strong foundation in analytical thinking, logical reasoning, and problem-solving. I performed well academically, reflecting my dedication and consistent effort throughout my school years. My time at De Mazenod College played a key role in strengthening my interest in technology and preparing me for further studies in the field of Information Technology.",
      
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/dmc.png",
    title: "Ordinary Level (O/L)",
    date: "2015 - December 2016",
    responsibilities: [
      "Grade: 9A's ",
      "I completed my GCE Ordinary Level (O/L) education at De Mazenod College, Kandana, where I gained a strong foundation across core subjects including Mathematics, Science, and Languages. During this period, I developed discipline, analytical thinking, and a commitment to academic excellence. My O/L education prepared me well for further studies at the Advanced Level and laid the groundwork for my interest in technology and problem-solving.",
      
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: " University Catholic Students' Movement Colombo Region",
    mentions: "",
    review:
      "I serve as the Media Director for the University Catholic Students' Movement, Colombo Region, where I manage media content, social media communications, and visual storytelling to promote events and initiatives. This role has strengthened my skills in digital media, design, and effective communication.",
    imgPath: "/images/rcsm.jpg",
  },
  {
    name: "IoT and Embedded Systems Research Labs - Faculty of IT University of Moratuwa",
    mentions: "",
    review:
      "I am an active member of the Software and Electronics teams at the IoT and Embedded Systems Research Labs, Faculty of IT, University of Moratuwa. In this role, I contribute to both web and mobile application development as well as IoT projects, collaborating with team members to design and implement innovative solutions. This experience has strengthened my skills in full-stack development, embedded systems, and cross-disciplinary teamwork, while allowing me to apply theoretical knowledge to real-world technology projects.",
    imgPath: "/images/ieslab.jpg",
  },
  {
    name: "Catholic Students' Society - University of Moratuwa ",
    mentions: "",
    review:
      "I am a member of the Catholic Students' Society at the University of Moratuwa, actively participating in charity initiatives and public events such as Christmas carols. Through this role, I contribute to community service while developing teamwork, event management, and organizational skills.",
    imgPath: "/images/moracsm.png",
  }

];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  socialLinks,
  footerSocialLinks,
};
