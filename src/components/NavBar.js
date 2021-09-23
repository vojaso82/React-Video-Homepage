import React, { useState } from 'react'
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';
import MiamiLogo from './MiamiLogo2.png'

function NavBar() {

const [navbar, setNavbar] = useState(false)


const navbarColorChange = () => {
//     console.log(window.scrollY)
if(window.scrollY >= 60){
    setNavbar(true);
}else{
    setNavbar(false);
}
 }

window.addEventListener('scroll', navbarColorChange)


    return (
        <nav className={navbar ? 'navbar-color navbar-div' : 'navbar-div'}>
            <HashLink smooth to={'/#home'} className="logo">
                <img src={MiamiLogo} style={{width:'180px'}} />
            </HashLink>
            <ul>
                <li className='links'>
                <HashLink smooth to={'/#home'}>HOME</HashLink>
                </li>
                <li className='links'>
                <HashLink smooth to={'/#about'}>ABOUT</HashLink>
                </li>
                <li className='links'>
                <HashLink smooth to={'/#projects'}>SERVICES</HashLink>
                </li>
                <li className='links'>
                <HashLink smooth to={'/#contact'}>CONTACT</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar