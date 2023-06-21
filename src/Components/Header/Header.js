import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import './Header.css'
import Logo from '../../assets/images/header/logo.png'
import LogoSidebar from '../../assets/images/header/Logo-sidebar.png'
import menuIcon from '../../assets/images/header/menu-icon.png'
import menuClose from '../../assets/images/header/menu-close.png'

function Header() {

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <header>
            <Container>
                <Row>
                    <div className='flex-div'>
                        <div className='logo-img'>
                            <NavLink to='/'>
                                <img src={Logo} alt='pixelinfinity' />
                            </NavLink>
                        </div>
                        <div className='navlinks'>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/what-we-do">What we do</NavLink></li>
                                <li><NavLink to="/past-work">Past Work</NavLink></li>
                                <li><NavLink to="/our-blog">Our Blog</NavLink></li>
                            </ul>
                        </div>
                        <div className='btn-div btn-gradient-border'>
                            <NavLink to="/contact">
                                <button className=''>Get Started</button>
                            </NavLink>
                        </div>
                        <div className='menu-btn'>
                            <button onClick={openNav} className=''><img src={menuIcon} /></button>
                        </div>
                    </div>
                </Row>
            </Container>
            <div id="mySidenav" className="sidenav">
                <div>
                    <div className='menu-close'>
                        <img onClick={closeNav} src={menuClose} />
                    </div>
                    <div className='navlinks'>
                        <ul>
                            <li><NavLink to="/contact" onClick={closeNav}>Contact</NavLink></li>
                            <li><NavLink to="/what-we-do" onClick={closeNav}>What we do</NavLink></li>
                            <li><NavLink to="/past-work" onClick={closeNav}>Past Work</NavLink></li>
                            <li><NavLink to="/our-blog" onClick={closeNav}>Our Blog</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='logo-img'>
                    <NavLink to='/'>
                        <img onClick={closeNav} src={LogoSidebar} alt='pixelinfinity' />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header