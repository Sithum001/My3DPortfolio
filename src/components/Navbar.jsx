import React from 'react'
import { navLinks, socialLinks } from '../constants'
import { useEffect,useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    const[scrolled,setScrolled] =useState(false);

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
        
        <div className='flex items-center gap-4'>
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
    </div>
  </header>
  )
}

export default Navbar
