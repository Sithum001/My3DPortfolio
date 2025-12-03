import React from 'react'
import Hero from './sections/Hero'
import './App.css'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TechStack/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
