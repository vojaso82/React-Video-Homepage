import React, { useState } from 'react'
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';

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
                
            </ul>
        </nav>
    )
}

export default NavBar