import React from 'react'
import { navLinks, socialLinks } from '../constants'
import { useEffect,useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    const[scrolled,setScrolled] =useState(false);
    const[mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
           const isScrolled  =window.scrollY >10;
           setScrolled(true);
        }
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

  return (
  <header className={`navbar ${scrolled ? 'scrolled'  : 'not-scrolled'}`}>
    <div className='inner'>
        <a className='logo' href="#hero">
            SithumGimhana
        </a>

        {/* Desktop Navigation */}
        <nav className='desktop'>
             <ul>
                {navLinks.map(({link, name})=>(
                    <li key={name} className='group'>
                         <a href={link}>
                            <span>{name}</span>
                            <span className='underline'/>
                         </a>
                    </li>
                ))}
             </ul>
        </nav>
        
        {/* Desktop Social Links and Contact Button */}
        <div className='hidden lg:flex items-center gap-4'>
            <div className='flex items-center gap-3'>
                {socialLinks.map(({ name, url, icon }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white hover:text-blue-400 transition-colors duration-300'
                        aria-label={name}
                    >
                        {icon === 'github' ? (
                            <FaGithub size={24} />
                        ) : (
                            <FaLinkedin size={24} />
                        )}
                    </a>
                ))}
            </div>
            
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[110] relative'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
        >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
    </div>

    {/* Mobile Menu */}
    <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black z-[100] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <nav className='flex flex-col items-center justify-center h-full gap-8 px-8'>
            <ul className='flex flex-col items-center gap-8 w-full'>
                {navLinks.map(({link, name})=>(
                    <li key={name} className='text-3xl font-semibold w-full text-center'>
                         <a 
                            href={link} 
                            className='text-white hover:text-blue-400 transition-colors duration-300 block py-3'
                            onClick={() => setMobileMenuOpen(false)}
                         >
                            {name}
                         </a>
                    </li>
                ))}
            </ul>
            
            <div className='flex items-center gap-8 mt-6'>
                {socialLinks.map(({ name, url, icon }) => (
                    <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-white hover:text-blue-400 transition-colors duration-300'
                        aria-label={name}
                    >
                        {icon === 'github' ? (
                            <FaGithub size={32} />
                        ) : (
                            <FaLinkedin size={32} />
                        )}
                    </a>
                ))}
            </div>
            
            <a 
                href="#contact" 
                className='contact-btn group mt-8'
                onClick={() => setMobileMenuOpen(false)}
            >
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </nav>
    </div>
  </header>
  )
}

export default Navbar
