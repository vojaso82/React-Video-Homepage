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
            <div className="logo">
                <img src={MiamiLogo} style={{width:'180px'}}/>
            </div>
            <ul>
                <li className='links'>
                <HashLink smooth to={'/#home'}>Home</HashLink>
                </li>
                <li className='links'>
                <HashLink smooth to={'/#about'}>About</HashLink>
                </li>
                <li className='links'>
                <HashLink smooth to={'/#projects'}>Projects</HashLink>
                </li>
                <li className='links'>
                <HashLink smooth to={'/#contact'}>Contact</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar