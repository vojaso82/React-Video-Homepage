import React, { useEffect, useState } from 'react'
import './Home.css'
import Miami from './video/Miami.mp4'
import Miami2 from './video/Miami2.mp4'
import Miami3 from './video/Miami3.mp4'


let videoArray = [Miami, Miami2, Miami3];

function Home() {

const [videos, setVideos] = useState(videoArray);
const [currentVideo, setCurrentVideo] = useState(0);

useEffect(async () => {
    const interval = setInterval(() => {   
      setCurrentVideo(currentVideo => (currentVideo+1)%videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos]);

console.log(videos[currentVideo])

    return (
        
        <div id='home' className='home-div'> 
        <h1>WELCOME TO MIAMI</h1>
        <h2>Magic City</h2> 
        <video autoPlay loop muted
           style={{
               position:'absolute',
               width:'100%',
               height:'100%',
               left:'49.99%',
               top:'50%',
               objectFit:'cover',
               transform:'translate(-50%, -50%)',
               zIndex:'-1'
           }}
           >
            <source src={videos[currentVideo]} type='video/mp4' />
           </video> 
        </div>
    )
}

export default Home
