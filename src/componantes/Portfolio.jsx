import React from 'react'
import './portfolio_style.css'
import img1 from '../assets/menuiserie al.jpg'
import img3 from '../assets/aboutimg.jpg'
import img2 from '../assets/projet3.jpg'
import img4 from '../assets/projet5.jpg'
import img5 from '../assets/projet6.jpg'
import img6 from '../assets/habillage fa.jpg'
import s4 from '../assets/s4.jpg'
//import img8 from '../assets/projet.jpg'

const menuiserie = [
    {
        id: 1,
        img: img1,
        title: 'Project 01'
    },
    {
        id: 2,
        img: img2,
        title: 'Project 02'
    },
    {
        id: 3,
        img: img3,
        title: 'Project 03'
    }
];
const hb = [
    {
        id: 1,
        img: img4,
        title: 'Project 04'
    },
    {
        id: 2,
        img: img5,
        title: 'Project 05'
    },
    {
        id: 3,
        img: img6,
        title: 'Project 06'
    }
];

const PortfolioCard = (props) => {
    function portfolioAnimation() {
        const portfolioImg = document.getElementsByClassName('portfolio_card');
        for (var i = 0; i < portfolioImg.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = portfolioImg[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                portfolioImg[i].classList.add("active");
            } else {
                portfolioImg[i].classList.remove("active");
            }
        }
        
    }
    window.addEventListener("scroll", portfolioAnimation);
    return (
        <div className='portfolio_card'>
            <img src={props.img} />
            <h3>{props.title}</h3>

        </div>
    )
}


const Portfolio = () => {

    function bgAnimation() {
        
        const bgImg = document.getElementsByClassName('bgimg');
        for (var i = 0; i < bgImg.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = bgImg[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                bgImg[i].classList.add("active");
            } else {
                bgImg[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", bgAnimation);
    return (
        <div className='s3' id='portfolio'>
            <h5>BEST WORKS</h5>
            <h1 className='h1'>Our Portfolio</h1>
            <div className='portfolio'>
                <div className='menuiserie'>
                    <h2>Menuiserie Aluminium</h2>
                    {
                        menuiserie.map(item => (
                            <PortfolioCard
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>
                <div className='myimg'>
                    <img src={s4}  className='bgimg'/>
                    <div>
                        <h1>Contact Us To Make Your Dream True</h1>
                        <button>Contact Us</button>
                    </div></div>
                <div className='habillage'>
                    <h2>Habillage Façade</h2>
                    {
                        hb.map(item => (
                            <PortfolioCard
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </div>


            </div>

        </div>
    )
}

export default Portfolio