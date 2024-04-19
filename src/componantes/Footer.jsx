import React from 'react'
import './footer_style.css'
import logo from '../assets/logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import m_img from '../assets/menuiserie al.jpg'
import h_img from '../assets/habillage fa.jpg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_containers'>
                <h1>Contact Us</h1>
                <div>
                    <div className='cntc_info'>
                        <FaPhoneAlt className='icons' />
                        <h3>Call Us</h3>
                    </div>
                    <p className='p'> +212522712228</p>
                </div>
                <div>
                    <div className='cntc_info'> <GiPositionMarker className='icons' />
                        <h3>Officeal Address</h3>
                    </div>
                    <p className='p'>Diar Saada 620 N°5 Sidi Moumen - Casablanca</p>
                </div>
            </div>
            <div className='footer_containers'>
                <h1>Our Services</h1>
                <div className='service_info'>
                    <img src={m_img} />
                    <div>
                        <h3>Menuiserie Aluminium</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Rem blanditiis dolorem nulla eligendi incidunt.</p>
                    </div>
                </div>
                <div className='service_info'>
                    <img src={h_img}  />
                    <div>
                        <h3>Habillage Façade</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Rem blanditiis dolorem nulla eligendi incidunt.</p>
                    </div>
                </div>
            </div>
            <div className='footer_containers' >
                <img src={logo} className='logo' />
                <div className='footer_icons'>
                    <FaFacebookF className='f_icons f' />
                    <FaWhatsapp className='f_icons w' />
                </div>
                <p className='end'>© 2024, EGTAL. MADE WITH PASSION BY <span className='km'>KEHLI Manel</span>.</p>
            </div>
        </div>
    )
}

export default Footer