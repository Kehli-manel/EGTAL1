import React from 'react'
import about from '../assets/aboutimg.jpg'
import './about_style.css'

const About = () => {
    function AboutAnimation() {
          const aboutInfo = document.getElementsByClassName('about');
        for (var i = 0; i < aboutInfo.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = aboutInfo[i].getBoundingClientRect().top;
            var elementVisible = 150;
        
            if (elementTop < windowHeight - elementVisible) {
                aboutInfo[i].classList.add("active");
            } else {
                aboutInfo[i].classList.remove("active");
            }
          }
    }
    window.addEventListener("scroll", AboutAnimation);
    return (
        <>
            <div className='about_container' id='about'>
                <div className='about_img '>
                    <img src={about} alt="image" />
                    <div className='about_info'>

                        <h2>SINCE <br /> 1999</h2>
                        <div>
                            <h1>21</h1>
                            <h3>Years Experince</h3>
                        </div>
                    </div>
                </div>
                <div className='about'>
                    <div>
                        <h5>---- About us</h5>
                        <h2>The best quality <br />
                            Menuiserie Aluminium et Habillage façade</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iure quisquam minus, quaerat rerum repellendus
                            omnis enim. Rerum libero non nihil.</p>

                    </div>
                    <div className='about_num'>
                        <div><h1>200</h1><p>PROJECTS COMPLETED</p></div>
                        <div><h1>320</h1><p>SATISFIED CLIENTS</p></div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default About