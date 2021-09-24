import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { HashLink } from 'react-router-hash-link';
import MiamiLogo from './MiamiLogo2.png'

function NavBar() {

const [navbar, setNavbar] = useState(false)
const [toggle, setToggle] = useState(true);


const navbarColorChange = () => {
//     console.log(window.scrollY)
if(window.scrollY >= 60 && window.innerWidth > 800){
    setNavbar(true);
}else{
    setNavbar(false);
}
 }

 const handleToggle = () => {
    if (window.innerWidth < 800) {
      setToggle(false);
  
    }
    if (window.innerWidth >= 800) {
      setToggle(true);
      
    }
  };

  const handleBurgerMenu = () => {
      if(window.innerWidth < 800){
          setToggle(false)
      }else{
          setToggle(true)
      }
  }

window.addEventListener('scroll', navbarColorChange)
window.addEventListener('resize', handleToggle)

console.log(navbar)

    return (
        <nav className={navbar ? 'navbar-color navbar-div' : 'navbar-div'}>
       
        <div id="menuToggle" onClick={() => setToggle(!toggle)}>    
          <input type="checkbox"/>
          <span id={toggle === false ? "span1" : "spanx1"}></span>
          <span id={toggle === false ? "span2" : "spanx2"}></span>
          <span id={toggle === false ? "span3" : "spanx3"}></span>
        </div>
            <HashLink smooth to={'/#home'} className="logo">
                <img src={MiamiLogo} style={{width:'180px'}} />
            </HashLink>
            
            <ul style={toggle ? {display:'flex'} : {display:'none'}}>
                <li onClick={()=>handleBurgerMenu()} className='links'>
                <HashLink smooth to={'/#home'}>HOME</HashLink>
                </li>
                <li onClick={()=>handleBurgerMenu()} className='links'>
                <HashLink smooth to={'/#about'}>ABOUT</HashLink>
                </li>
                <li onClick={()=>handleBurgerMenu()} className='links'>
                <HashLink smooth to={'/#projects'}>SERVICES</HashLink>
                </li>
                <li onClick={()=>handleBurgerMenu()} className='links'>
                <HashLink smooth to={'/#contact'}>CONTACT</HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar