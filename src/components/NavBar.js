import React from 'react'
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    return (
        <nav className='navbar-div'>
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