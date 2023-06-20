import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/header/logo.png'
import FacebookIcon from '../../assets/images/Footer/Facebook.png'
import InstagramIcon from '../../assets/images/Footer/Instagram.png'
import LinkedinIcon from '../../assets/images/Footer/Linkedin.png'
import TwitterIcon from '../../assets/images/Footer/Twitter.png'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
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
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    <li><NavLink to="/what-we-do">What we do</NavLink></li>
                                    <li><NavLink to="/past-work">Past Work</NavLink></li>
                                    <li><NavLink to="/our-blog">Our Blog</NavLink></li>
                                </ul>
                            </div>
                            <div className='social-icons'>
                                <ul>
                                    <li><NavLink to="https://www.facebook.com/" target='_blank'><img src={FacebookIcon} alt='facebook' /></NavLink></li>
                                    <li><NavLink to="https://www.instagram.com/" target='_blank'><img src={InstagramIcon} alt='instgram' /></NavLink></li>
                                    <li><NavLink to="https://www.linkedin.com/" target='_blank'><img src={LinkedinIcon} alt='linkedin' /></NavLink></li>
                                    <li><NavLink to="https://twitter.com/" target='_blank'><img src={TwitterIcon} alt='twitter' /></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </Row>
                </Container>
            </footer>
            <div className='footer-bottom'>
                <div className='text-div'>
                    <p>© Pixel Infinity 2023. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer