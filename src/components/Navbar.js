import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src='airbnblogo.png' alt='logo'/>       
        <div className='rightpart'>
            <span className='navbartext'>Become a Host</span>
            <i class="fa-solid fa-globe" id='globe'></i>
            <span className='navbarprofilespan'>
            <i class="fa-solid fa-bars" id='menu'></i>
            <i class="fa-regular fa-user" id='profile'></i>
            </span>    
        </div>
        <hr/>
    </div>
  )
}

export default Navbar