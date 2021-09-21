import React, { useState } from 'react'
import './About.css'
import MiamiCity from './MiamiCity.png'

function About() {
const [miamiabout, setMiamiabout] = useState(false)
const [somiami, setSomiami] = useState(false)
const [logo, setLogo] = useState(false)

const textTransition = () => {
    if(window.scrollY > 40){
        setSomiami(true);
    }else{
        setSomiami(false);
    }
     }

    window.addEventListener('scroll', textTransition)

    return (
        <div id='about' className='about-div'>
        <div className='miami-h1'>
            <h1>MIAMI ABOUT</h1>
        </div>
        <div className='slide-items'>
            <div className={somiami ? 'so-miami' : 'so-miami1'}>
              <p>IT'S SO <br/> MIAMI</p>
            </div>
            <div className='miami-logo'>
              <img src={MiamiCity} width={'350px'}></img>
            </div>
        </div>
        </div>
    )
}

export default About