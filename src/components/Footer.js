import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';

function Footer() {
    return (
        <div className='footer-div'>   
                <div className='div1'>
                <HashLink className='button-home' smooth to={'/#home'}><button>^</button></HashLink> 
                <p>2021 © Vojislav Zaja, All rights reserved.</p>
                </div> 
                <div className='social-icons'>
                <a className='icons' href="https://www.facebook.com/" target='_blank'><FaIcons.FaFacebookSquare/></a>
                <a className='icons' href="https://twitter.com/" target='_blank'><FaIcons.FaTwitterSquare/></a>
                <a href="https://www.instagram.com/" target='_blank'><AiIcons.AiFillInstagram/></a>
                <a href="https://www.linkedin.com/" target='_blank'><AiIcons.AiFillLinkedin/></a>
                </div> 
        </div>
    )
}

export default Footer