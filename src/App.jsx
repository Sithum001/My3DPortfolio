import React from 'react'
import Hero from './sections/Hero'
import './App.css'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    </>
  )
}

export default App
