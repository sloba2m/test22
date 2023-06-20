import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import './Header.css'
import Logo from '../../assets/images/header/logo.png'

function Header() {
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
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header