import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a herf ="#" className='footer__logo'>Harshit Developer</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a herf="https://facebook.com"><FaFacebookF /></a>
        <a herf="https://instagram.com"><FiInstagram /></a>
        <a herf="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Harshit developer.All rights reserverd</small>
      </div>
    </footer>
  )
}

export default Footer
