import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from '../../Image/atelierr 1.png';
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
    const [isRed, setIsRed] = useState(false);
    const [openNav, setOpenNav] = useState(false)

    function handleOpen() {
        setOpenNav(!openNav)
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsRed(window.scrollY > 500);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{ backgroundColor: isRed ? '#47423f' : '' }}>
            <img src={Logo} alt="Logo" />
            <ul className='normalBox'>
                <li>About Us</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
            <div className="btn" style={{ color: isRed ? '#dfd8c9' : '#47423f' }} onClick={handleOpen}>
                {openNav ? <IoMdMenu /> : <IoCloseSharp />}
            </div>
            <ul className={`respNavbar ${openNav ? "opened" : ""}`}>
                <li>About Us</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
