import React, { useState, useEffect} from 'react'
import './Projects.css'
import advertise from './advertise.png'
import branding from './branding.png'
import events from './events.png'
import media from './media.png'
import production from './production.png'
import social from './social.png'

function Projects() {

const [onscroll, setOnscroll] = useState(false)


//SCROLLS on Y MIAMI PICTURES
const handleScroll = () => {
    if(window.scrollY > 1450){
        setOnscroll(true)
    }else{
        setOnscroll(false)
}
}

useEffect (() => {
    window.addEventListener('scroll', handleScroll)
    return() => {
     window.removeEventListener('scroll', handleScroll)
     }
 },[])
 window.addEventListener('scroll', handleScroll)
//  console.log(onscroll, window.scrollY)



    return (
        <div id='projects' className='projects-div'>
            <div className='services'>
            <h1>SERVICES</h1>
            <p>City of Miami offers a full spectrum of services to help organizations work better. <br/>
             We create standards of excellence, train your people to work in more effective <br/>ways, 
             assess how you’re doing and help you perform even better in the future. </p>
            </div>
            <div className='all-services'>
            <div id='box1'className={onscroll ? 'box-slide' : 'box-down'}>
                <img src={media} style={{width:'40px'}}/>
                <h3>Advertising</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div id='box2' className={onscroll ? 'box-slide' : 'box-down'}>
                <img src={branding} style={{width:'40px'}}/>
                <h3>Branding</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div id='box3' className={onscroll ? 'box-slide' : 'box-down'}>
                <img src={media} style={{width:'40px'}}/>
                <h3>Media</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div  id='box4' className={onscroll ? 'box-slide' : 'box-down'}>
                <img src={events} style={{width:'40px'}}/>
                <h3>Events </h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div  id='box5' className={onscroll ? 'box-slide' : 'box-down'}>
                <img src={production} style={{width:'40px'}}/>
                <h3>Production</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            <div  id='box6' className={onscroll ? 'box-slide' : 'box-down'}>
                <img src={social} style={{width:'40px'}}/>
                <h3>Social</h3>
                <p>Great advertising not only sells, but compels. By combining unique cultural insights with big creative, we build award-winning campaigns that drive sales.</p>
            </div>
            </div>
        </div>
    )
}

export default Projects