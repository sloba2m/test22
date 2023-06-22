import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ScrollDownIcon from '../../assets/images/whatWeDo/arrow-down.png'
import Service1Icon from '../../assets/images/whatWeDo/Market-analysis.png'
import Service2Icon from '../../assets/images/whatWeDo/Competitive-research.png'
import Service3Icon from '../../assets/images/whatWeDo/Campaign-Ideation.png'
import Service4Icon from '../../assets/images/whatWeDo/Persona-Development.png'
import Service5Icon from '../../assets/images/whatWeDo/Heuristic-Evaluation.png'
import Service6Icon from '../../assets/images/whatWeDo/Digital-Strategy.png'

import Service7Icon from '../../assets/images/whatWeDo/UX.png'
import Service8Icon from '../../assets/images/whatWeDo/Logo.png'
import Service9Icon from '../../assets/images/whatWeDo/Business-Card.png'

import Service10Icon from '../../assets/images/whatWeDo/Frontend-code.png'
import Service11Icon from '../../assets/images/whatWeDo/Backend-code.png'
import Service12Icon from '../../assets/images/whatWeDo/Database.png'

import Service13Icon from '../../assets/images/whatWeDo/Analytics.png'
import Service14Icon from '../../assets/images/whatWeDo/Seo.png'
import Service15Icon from '../../assets/images/whatWeDo/Blog-content.png'

import Service16Icon from '../../assets/images/whatWeDo/Hosting.png'
import Service17Icon from '../../assets/images/whatWeDo/Small-updates.png'
import Service18Icon from '../../assets/images/whatWeDo/Big-updates.png'

import './WhatWeDo.css'
import FooterTop from '../../Components/FooterTop/FooterTop'
import { NavLink } from 'react-router-dom'

function WhatWeDo() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const scrollToDiv = () => {
        const element = document.getElementById("clientProfiling");
        element.scrollIntoView();
    }

    return (
        <div className='whatWeDoPage'>
            <div className='hero hero-what-we-do'>
                <Container className='text-center'>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h1 className='before-after h1-large-font'>Customized Solutions <br />for Your <span>Business Growth</span></h1>
                            </div>

                            <div className='text-div'>
                                <p>Experience tailored strategies and innovative solutions that drive your business forward, empowering you to achieve remarkable growth in the digital landscape.</p>
                            </div>

                            <div className='btn-div'>
                                <div className='btn-gradient-border'>
                                    <button onClick={scrollToDiv}>Scroll Down <img src={ScrollDownIcon} /></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className='section1' id='clientProfiling'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='service-main'>
                                <Row>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Consultation-and-Requirement-Gathering'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service1Icon} alt='Consultation and Requirement Gathering' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Consultation and Requirement Gathering</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Discovery and Analysis</li>
                                                            <li>Crafting User-Centric Design</li>
                                                            <li>Defining Project Scope</li>
                                                            <li>Visualizing Concepts</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Consultation-and-Requirement-Gathering'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Design-Concept-and-Mockups'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service2Icon} alt='DESIGN' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Design Concept and Mockups</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Visualizing Your Vision</li>
                                                            <li>Inspiring Visual Language</li>
                                                            <li>Structuring the Blueprint</li>
                                                            <li>Bringing Design to Life</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Design-Concept-and-Mockups'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Custom-Design-and-Development'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service3Icon} alt='Develop' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Custom Design and Development</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Front-End Development</li>
                                                            <li>Responsive Design</li>
                                                            <li>Content Integration and Interactive Functionality</li>
                                                            <li>Testing, Optimization, and Deployment</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Custom-Design-and-Development'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Content-Integration'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service4Icon} alt='Optimize' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Content Integration</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Code Craftsmanship</li>
                                                            <li>Adapting to All Screens</li>
                                                            <li>Seamless Integration and Engaging Interactions</li>
                                                            <li>Testing, Optimizing, and Launching</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Content-Integration'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Responsive-Design'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service5Icon} alt='Maintenance' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Responsive Design</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Dynamic Grids</li>
                                                            <li>Customized Styles</li>
                                                            <li>Adapting Visuals</li>
                                                            <li>User-Friendly Experience</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Responsive-Design'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Functionality-and-Features'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service6Icon} alt='Maintenance' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Functionality and Features</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Feature Identification</li>
                                                            <li>Planning, Design, and Integration</li>
                                                            <li>Custom Development</li>
                                                            <li>Testing, UX Considerations, Documentation, and Support</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Functionality-and-Features'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Testing-and-Quality-Assurance'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service7Icon} alt='Maintenance' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Testing and Quality Assurance</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Unveiling the Possibilities</li>
                                                            <li>Strategic Planning and Seamless Integration</li>
                                                            <li>Tailored Solutions</li>
                                                            <li>Ensuring Excellence</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Testing-and-Quality-Assurance'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Deployment-and-Launch'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service8Icon} alt='Maintenance' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Deployment and Launch</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Setting the Stage</li>
                                                            <li>Secure Transfers and Dynamic Foundations</li>
                                                            <li>Domain Alignment and Final Checks</li>
                                                            <li>Speed and Efficiency</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Deployment-and-Launch'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} sm={6}>
                                        <NavLink to='/what-we-do/Ongoing-Support-and-Maintenance'>
                                            <div className='service-border-div'>
                                                <div className='service-div'>
                                                    <div className='icon-div'>
                                                        <img src={Service9Icon} alt='Maintenance' />
                                                    </div>
                                                    <div className='heading'>
                                                        <h4>Ongoing Support and Maintenance</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <ol>
                                                            <li>Reliable Support and Issue Resolution</li>
                                                            <li>Safeguarding Stability</li>
                                                            <li>Driving Efficiency</li>
                                                            <li>Content Care and Expert Guidance</li>
                                                        </ol>

                                                        <NavLink to='/what-we-do/Ongoing-Support-and-Maintenance'>LEARN MORE</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    {/* <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div see-all'>
                        <div className='see-all-icon'>
                          <img src={ServiceSeeAll} />
                        </div>
                        <div className='heading'>
                          <h2>See All Services.</h2>
                        </div>
                      </div>
                    </div>
                  </Col> */}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <FooterTop />
        </div>
    )
}

export default WhatWeDo