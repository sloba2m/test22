import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Service1Icon from '../../assets/images/home/service1.svg'
import Service2Icon from '../../assets/images/home/service2.svg'
import Service3Icon from '../../assets/images/home/service3.svg'
import Service4Icon from '../../assets/images/home/service4.svg'
import Service5Icon from '../../assets/images/home/service5.svg'
import Service6Icon from '../../assets/images/home/service6.svg'
import Service7Icon from '../../assets/images/home/service7.svg'
import Service8Icon from '../../assets/images/home/service8.svg'
import Service9Icon from '../../assets/images/home/service9.svg'
import ServiceSeeAll from '../../assets/images/home/see-all-icon.png'
import section3Img from '../../assets/images/home/section-3-img.svg'
import reviewPerson from '../../assets/images/home/review-person.svg'

import './Home.css'
import FooterTop from '../../Components/FooterTop/FooterTop'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'

function Home() {

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='homepage'>
      <div className='hero hero-home text-center'>
        {/* <Slider pauseOnHover={false} autoplay={true} autoplaySpeed={3000} {...settings2}> */}
          <Container className='text-center'>
            <Row>
              <Col md={12}>
                <div className='heading'>
                  <h1 className='before-after'><span>Pixel Infinity:</span> effective problem solvers; bringing real world value to your website</h1>
                </div>

                <div className='btn-div'>
                  <div className='btn-gradient-border'>
                    <NavLink to="/contact">
                      <button>LET’S TALK</button>
                    </NavLink>
                  </div>
                  <div className='btn-gradient-border'>
                    <NavLink to="/what-we-do">
                      <button>ABOUT US</button>
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          {/* <Container className='text-center'>
            <Row>
              <Col md={12}>
                <div className='heading'>
                  <h1 className='before-after'><span>Pixel Infinity:</span> effective problem solvers; bringing real world value to your website</h1>
                </div>

                <div className='btn-div'>
                  <div className='btn-gradient-border'>
                    <NavLink to="/contact">
                      <button>LET’S TALK</button>
                    </NavLink>
                  </div>
                  <div className='btn-gradient-border'>
                    <NavLink to="/what-we-do">
                      <button>ABOUT US</button>
                    </NavLink>
                  </div>
                </div>
              </Col>
            </Row>
          </Container> */}
        {/* </Slider> */}
      </div>

      <section className='home-sec-1'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='heading text-center'>
                <h2>Our Process</h2>
              </div>
            </Col>
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
                            <article>
                              <h4>Consultation and Requirement Gathering</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Discovery and Analysis</li>
                              <li>Crafting User-Centric Design</li>
                              <li>Defining Project Scope</li>
                              <li>Visualizing Concepts</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Design Concept and Mockups</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Visualizing Your Vision</li>
                              <li>Inspiring Visual Language</li>
                              <li>Structuring the Blueprint</li>
                              <li>Bringing Design to Life</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Custom Design and Development</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Front-End Development</li>
                              <li>Responsive Design</li>
                              <li>Content Integration and Interactive Functionality</li>
                              <li>Testing, Optimization, and Deployment</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Content Integration</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Code Craftsmanship</li>
                              <li>Adapting to All Screens</li>
                              <li>Seamless Integration and Engaging Interactions</li>
                              <li>Testing, Optimizing, and Launching</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Responsive Design</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Dynamic Grids</li>
                              <li>Customized Styles</li>
                              <li>Adapting Visuals</li>
                              <li>User-Friendly Experience</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Functionality and Features</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Feature Identification</li>
                              <li>Planning, Design, and Integration</li>
                              <li>Custom Development</li>
                              <li>Testing, UX Considerations, Documentation, and Support</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Testing and Quality Assurance</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Unveiling the Possibilities</li>
                              <li>Strategic Planning and Seamless Integration</li>
                              <li>Tailored Solutions</li>
                              <li>Ensuring Excellence</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Deployment and Launch</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Setting the Stage</li>
                              <li>Secure Transfers and Dynamic Foundations</li>
                              <li>Domain Alignment and Final Checks</li>
                              <li>Speed and Efficiency</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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
                            <article>
                              <h4>Ongoing Support and Maintenance</h4>
                            </article>
                          </div>
                          <div className='text-div'>
                            <ul>
                              <li>Reliable Support and Issue Resolution</li>
                              <li>Safeguarding Stability</li>
                              <li>Driving Efficiency</li>
                              <li>Content Care and Expert Guidance</li>
                            </ul>
                            <span>
                              LEARN MORE
                            </span>
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

      <section className='home-sec-2'>
        <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <div className='heading'>
                <h4>San Antonio, Texas:</h4>
                <h1>
                  Where <span className='span-2'>stunning</span> custom <span className='span-2'>websites</span> are born.
                </h1>
              </div>
              <div className='text-div'>
                <p>
                  Pixel Infinity is a leading digital agency in San Antonio, empowering businesses with our digital expertise. Our dedicated team is fueled by a passion for excellence and a commitment to delivering results.
                </p>
              </div>
              <div className='btn-div '>
                <div className='btn-gradient-border'>
                  <NavLink to="/contact">
                    <button>Get Started</button>
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='image-div text-right'>
                <img src={section3Img} alt='Where stunning custom websites are born' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='home-sec-3'>
        <div className='abs-bg'></div>
        <Container>
          <Row>
            <Col md={12}>
              <Slider {...settings}>
                <div>
                  <div className='reviewMain'>
                    <div className='img-div'>
                      <img src={reviewPerson} alt='Brittney DeZonia' />
                      <div className='heading'>
                        <h4>Brittney DeZonia</h4>
                      </div>
                      <p>Founder of Fitandelicious.com</p>
                    </div>
                    <div className='text-div'>
                      <p>Pixel Infinity is a leading digital agency in San Antonio, empowering businesses with our digital expertise. Our dedicated team is fueled by a passion for excellence and a commitment to delivering results. From website design and development to digital marketing strategies, we tailor our services to your unique needs, helping you succeed in the competitive digital landscape.</p>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <div className='reviewMain'>
                    <div className='img-div'>
                      <img src={reviewPerson} alt='Brittney DeZonia' />
                      <div className='heading'>
                        <h4>Brittney DeZonia</h4>
                      </div>
                      <p>Founder of Fitandelicious.com</p>
                    </div>
                    <div className='text-div'>
                      <p>Pixel Infinity is a leading digital agency in San Antonio, empowering businesses with our digital expertise. Our dedicated team is fueled by a passion for excellence and a commitment to delivering results. From website design and development to digital marketing strategies, we tailor our services to your unique needs, helping you succeed in the competitive digital landscape.</p>
                    </div>
                  </div>
                </div> */}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <FooterTop />
    </div>
  )
}

export default Home