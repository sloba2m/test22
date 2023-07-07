import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PastWork1 from '../../assets/images/pastWork/past-work-1.svg'
import PastWork2 from '../../assets/images/pastWork/past-work-2.svg'
import PastWork3 from '../../assets/images/pastWork/past-work-3.svg'
import PastWork4 from '../../assets/images/pastWork/past-work-4.svg'
import FooterTop from '../../Components/FooterTop/FooterTop'
import { NavLink } from 'react-router-dom'

import './PastWork.css'

function PastWork() {

  let [data, setData] = useState([
    {
      heading: "Elysio Burgers",
      para: "Increase customer reach and facilitate online ordering",
      img: PastWork1,
      route: "Elysio-Burgers"
    },
    {
      heading: "Medical Symmetry",
      para: "Boosted online presence by showcasing their range of services and integrating a user-friendly appointment booking system.",
      img: PastWork2,
      route: "Medical-Symmetry"
    },
    {
      heading: "Fit and Delicious",
      para: "Creating a visually appealing and easily updatable WordPress website",
      img: PastWork3,
      route: "Fit-and-Delicious"
    },
    {
      heading: "Sphere",
      para: "Developing a multi-chain launchpad for leading blockchains",
      img: PastWork4,
      route: "Sphere"
    },
  ])

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
            {data.map((a, i) => (
              <Col key={i} sm={6}>
                <NavLink to={`/past-work/${a.route}`}>
                  <div className='past-work-box'>
                    <div className='img-div'>
                      <img src={a.img} alt={a.heading} />
                    </div>
                    <div className='text'>
                      <div className='heading'>
                        <article>
                          <h4>{a.heading}</h4>
                        </article>
                      </div>
                      <div className='text-div'>
                        <p>
                          {a.para}
                        </p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <FooterTop />
    </div>
  )
}

export default PastWork