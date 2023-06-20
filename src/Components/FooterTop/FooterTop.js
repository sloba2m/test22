import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
                                    <button>Let’s Talk</button>
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