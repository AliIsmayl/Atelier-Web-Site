import React from 'react'
import './Navbar.scss'
import Logo from '../../Image/atelierr 1.png'
function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="" />
            <ul className='normalBox'>
                <li>About Us</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            {/* <ul className='respNavbar'>
                <li>About Us</li>
                <li>Service</li>
                <li>Contact</li>
            </ul> */}

        </nav>
    )
}

export default Navbar