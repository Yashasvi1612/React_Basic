import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='nav-prop'>
      <img id='logo-1' src="https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png" alt="logo"/>
      <div className='list-item'>
        <ul>
            <li href='#'>MENU</li>
            <li href='#'>LOCATION</li>
            <li href='#'>ABOUT</li>
            <li href='#'>CONTACT</li>
        </ul>
      </div>
      <button className='login-btn'>Login</button>
    </div>
  )
}

export default Navbar

