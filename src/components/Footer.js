import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
import './FooterStyles.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className='location'>
                    <FaSearchLocation  size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>123 Acne St.</p>
                        <h4>Houston, Tx</h4>
                   </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#ffffff", marginRight: '2rem'}} /> 1-800-123-1234</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color: "#ffffff", marginRight: '2rem'}} /> trvlgalaxy@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates adipisci alias dicta magni, porro perspiciatis ducimus natus optio maxime. Repudiandae, </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: "#ffffff", marginRight: '1rem'}} />
                    <FaTwitter size={30} style={{color: "#ffffff", marginRight: '1rem'}} />
                    <FaLinkedin size={30} style={{color: "#ffffff", marginRight: '1rem'}} />
                </div>
            </div>
            
        </div>
        <p className='copyright'>created with &hearts; by Sahil</p>
    </div>
  )
}

export default Footer