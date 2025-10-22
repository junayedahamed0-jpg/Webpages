import React, { useRef, useState } from 'react'
import './Testimonial.css'
import  arrow from "../../assets/next-icon.png"
import arrow2 from "../../assets/back-icon.png"
import user1 from "../../assets/junayed1.jpg"
import user2 from "../../assets/ashik2.jpg"
import user3 from "../../assets/arif3.JPG"
import user4 from "../../assets/sweet4.jpg"
import user5 from "../../assets/download13.jpg" 
import user6 from "../../assets/download12.jpg"

const Testimonial = () => {

  const [tx, setTx] = useState(0);
  const sliderRef = useRef();

  const slideForward = () => {
    setTx(prevTx => (prevTx > -50 ? prevTx - 25 : prevTx));
  };

  const slideBackward = () => {
    setTx(prevTx => (prevTx < 0 ? prevTx + 25 : prevTx));
  };

return (
    <div className='testimonial'>
      <img src={arrow} alt="Next testimonial" className='next-arrow' onClick={ slideForward} />
      <img src={arrow2} alt="Previous testimonial" className='back-arrow' onClick={ slideBackward} />
      <div className="slider">
<ul
  ref={sliderRef}
  style={{ transform: `translateX(${tx}%)`, transition: 'transform 0.5s' }}
>
  <li>
    <div className="slide">
      <div className="user-info">
        <img src={user1} alt="Mr Junayed" />
        <div>
          <h3>Mr Junayed</h3>
          <p> Edusity, BD </p>
        </div>
      </div>
      <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration.</p>
    </div>
  </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="Mr Ashik Hassan" />
                <div>
                  <h3>Mr Ashik Hassan</h3>
                  <p> Edusity, IND </p>
                </div>
              </div>
              <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="Mr Arif Billah" />
                <div>
                  <h3>Mr Arif Billah</h3>
                  <p> Edusity,IND</p>
                </div>
              </div>
              <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="Mr Sweet" />
                <div>
                  <h3> Mr Sweet </h3>
                  <p> Edusity, IND </p>
                </div>
              </div>
              <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Jhon Doe</h3>
                  <p> Edusity, USA</p>
                </div>
              </div>
              <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user5} alt="Jhon Doe" />
                <div>
                  <h3>Jhon Doe</h3>
                  <p> Edusity, USA</p>
                </div>
              </div>
              <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user6} alt="Jhon Doe" />
                <div>
                  <h3>Jhon Doe</h3>
                  <p> Edusity, USA</p>
                </div>
              </div>
              <p>For a personal bio: An avid reader and self-taught artist, I thrive on creativity and exploration. </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
