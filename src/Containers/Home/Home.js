import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Service1Icon from '../../assets/images/home/service1.png'
import Service2Icon from '../../assets/images/home/service2.png'
import Service3Icon from '../../assets/images/home/service3.png'
import Service4Icon from '../../assets/images/home/service4.png'
import Service5Icon from '../../assets/images/home/service5.png'
import Service6Icon from '../../assets/images/home/service5.png'
import Service7Icon from '../../assets/images/home/service5.png'
import Service8Icon from '../../assets/images/home/service5.png'
import Service9Icon from '../../assets/images/home/service5.png'
import ServiceSeeAll from '../../assets/images/home/see-all-icon.png'
import section3Img from '../../assets/images/home/section-3-img.png'
import reviewPerson from '../../assets/images/home/review-person.png'

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='homepage'>
      <div className='hero hero-home'>
        <Container className='text-center'>
          <Row>
            <Col md={12}>
              <div className='heading'>
                <h1 className='before-after'><span>Pixel Infinity:</span> effective problem solvers; bringing real world value to your website</h1>
              </div>

              <div className='btn-div'>
                <div className='btn-gradient-border'>
                  <button>LET’S TALK</button>
                </div>
                <div className='btn-gradient-border'>
                  <button>ABOUT US</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className='home-sec-1 text-center'>
        <Container>
          <Row>
            <Col md={12}>
              <div className='heading'>
                <h2>Our Process</h2>
              </div>
            </Col>
            <Col md={12}>
              <div className='service-main'>
                <Row>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service1Icon} alt='Consultation and Requirement Gathering' />
                        </div>
                        <div className='heading'>
                          <h4>Consultation and Requirement Gathering</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            Our team provides professional creative solutions for visual communication, using innovative strategies to solve problems and deliver impactful results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service2Icon} alt='DESIGN' />
                        </div>
                        <div className='heading'>
                          <h4>Design Concept and Mockups</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            Based on your requirements and branding guidelines, the web design team will create design concepts and mockups for your website. These will showcase the visual elements, layout, and overall user experience. You'll have the opportunity to review and provide feedback to refine the design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service3Icon} alt='Develop' />
                        </div>
                        <div className='heading'>
                          <h4>Custom Design and Development</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            Once the design concept is approved, the web design team will proceed with the actual design and development of the website. This involves converting the design into HTML/CSS or using a CMS like WordPress to create the website's structure, pages, and navigation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service4Icon} alt='Optimize' />
                        </div>
                        <div className='heading'>
                          <h4>Content Integration</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            The web design business will help you integrate your content, such as text, images, videos, and other media, into the website. They will ensure that the content is properly formatted, optimized, and aligned with the design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service5Icon} alt='Maintenance' />
                        </div>
                        <div className='heading'>
                          <h4>Responsive Design</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            A professional web design business will ensure that your website is responsive, meaning it adapts to different screen sizes and devices, providing an optimal user experience on desktops, laptops, tablets, and smartphones.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service6Icon} alt='Maintenance' />
                        </div>
                        <div className='heading'>
                          <h4>Functionality and Features</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            Depending on your requirements, the web design business can incorporate various functionality and features into your website, such as contact forms, social media integration, e-commerce capabilities, content management systems, blog sections, and more.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service7Icon} alt='Maintenance' />
                        </div>
                        <div className='heading'>
                          <h4>Testing and Quality Assurance</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            The web design team will conduct thorough testing to ensure that the website functions properly across different browsers, devices, and screen resolutions. They will check for any bugs, broken links, or compatibility issues and make necessary adjustments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service8Icon} alt='Maintenance' />
                        </div>
                        <div className='heading'>
                          <h4>Deployment and Launch</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            Once the website is fully developed and tested, the web design business will assist with the deployment process, helping you choose a hosting provider and configuring the website to go live. They will ensure that all necessary technical requirements are met for a successful launch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className='service-border-div'>
                      <div className='service-div'>
                        <div className='icon-div'>
                          <img src={Service9Icon} alt='Maintenance' />
                        </div>
                        <div className='heading'>
                          <h4>Ongoing Support and Maintenance</h4>
                        </div>
                        <div className='text-div text-center'>
                          <p>
                            Some web design businesses offer ongoing support and maintenance services, providing assistance with updates, security, backups, and resolving any issues that may arise after the website is launched.
                          </p>
                        </div>
                      </div>
                    </div>
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