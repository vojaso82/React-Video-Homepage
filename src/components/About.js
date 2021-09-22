import React, { useState, useEffect } from 'react'
import './About.css'
import MiamiCity from './MiamiCity.png'
import MiamiCity2 from './MiamiCity2.png'

function About() {
const [miamiabout, setMiamiabout] = useState(false)
const [somiami, setSomiami] = useState(false)
const [logo, setLogo] = useState(false)
const [scroll, setScroll] = useState(window.scrollY)


//SCROLLS DOWN H1 DIV - MIAMI ABOUT
const textTransition = () => {
    if(window.scrollY > 100){
        setMiamiabout(true);
    }else{
        setMiamiabout(false);
    }
     }

//SCROLLS on Y MIAMI PICTURES
const handleScroll = () => {
if(window.scrollY < 980){
    setScroll(window.scrollY)
}else{
    setScroll(980)
}
}



useEffect (() => {
    window.addEventListener('scroll', handleScroll)
    return() => {
    window.removeEventListener('scroll', handleScroll)
    }
},[])



window.addEventListener('scroll', textTransition)

//console.log(window.scrollY)

    return (
        <div id='about' className='about-div'>
        <div className={miamiabout ? 'miami-h1' : 'miami-2'}>
            <h1>MIAMI ABOUT</h1>
            <p style={{fontSize:'18px', textAlign:'center'}}>The city of Miami is well known for beaches such as Miami Beach and South Beach.<br/>
             As a result, the metropolitan area of Miami, are great places for water sports or simply building sandcastles.</p>
             <div className='buttons-about'>
                 <button>Miami history</button>
                 <button>Get in touch</button>
             </div>
        </div>
        <div className='slide-items'>
            <div className='miamipicture1' style={{transform:`translateX(${(scroll-1000)}px)`, transition:'all 0.1s linear'}}>
                {/* {console.log(scroll)} */}
                <img src={MiamiCity2} width={'340px'}></img>
            </div>
            <div className='miamipicture2' style={{transform:`translateX(${(1000-scroll)}px)`, transition:'all 0.1s linear'}}>
              <img src={MiamiCity} width={'350px'}></img>
            </div>
        </div>
        </div>
    )
}

export default About