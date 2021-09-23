import React from 'react'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';

function Footer() {
    return (
        <div className='footer-div'>   
                <div className='div1'>
                <HashLink className='button-home' smooth to={'/#home'}><button>^</button></HashLink> 
                <p>2021 © Vojislav Zaja, All rights reserved.</p>
                </div>  
        </div>
    )
}

export default Footer