import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PastWork1 from '../../assets/images/pastWork/past-work-1.png'
import PastWork2 from '../../assets/images/pastWork/past-work-2.png'
import PastWork3 from '../../assets/images/pastWork/past-work-3.png'
import PastWork4 from '../../assets/images/pastWork/past-work-4.png'
import PastWork5 from '../../assets/images/pastWork/past-work-5.png'
import PastWork6 from '../../assets/images/pastWork/past-work-6.png'
import FooterTop from '../../Components/FooterTop/FooterTop'
import { NavLink } from 'react-router-dom'

import './PastWork.css'

function PastWork() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='pastWork'>
      <div className='hero hero-what-we-do'>
        <Container className='text-center'>
          <Row>
            <Col md={12}>
              <div className='heading'>
                <h1 className='h1-large-font'>Creating next Level <span>Digital Products</span></h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className='section1'>
        <Container>
          <Row>
            <Col sm={6}>
              <NavLink to='/past-work/the-variable'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork1} alt='THE VARIABLE' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <h4>THE VARIABLE</h4>
                    </div>
                    <div className='text-div'>
                      <p>
                        The Variable — interactive design for those who fight indifference
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
            <Col sm={6}>
              <NavLink to='/past-work/spaces'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork2} alt='SPACES' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <h4>SPACES</h4>
                    </div>
                    <div className='text-div'>
                      <p>
                        Embracing the future: modern design for Spaces Urbanistic Institute
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
            <Col sm={6}>
              <NavLink to='/past-work/bling'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork3} alt='BLING' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <h4>BLING</h4>
                    </div>
                    <div className='text-div'>
                      <p>
                        Bling Jewelry Store — timeless beauty between vintage and novel
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
            <Col sm={6}>
              <NavLink to='/past-work/mixmo'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork4} alt='MIXMO' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <h4>MIXMO</h4>
                    </div>
                    <div className='text-div'>
                      <p>
                        Mixmo: shaking up the music scene with a bold and colorful image
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
            <Col sm={6}>
              <NavLink to='/past-work/go-trade'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork5} alt='GO TRADE' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <h4>GO TRADE</h4>
                    </div>
                    <div className='text-div'>
                      <p>
                        Futuristic and sleek design for the universal investment platform
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
            <Col sm={6}>
              <NavLink to='/past-work/heytutor'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork6} alt='HEYTUTOR' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <h4>HEYTUTOR</h4>
                    </div>
                    <div className='text-div'>
                      <p>
                        Heytutor — smart design for online tutoring platform with $30M revenue
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </section>

      <FooterTop />
    </div>
  )
}

export default PastWork