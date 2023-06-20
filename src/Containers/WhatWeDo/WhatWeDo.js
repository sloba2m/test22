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

function WhatWeDo() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const scrollToDiv = () => {
        const element = document.getElementsByClassName("clientProfiling")[0];
        element.scrollIntoView();
    }

    return (
        <div className='whatWeDoPage'>
            <div className='hero hero-what-we-do'>
                <Container className='text-center'>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h1 className='before-after h1-large-font'>Customized Solutions for Your <span>Business Growth</span></h1>
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

            <div className='clientProfiling section1'>
                <Container>
                    <Row className='align-items-end'>
                        <Col md={6}>
                            <div className='heading'>
                                <h4><span>CLIENT PROFILING</span></h4>
                                <h3>Client Profiling: Unlocking Insights for Targeted Success</h3>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='text-div head'>
                                <p>Gain valuable insights into your target audience through client profiling. Optimize your marketing strategies for maximum engagement and conversion.</p>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='service-main'>
                                <Row>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service1Icon} alt='Market analysis' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Market analysis </h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        We conduct in-depth analysis to effectively understand and target specific client demographics, optimizing your marketing strategies.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service2Icon} alt='Competitive research' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Competitive research</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        provides professional creative solutions for visual communication, using innovative strategies to solve problems and deliver impactful results.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service3Icon} alt='Campaign Ideation' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Campaign Ideation</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        We offer professional services for developing innovative solutions and products, delivering excellence through our expertise and creativity.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service4Icon} alt='Persona Development' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Persona Development</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Seamless hosting for reliable online presence. Trust us with your website's performance and success.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service5Icon} alt='Heuristic Evaluation' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Heuristic <br /> Evaluation</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Persona Development: Craft detailed profiles for precise targeting and personalized communication strategies.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service6Icon} alt='Digital Strategy' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Digital Strategy</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Digital Strategy: Drive your online success with strategic planning and execution.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='bg-div' aria-label='CLIENT PROFILING'>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='design section1'>
                <Container>
                    <Row className='align-items-end'>
                        <Col md={6}>
                            <div className='heading'>
                                <h4><span>DESIGN</span></h4>
                                <h3>Elevate Your Vision with Exceptional Design Services</h3>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='text-div head'>
                                <p>Unleash your creativity with our exceptional design services. We craft captivating visuals that make a lasting impact. Let's bring your ideas to life.</p>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='service-main'>
                                <Row>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service7Icon} alt='ui/ux design' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>ui/ux design</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Efficient service to enhance performance and maximize effectiveness of systems.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service8Icon} alt='logo DESIGN' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>logo DESIGN</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Crafting visually captivating logos that embody your brand's identity and leave a memorable impression.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service9Icon} alt='Business card' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Business card</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Designing stylish and professional business cards that effectively showcase your contact information and leave a lasting impression.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='bg-div' aria-label='DESIGN'>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='develop section1'>
                <Container>
                    <Row className='align-items-end'>
                        <Col md={6}>
                            <div className='heading'>
                                <h4><span>DEVELOP</span></h4>
                                <h3>Powerful Solutions<br />
                                    Our Development Services</h3>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='text-div head'>
                                <p>Expert development service turning your ideas into robust solutions with cutting-edge technology and seamless functionality.</p>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='service-main'>
                                <Row>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service10Icon} alt='Frontend code' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Frontend code</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Visually appealing frontend code bringing designs to life with seamless user experiences.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service11Icon} alt='Backend code' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Backend code</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Robust backend code for powerful web applications and seamless system performance.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service12Icon} alt='Database' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Database</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Empower your business with secure, scalable database solutions for efficient data management and organization.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='bg-div' aria-label='DEVELOP'>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='optimize section1'>
                <Container>
                    <Row className='align-items-end'>
                        <Col md={6}>
                            <div className='heading'>
                                <h4><span>OPTIMIZE</span></h4>
                                <h3>Optimize Your Success with Our Powerful Optimization Services</h3>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='text-div head'>
                                <p>Unlock potential with our optimization service. From SEO to performance enhancements, we boost efficiency and drive measurable results.</p>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='service-main'>
                                <Row>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service13Icon} alt='analytics' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>analytics</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Data-driven insights driving growth and efficiency in industries through informed decision-making and optimization.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service14Icon} alt='SEO' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>SEO</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Drive online success with SEO. Enhance visibility, attract traffic, and rank higher in search engine results.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service15Icon} alt='Blog Post Creation' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Blog Post Creation</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Engaging blog posts that captivate readers and boost brand awareness.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='bg-div' aria-label='OPTIMIZE'>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='maintenance section1'>
                <Container>
                    <Row className='align-items-end'>
                        <Col md={6}>
                            <div className='heading'>
                                <h4><span>MAINTENANCE</span></h4>
                                <h3>Seamless Operation. Expert Maintenance Services</h3>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='text-div head'>
                                <p>Reliable maintenance services ensuring smooth operation, proactive care, and efficient solutions for your systems. Trust us for hassle-free maintenance.</p>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='service-main'>
                                <Row>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service16Icon} alt='Hosting' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Hosting </h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Seamless hosting for reliable online presence. Trust us with your website's performance and success.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service17Icon} alt='Small updates' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Small updates</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Freshen up your website with efficient updates. Enhance user experience with timely improvements.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='service-border-div'>
                                            <div className='service-div'>
                                                <div className='icon-div'>
                                                    <img src={Service18Icon} alt='Big updates' />
                                                </div>
                                                <div className='heading'>
                                                    <h4>Big updates</h4>
                                                </div>
                                                <div className='text-div text-center'>
                                                    <p>
                                                        Revitalize your website with impactful updates. Experience enhanced functionality and modern design. Trust our expertise.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='bg-div' aria-label='MAINTENANCE'>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <FooterTop />
        </div>
    )
}

export default WhatWeDo