import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import Logo from '../../Image/atelierr 1.png';
import { IoCloseSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';


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
                <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
                    <li>
                        About Us
                    </li>
                </ScrollLink>
                <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
                    <li>
                        Service
                    </li>
                </ScrollLink>
                <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
                    <li>
                        Contact
                    </li>
                </ScrollLink>
            </ul>
            <div className="btn" style={{ color: isRed ? '#dfd8c9' : '#47423f' }} onClick={handleOpen}>
                {openNav ? <IoMdMenu /> : <IoCloseSharp />}
            </div>
            <ul className={`respNavbar ${openNav ? "opened" : ""}`}>
                <ScrollLink to="About" onClick={handleOpen} smooth={true} duration={500} offset={-100}>
                    <li>
                        About Us
                    </li>
                </ScrollLink>
                <ScrollLink to="Service" onClick={handleOpen} smooth={true} duration={500} offset={-50}>
                    <li>
                        Service
                    </li>
                </ScrollLink>
                <ScrollLink to="Contact" onClick={handleOpen} smooth={true} duration={500} offset={-50}>
                    <li>
                        Contact
                    </li>
                </ScrollLink>
            </ul>
        </nav>
    );
}

export default Navbar;
