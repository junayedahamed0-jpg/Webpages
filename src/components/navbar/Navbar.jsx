import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images.png'
import { Link } from 'react-scroll'

const Navbar = () => {

 const[sticky, setSticky] = useState(false);
 
//  useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setSticky(true);
//     } else {
//       setSticky(false);
//     }
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);
               // another method

               
useEffect(() => {
  const handleScroll = () => {
    setSticky(window.scrollY > 100);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

                   
                      // react scroll
         //  install here - npm install react-scroll

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='about' smooth={true} offset={-300} duration={500}>About Us</Link></li>
        <li><Link to='campous' smooth={true} offset={-80} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-80} duration={500}>Testimonials</Link></li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
