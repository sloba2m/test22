import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function FooterTop() {
    return (
        <div className='footer-top-main'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='footer-top-text'>
                            <div className='heading'>
                                <h1>Ready to discuss your project?</h1>
                            </div>
                            <div className='btn-div'>
                                <div className='btn-gradient-border'>
                                    <NavLink to='/contact'>
                                        <button>Let’s Talk</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterTop