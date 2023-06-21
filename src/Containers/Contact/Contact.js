import React, { useEffect } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import heroImage from '../../assets/images/contact/hero-img.png'

import './Contact.css'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='contact'>
            <div className='hero-home'>
                <Container className='text-center'>
                    <Row>
                        <Col md={8}>
                            <div className='heading'>
                                <h1 className='before-after'>Love to hear from you <br />
                                    <span> Get in touch.</span></h1>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='img-div'>
                                <img src={heroImage} alt='Love to hear from you Get in touch' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className='section1'>
                <Container>
                    <form>
                        <Row>
                            <Col md={6}>
                                <div className='input-div'>
                                    <label>Your name</label>
                                    <input type='text' placeholder='Your name' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='input-div'>
                                    <label>Your mail</label>
                                    <input type='text' placeholder='Your mail' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='input-div'>
                                    <label>What you are interested</label>
                                    <select>
                                        <option>Design & Branding</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='input-div'>
                                    <label>Project budget</label>
                                    <select>
                                        <option>Select your budget</option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='input-div'>
                                    <label>Messages</label>
                                    <textarea placeholder="Let's tell us know what about your project"></textarea>
                                </div>
                            </Col>
                        </Row>
                        <div className='btn-div'>
                            <div className='btn-gradient-border'>
                                <button>Send</button>
                            </div>
                        </div>
                    </form>
                </Container>
            </section>

            <section className='section2'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h2>We get these Questions a lot</h2>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='accord-main'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Are you a full-service agency?</Accordion.Header>
                                        <Accordion.Body>
                                            For traditional projects, you’ll receive a team including direct points of contact for project management, creative direction and content strategy. For agile UX (what we call continuous improvement) engagements, you’ll have a digital strategist and UX lead as your primary points of contact. Finally, for ongoing support, you’ll have an account manager and a support lead available whenever you need it.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What’s a typical project timeline?</Accordion.Header>
                                        <Accordion.Body>
                                            For traditional projects, you’ll receive a team including direct points of contact for project management, creative direction and content strategy. For agile UX (what we call continuous improvement) engagements, you’ll have a digital strategist and UX lead as your primary points of contact. Finally, for ongoing support, you’ll have an account manager and a support lead available whenever you need it.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Will I have a direct point-of-contact?</Accordion.Header>
                                        <Accordion.Body>
                                            For traditional projects, you’ll receive a team including direct points of contact for project management, creative direction and content strategy. For agile UX (what we call continuous improvement) engagements, you’ll have a digital strategist and UX lead as your primary points of contact. Finally, for ongoing support, you’ll have an account manager and a support lead available whenever you need it.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Do you have a physical location?</Accordion.Header>
                                        <Accordion.Body>
                                            For traditional projects, you’ll receive a team including direct points of contact for project management, creative direction and content strategy. For agile UX (what we call continuous improvement) engagements, you’ll have a digital strategist and UX lead as your primary points of contact. Finally, for ongoing support, you’ll have an account manager and a support lead available whenever you need it.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>What are your business hours?</Accordion.Header>
                                        <Accordion.Body>
                                            For traditional projects, you’ll receive a team including direct points of contact for project management, creative direction and content strategy. For agile UX (what we call continuous improvement) engagements, you’ll have a digital strategist and UX lead as your primary points of contact. Finally, for ongoing support, you’ll have an account manager and a support lead available whenever you need it.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Cats or dogs?</Accordion.Header>
                                        <Accordion.Body>
                                            For traditional projects, you’ll receive a team including direct points of contact for project management, creative direction and content strategy. For agile UX (what we call continuous improvement) engagements, you’ll have a digital strategist and UX lead as your primary points of contact. Finally, for ongoing support, you’ll have an account manager and a support lead available whenever you need it.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Contact