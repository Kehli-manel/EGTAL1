import React from 'react'
import './header_style.css'
import logo from '../assets/logo.png'
import home from '../assets/homeimg1.jpg'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";



const HomeImg = () => {

    return (
      <div className='s1'>
          <img src={home} alt="home"  className='home_img'/>
          <div className='home_info '>
            <h4>E G T A L</h4>
            <h1>Menuiserie Aluminium & Habillage façade </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Veritatis vitae ipsam, illo rem explicabo modi ipsa, 
                 obcaecati.</p>
                 <button><a href="">Check out our services</a></button>
          </div>
      </div>
    )
  }

const Header = () => {
    function showMenu(){
        let body= document.querySelector('.header');
        body.classList.toggle('show');
     }
  return (
    <>
    <div className='header' id='home'>
        <div className='logo'>
            <img src={logo} alt="logo" className='logo_img' />
        </div>
        <TiThMenu className='open' onClick={showMenu}/>
        <nav>
            <ul className='navbar'>
                <IoClose className='close' onClick={showMenu}/>
                <a href="home" className='navbar_links'><li>Home</li></a>
                <a href="#about" className='navbar_links'><li>About</li></a>
                <a href="#services" className='navbar_links'><li>Services</li></a>
                <a href="#portfolio" className='navbar_links'><li>Portfolio</li></a>
                <a href="#contact" className='navbar_links'><li>Contact</li></a>
            </ul>
        </nav>
    </div>
    <HomeImg/>
    </>
  )
}

export default Header