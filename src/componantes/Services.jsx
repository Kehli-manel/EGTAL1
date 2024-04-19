import React from 'react'
import ma from '../assets/menuiserie al.jpg'
import hf from '../assets/habillage fa.jpg'
import './services_style.css'

const Services = () => {
    return (
        <div className='s2' id='services'>
            <h5>BEST  FEATURES</h5>
            <h1 className='h1'>Our Services</h1>
            <div className='services'>
                <div className='card'>
                    <img src={ma} alt="image" />
                    <div className='card_info'>
                        <h1>01</h1>
                        <h2>Menuiserie Aluminium</h2>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.</p>
                            <button><a href="">Check out our projects →</a></button>
                    </div>
                </div>
                <div className='card'>
                    <img src={hf} alt="image" />
                    <div className='card_info'>
                        <h1>02</h1>
                        <h2>Habillage Façade</h2>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.</p>
                            <button><a href="">Check out our projects →</a></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services