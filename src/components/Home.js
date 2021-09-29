import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import Miami from './Miami.mp4'
import Miami2 from './Miami2.mp4'
import Miami3 from './Miami3.mp4'


let videoArray = [Miami, Miami2, Miami3];

function Home() {
const [videos, setVideos] = useState(videoArray);
const [currentVideo, setCurrentVideo] = useState(0);
const [changetext, setChangeText] = useState(false)
const [videoAnimation, setVideoAnimation] = useState(false)
const [button1color, setButton1color] = useState(false)
const [button2color, setButton2color] = useState(false)




 //CHANGE VIDEO ON BUTTON CLICK
function playVideo(source) { 
    let video = document.getElementById('player');
    video.src= source;
    video.load();
    video.play();
    // console.log(video.src)
}  

//CHANGE VIDEO 
useEffect(() => {
    const interval = setInterval(() => {   
        setCurrentVideo(currentVideo => (currentVideo+1)%videos.length)
        let video = document.getElementById('player');
        video.src= videos[currentVideo];
        video.load();
        video.play();  
    }, 12000);

    return () => clearInterval(interval); 
  }, [currentVideo]);

//TEXT TRANSITION
const textTransition = () => {
    if(window.scrollY > 80){
        setChangeText(true);
    }else{
        setChangeText(false);
    }
     }   
    
window.addEventListener('scroll', textTransition)



 console.log(currentVideo)

    return (
        
        <div id='home' className='home-div'> 
        <div className='intro-text'>
        <h1 className={changetext ? 'text-transition1' : 'text-transition3'}>WELCOME. TO. MIAMI.</h1>
        {/* <h2 className={changetext ? 'text-transition2' : 'text-transition4'}>MAGIC CITY</h2>  */}
        </div>
        <video style={currentVideo === 0 ? {transition:'transformX(-100px)'} : {transition: "opacity 2s ease-in-out"}} id="player" autoPlay loop muted className="video">
            <source id="source1" src={videos[currentVideo]} type='video/mp4' />
        </video> 
        <p style={{background:'red'}}>{videos[currentVideo]}</p>
           <div className='buttons'>
               <button
               style={currentVideo === 0 ? {backgroundColor:'orange'} : {backgroundColor:'white'}}
               src={Miami}
               id="video1"
               onClick={()=>playVideo(Miami)}>
               </button>

               <button
                style={currentVideo === 1 ? {backgroundColor:'orange'} : {backgroundColor:'white'}}
                src={Miami2}
                id="video2"
                onClick={()=>playVideo(Miami2)}>
                </button>

               <button
                style={currentVideo === 2 ? {backgroundColor:'orange'} : {backgroundColor:'white'}}
                src={Miami3}
                id="video3"
                onClick={()=>playVideo(Miami3)}>
                </button>
           </div>
        </div>
    )
}

export default Home
