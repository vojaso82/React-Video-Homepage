import React from 'react';
import './Contact.css';



function Contact() {

    return (
        <div id='contact' className='contact-div'>
            <h1>GET IN TOUCH</h1>
            
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