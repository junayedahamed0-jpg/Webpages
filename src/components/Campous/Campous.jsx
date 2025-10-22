import React from 'react'
import './Campous.css'
import gallery1 from "../../assets/download6.jpg"
import gallery2 from "../../assets/download7.jpg"
import gallery3 from "../../assets/download8.jpg"
import gallery4 from "../../assets/download9.jpg"
import gallery5 from "../../assets/download10.jpg"
import  arrow from "../../assets/right-arrow.png"

const Campous = () => {
  return (
    <div className='campous'>
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
     </div>
       <button className='btn hover'>Get Started <img src={arrow} alt="" className='arrow' /></button>
    </div>
  )
}

export default Campous
