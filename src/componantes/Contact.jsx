import React from 'react'
import './contact_style.css'
import contact from '../assets/contactimg.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";

const Contact = () => {
  return (
    <div className='contact_container' id='contact'>
      <div className='contact'>
        <img src={contact} alt="" />
        <div className='contact_info'>
          <h1>Contact Us</h1>
          <div>
            <FaPhoneAlt className='icons' /> <h3>Call Us</h3><p>+212522712228</p>
            <GiPositionMarker className='icons' /> <h3>Officeal Address</h3> <p>Diar Saada 620 N°5 Sidi Moumen - Casablanca</p>


          </div>
        </div>
      </div>
      <div className="mapouter"><div className="gmap_canvas">
        <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0"
          marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=egtal
          &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div></div>
    </div>
  )
}

export default Contact