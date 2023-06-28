import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PastWork1 from '../../assets/images/pastWork/past-work-1.svg'
import PastWork2 from '../../assets/images/pastWork/past-work-2.svg'
import PastWork3 from '../../assets/images/pastWork/past-work-3.svg'
import PastWork4 from '../../assets/images/pastWork/past-work-4.svg'
import PastWork5 from '../../assets/images/pastWork/past-work-5.svg'
import PastWork6 from '../../assets/images/pastWork/past-work-6.svg'
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
<<<<<<< HEAD
                      <article>
                        <h4>THE VARIABLE</h4>
                      </article>
=======
                      <h4>Elysio Burgers</h4>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                    </div>
                    <div className='text-div'>
                      <p>
                      Increase customer reach and facilitate online ordering
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
<<<<<<< HEAD
                      <article>
                        <h4>SPACES</h4>
                      </article>
=======
                      <h4>Medical Symmetry</h4>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                    </div>
                    <div className='text-div'>
                      <p>
                      Improve online presence by effectively presenting their range of services and incorporating an intuitive appointment booking system into their website.
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
<<<<<<< HEAD
                      <article>
                        <h4>BLING</h4>
                      </article>
=======
                      <h4>Fit and Delicious</h4>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                    </div>
                    <div className='text-div'>
                      <p>
                      Create a visually appealing and easily updatable WordPress website
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
<<<<<<< HEAD
                      <article>
                        <h4>MIXMO</h4>
                      </article>
=======
                      <h4>Sphere</h4>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                    </div>
                    <div className='text-div'>
                      <p>
                      Develop a dynamic and user-friendly interface for seamless blockchain interactions, taking usability in the blockchain industry to new heights.
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col>
            {/* <Col sm={6}>
              <NavLink to='/past-work/go-trade'>
                <div className='past-work-box'>
                  <div className='img-div'>
                    <img src={PastWork5} alt='GO TRADE' />
                  </div>
                  <div className='text'>
                    <div className='heading'>
                      <article>
                        <h4>GO TRADE</h4>
                      </article>
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
                      <article>
                        <h4>HEYTUTOR</h4>
                      </article>
                    </div>
                    <div className='text-div'>
                      <p>
                        Heytutor — smart design for online tutoring platform with $30M revenue
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </Col> */}
          </Row>
        </Container>
      </section>

      <FooterTop />
    </div>
  )
}

export default PastWork