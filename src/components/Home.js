import React, { useEffect, useState,  useRef } from 'react'
import './Home.css'
import Miami from './Miami.mp4'
import Miami2 from './Miami2.mp4'
import Miami3 from './Miami3.mp4'


let videoArray = [Miami, Miami2, Miami3];

function Home() {
const [videos, setVideos] = useState(videoArray);
const [currentVideo, setCurrentVideo] = useState(0);
const [changetext, setChangeText] = useState(false)


useEffect( () => {
    const interval = setInterval(() => {   
      setCurrentVideo(currentVideo => (currentVideo+1)%videos.length)
      
    }, 5000);
    return () => clearInterval(interval);
  }, [videos]);

// console.log(videos[currentVideo])

const changeVideo = (e) => {
if(e.target.id === 'video1'){
    setCurrentVideo(0)
}else if(e.target.id === 'video2'){
    setCurrentVideo(1)
}else if(e.target.id === 'video3'){
    setCurrentVideo(2)
}
}

const textTransition = () => {
    if(window.scrollY > 80){
        setChangeText(true);
    }else{
        setChangeText(false);
    }
     }
    
window.addEventListener('scroll', textTransition)



    return (
        
        <div id='home' className='home-div'> 
        <div className='intro-text'>
        <h1 className={changetext ? 'text-transition1' : 'text-transition3'}>WELCOME TO MIAMI</h1>
        <h2 className={changetext ? 'text-transition2' : 'text-transition4'}>MAGIC CITY</h2> 
        </div>
        <video autoPlay loop muted className="video">
            <source src={videos[1]} type='video/mp4' />
           </video> 
           {/* <p style={{background:'red'}}>{videos[currentVideo]}</p> */}
           <div className='buttons'>
               <button id="video1" onClick={(e)=>changeVideo(e)}></button>
               <button id="video2" onClick={(e)=>changeVideo(e)}></button>
               <button id="video3" onClick={(e)=>changeVideo(e)}></button>
           </div>
        </div>
    )
}

export default Home
