import React from 'react'
import './Hero.css'
import  arrow from "../../assets/right-arrow.png"
const Hero = () => {
  return (
    <div className='hero'>
     <div className='hero-text'>
      <h1>We ensure better education for a better world</h1>
      <p>Education is the most powerful weapon which you can use to change the world.</p>
      <button className='btn'>Get Started <img src={arrow} alt="" className='arrow' /></button>
     </div>

    </div>
  )
}

export default Hero
