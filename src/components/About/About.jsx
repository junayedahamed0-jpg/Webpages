import React from 'react'
import './About.css'
import aboutImg from "../../assets/download4.jpg"
import aboutImg2 from "../../assets/download5.jpg"

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutImg} alt="" className='about-icon'/>
        <img src={aboutImg2} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3> ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <button className='btn'>Get Started</button>
      </div>
    </div>
  )
}

export default About
