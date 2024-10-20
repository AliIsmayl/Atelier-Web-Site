import React from 'react'
import Photo from '../../Image/FooterPhoto.png'
import './Footer.scss'
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
    return (
        <footer>
            <div className="upBox">
                <div className="leftBox">
                    <div className="upBox2">
                        <ul>
                            <li>
                                <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
                                    About Us
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
                                    Service
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
                                    Contact
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                    <p>Mammad Araz street 17,
                        Baku, Azerbaijan</p>
                    <p>Contact Us: +994 50 688 00 12</p>
                    <div className="downBox2">
                        <ul>
                            <li><FaInstagram /> @atelierdifalco</li>
                            <li><HiOutlineMail /> atelierdifalco@atelierdifalco.az</li>
                        </ul>
                    </div>
                </div>
                <div className="rightBox">
                    <img src={Photo} alt="" />
                </div>
            </div>
            <div className="downBox">
                2024 © created by PM Systems. All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer