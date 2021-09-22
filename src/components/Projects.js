import React, { useState, useEffect} from 'react'
import './Projects.css'
import advertise from './advertise.png'
import branding from './branding.png'
import events from './events.png'
import media from './media.png'
import production from './production.png'
import social from './social.png'

function Projects() {

const [scroll1, setScroll1] = useState(window.scrollY)
const [scroll2, setScroll2] = useState(window.scrollY)


//SCROLLS on Y MIAMI PICTURES
const handleScroll1 = () => {
    if(window.scrollY < 1300){
        setScroll1(window.scrollY)
    }else{
        setScroll1(980)
    }
    }
    
const handleScroll2 = () => {
        if(window.scrollY < 1550){
            setScroll2(window.scrollY)
        }else{
            setScroll2(980)
    }
    }
useEffect (() => {
     window.addEventListener('scroll', handleScroll1)
    return() => {
     window.removeEventListener('scroll', handleScroll1)
     }
 },[])

 useEffect (() => {
    window.addEventListener('scroll', handleScroll2)
   return() => {
    window.removeEventListener('scroll', handleScroll2)
    }
},[])



    return (
        <div id='projects' className='projects-div'>
            <div className='services'>
            <h1>SERVICES</h1>
            <p>BSI offers a full spectrum of services to help organizations work better. <br/>
             We create standards of excellence, train your people to work in more effective <br/>ways, 
             assess how you’re doing and help you perform even better in the future. </p>
            </div>
            <div className='all-services'>
            <div style={{transform:`translateY(${(scroll1-980)}px)`, transition:'all 0.9s linear'}}>
                <img src={media} style={{width:'40px'}}/>
                <h3>Advertising</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div style={{transform:`translateY(${(scroll1-980)}px)`, transition:'all 0.9s linear'}}>
                <img src={branding} style={{width:'40px'}}/>
                <h3>Branding</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div style={{transform:`translateY(${(scroll1-980)}px)`, transition:'all 0.9s linear'}}>
                <img src={media} style={{width:'40px'}}/>
                <h3>Media</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div style={{transform:`translateY(${(scroll2-980)}px)`, transition:'all 0.9s linear'}}>
                <img src={events} style={{width:'40px'}}/>
                <h3>Events </h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div style={{transform:`translateY(${(scroll2-980)}px)`, transition:'all 0.9s linear'}}>
                <img src={production} style={{width:'40px'}}/>
                <h3>Production</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div style={{transform:`translateY(${(scroll2-980)}px)`, transition:'all 0.9s linear'}}>
                <img src={social} style={{width:'40px'}}/>
                <h3>Social</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            </div>
        </div>
    )
}

export default Projects