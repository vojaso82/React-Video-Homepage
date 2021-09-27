import React, { useState, useEffect } from 'react';
import './Contact.css';



function Contact() {

    const [onscroll, setOnscroll] = useState(false)


const handleScroll = () => {
    if(window.scrollY > 2000){
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
// console.log(onscroll, window.scrollY)


    return (
        <div id='contact' className='contact-div'>
            <div className='getintouch'>
            <span id='letter1'className={onscroll ? 'no-letter' : 'show-letter'}>G</span>
            <span id='letter2'className={onscroll ? 'no-letter' : 'show-letter'}>E</span>
            <span id='letter3'className={onscroll ? 'no-letter' : 'show-letter'}>T     </span>
            
            <span id='letter4'className={onscroll ? 'no-letter' : 'show-letter'}>I</span>
            <span id='letter5'className={onscroll ? 'no-letter' : 'show-letter'}>N     </span>

            <span id='letter6'className={onscroll ? 'no-letter' : 'show-letter'}>T</span>
            <span id='letter7'className={onscroll ? 'no-letter' : 'show-letter'}>O</span>
            <span id='letter8'className={onscroll ? 'no-letter' : 'show-letter'}>U</span>
            <span id='letter9'className={onscroll ? 'no-letter' : 'show-letter'}>C</span>
            <span id='letter10'className={onscroll ? 'no-letter' : 'show-letter'}>H</span>

            </div>
            
            <div className='google-map-div'>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=701%20S%20Miami%20Ave,%20Miami,%20FL%2033131+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            </div>
            
            <div className='informations'>
                <h2>MIAMI CITY ADMINISTRATION</h2>
                <p>701 S Miami Ave, Miami, FL 33131</p>
                <p>CALL US</p>
                <h2><a href="tel:+1-555-555-1212">555.555.1212</a></h2>
                <p>OR EMAIL</p>
                <p style={{fontWeight:'bold'}}>General Inquiries</p>
                <a href="email@example.com">email@example.com</a>
                <p style={{fontWeight:'bold'}}>Customer support</p>
                <a href="email@example.com">email@example.com</a>

            </div>  
        </div>
    )
}

export default Contact