import React from 'react'
import './Program.css'
import image1 from "../../assets/download (1).jpg"
import image2 from "../../assets/download (2).jpg"
import image3 from "../../assets/download (3).jpg"


const Program = () => {
  return (
    <div>
      <div className="programs">
        <div className="program">
          <img src={image1} alt="" />
        </div>
        <div className="program program2">
          <img src={image2} alt="" />
        </div>
        <div className="program">
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Program
