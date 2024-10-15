import React from 'react'
import './Header.scss'
import Logo from '../../Image/atelierr 1.png'
import Back from '../../Image/HeaderBack.png'
function Header() {
    return (
        <section id='header' style={{ backgroundImage: `url(${Back})` }}>
            <img src={Logo} alt="" />
            <h1>ATELIER DI FALCO</h1>
            <span></span>
            <p>THE ART OF QUALITY</p>
        </section>
    )
}

export default Header