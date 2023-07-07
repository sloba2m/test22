import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import content1challenge1 from '../../assets/images/pastWorkInner/content1challenge1.svg'
import content1challenge2 from '../../assets/images/pastWorkInner/content1challenge2.svg'
import content2challenge1 from '../../assets/images/pastWorkInner/content2challenge1.svg'
import content2challenge2 from '../../assets/images/pastWorkInner/content2challenge2.svg'
import content3challenge1 from '../../assets/images/pastWorkInner/content3challenge1.svg'
import content3challenge2 from '../../assets/images/pastWorkInner/content3challenge2.svg'
import content4challenge1 from '../../assets/images/pastWorkInner/content4challenge1.svg'
import content4challenge2 from '../../assets/images/pastWorkInner/content4challenge2.svg'

import content1approach from '../../assets/images/pastWorkInner/content1approach.svg'
import content2approach from '../../assets/images/pastWorkInner/content2approach.svg'
import content3approach from '../../assets/images/pastWorkInner/content3approach.svg'
import content4approach from '../../assets/images/pastWorkInner/content4approach.svg'

import content1solution from '../../assets/images/pastWorkInner/content1solution.svg'
import content2solution from '../../assets/images/pastWorkInner/content2solution.svg'
import content3solution from '../../assets/images/pastWorkInner/content3solution.svg'
import content4solution from '../../assets/images/pastWorkInner/content4solution.svg'


import techIcon1 from '../../assets/images/pastWorkInner/tech-icon1.svg'
import techIcon2 from '../../assets/images/pastWorkInner/tech-icon2.svg'
import techIcon3 from '../../assets/images/pastWorkInner/tech-icon3.svg'
import techIcon4 from '../../assets/images/pastWorkInner/tech-icon4.svg'
import techIcon5 from '../../assets/images/pastWorkInner/tech-icon5.svg'
import techIcon6 from '../../assets/images/pastWorkInner/tech-icon6.svg'
import techIcon7 from '../../assets/images/pastWorkInner/tech-icon7.svg'
import techIcon8 from '../../assets/images/pastWorkInner/tech-icon8.svg'
import techIcon9 from '../../assets/images/pastWorkInner/tech-icon9.svg'
import techIcon10 from '../../assets/images/pastWorkInner/tech-icon10.svg'

import content1Main from '../../assets/images/pastWorkInner/content1main.svg'
import content2Main from '../../assets/images/pastWorkInner/content2main.svg'
import content3Main from '../../assets/images/pastWorkInner/content3main.svg'
import content4Main from '../../assets/images/pastWorkInner/content4main.svg'

import ArrowRight from '../../assets/images/pastWorkInner/ArrowRight.svg'

import qr from '../../assets/images/pastWorkInner/qr.svg'

import PastWork1 from '../../assets/images/pastWork/past-work-1.svg'
import PastWork2 from '../../assets/images/pastWork/past-work-2.svg'
import PastWork3 from '../../assets/images/pastWork/past-work-3.svg'
import PastWork4 from '../../assets/images/pastWork/past-work-4.svg'

import './PastWorkInner.css'
import { NavLink } from 'react-router-dom'
import FooterTop from '../../Components/FooterTop/FooterTop'

function PastWorkInner() {

    let [obj, setObj] = useState("")

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

    let content = [
        {
            key: "Elysio-Burgers",
            heroBg: "#4EBC52",
            heroImg: content1Main,
            qr: qr,
            headMain: "Increase customer reach and facilitate online ordering",
            tech: [techIcon1, techIcon2, techIcon3, techIcon4, techIcon5, techIcon6],
            visitLink: "#",
            paraChallenge: "Elysio Burgers needed to broaden their customer base and simplify the ordering process by creating an engaging and user-friendly website with an intuitive online ordering system, a visually appealing digital menu, and easy in-restaurant access to the menu via QR codes.",
            challengeImg1: content1challenge1,
            challengeImg2: content1challenge2,
            paraApproach: "Our strategy focused on creating an engaging and user-friendly website for Elysio Burgers. This involved developing an intuitive online ordering system, creating a visually appealing digital menu, implementing in-restaurant QR codes for easy menu access, and incorporating customer testimonials to boost credibility.",
            approachImg: content1approach,
            paraSolution: "We created an engaging website for Elysio Burgers featuring enticing visuals, an easy-to-use online ordering system, and a digital menu with high-quality images. We also implemented in-restaurant QR codes for easy access to the menu and showcased customer testimonials for added credibility.",
            solutionImg: content1solution,
            recent: [
                data[2],
                data[1]
            ]
        },
        {
            key: "Medical-Symmetry",
            heroBg: "#0CB8B6",
            heroImg: content2Main,
            qr: "",
            headMain: "Showcase work and provide an easy-to-use appointment booking feature",
            tech: [techIcon1, techIcon2, techIcon3, techIcon4, techIcon5, techIcon6],
            visitLink: "#",
            paraChallenge: "Improve Medical Symmetry's online presence by effectively presenting their range of services and incorporating an intuitive appointment booking system into their website.",
            challengeImg1: content2challenge1,
            challengeImg2: content2challenge2,
            paraApproach: "Our strategy focused on creating an engaging and user-friendly website for Elysio Burgers. This involved developing an intuitive online ordering system, creating a visually appealing digital menu, implementing in-restaurant QR codes for easy menu access, and incorporating customer testimonials to boost credibility.",
            approachImg: content2approach,
            paraSolution: "We created an engaging website for Elysio Burgers featuring enticing visuals, an easy-to-use online ordering system, and a digital menu with high-quality images. We also implemented in-restaurant QR codes for easy access to the menu and showcased customer testimonials for added credibility.",
            solutionImg: content2solution,
            recent: [
                data[0],
                data[2],
            ]
        },
        {
            key: "Fit-and-Delicious",
            heroBg: "#171717",
            heroImg: content3Main,
            qr: "",
            headMain: "Showcase work and provide an easy-to-use appointment booking feature",
            tech: [techIcon1, techIcon2, techIcon3, techIcon4, techIcon5, techIcon6],
            visitLink: "#",
            paraChallenge: "Brittney D., the food enthusiast behind Fit and Delicious, aimed to carve her niche in the digital space with a visually appealing website that she could update effortlessly with new recipes. The task at hand was to design an intuitive user interface that would be simple for Brittney to manage while providing a smooth browsing experience for her audience, thereby fostering engagement and repeat visits.",
            challengeImg1: content3challenge1,
            challengeImg2: content3challenge2,
            paraApproach: "Given the requirements, our strategy was to leverage the capabilities of WordPress, a renowned content management system prized for its versatility and user-friendliness. Our design efforts centered around creating a visually attractive layout that highlighted Brittney's culinary masterpieces and facilitated the straightforward addition of new recipes.",
            approachImg: content3approach,
            paraSolution: "The result was a tastefully designed website that marries functionality with aesthetics. The platform not only presents Brittney's enticing recipes through high-quality images but also ensures smooth navigation for the visitors.",
            paraSolution2: `Behind the scenes, we implemented an intuitive system that simplifies the process of adding new recipes for Brittney. A custom-made "add recipe" template further streamlines this process, enabling Brittney to invest more time in crafting delicious dishes rather than in website management.`,
            solutionImg: content3solution,
            recent: [
                data[0],
                data[1]
            ]
        },
        {
            key: "Sphere",
            heroBg: "#1682BC",
            heroImg: content4Main,
            qr: "",
            headMain: "Developing a multi-chain launchpad for leading blockchains",
            tech: [techIcon7, techIcon8, techIcon9, techIcon10, techIcon3, techIcon4],
            visitLink: "#",
            paraChallenge: "Sphere, a pioneering blockchain company, aimed to take a leap forward in the industry by developing a multi-chain launchpad that could support several major blockchains. The principal challenge was crafting a technologically advanced yet user-centric interface, enabling users to access and interact with these blockchains in a seamless and intuitive manner.",
            challengeImg1: content4challenge1,
            challengeImg2: content4challenge2,
            paraApproach: "With a focus on combining advanced technology with user-friendliness, our strategy hinged on utilizing React.js, renowned for its capability to create dynamic and responsive user interfaces, and web3, a technology instrumental in simplifying and securing blockchain interactions directly via the website.",
            approachImg: content4approach,
            paraSolution: "We delivered a robust, interactive website built using React.js, offering an engaging and smooth user experience. The interface, while aesthetically pleasing, excels in its efficiency, successfully accommodating both expert blockchain users and novices. The integration of web3 allowed users to interact securely with various supported blockchains directly on the website, taking usability and accessibility in the blockchain industry to new heights.",
            solutionImg: content4solution,
            recent: [
                data[0],
                data[1]
            ]
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [obj])

    useEffect(() => {
        let id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]
        let ob = content.find((a) => a.key === id)
        setObj(ob)
    }, [])

    return (
        obj &&
        <div className='pastWorkInner'>
            <div style={{ background: `${obj.heroBg}` }} className='hero hero-what-we-do' aria-label='Heytutor — Smart Design for online Tutoring Platform with $30M Revenue'>
                {/* <div className='overlay'></div> */}
                <Container className='text-center'>
                    <Row>
                        <Col md={12}>
                            <div className='heading text-white'>
                                <h3>{obj.key.split("-").join(" ")}</h3>
                                <h1 className='h1-large-font'>{obj.headMain}</h1>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='tech-used'>
                                <div className='heading text-white'>
                                    <h4>Technologies Used</h4>
                                </div>
                                <div className='tech-icons'>
                                    {obj.tech.map((a, i) => (
                                        <img key={`tech-${i}`} src={a} />
                                    ))}
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='img-div main-img'>
                                <div className='qr-img'>
                                    <img className='img' src={qr} />
                                </div>
                                <img className='img' src={obj.heroImg} />
                                <div className='heading'>
                                    <h3><a href='#'>Visit Elysio Burgers Website <img src={ArrowRight} /></a></h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className='section1'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h3>The Challenge</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    {obj.paraChallenge}
                                </p>
                            </div>
                            <div className='img-div'>
                                <Row>
                                    <Col xs={6}>
                                        <img src={obj.challengeImg1} alt='challenge' />
                                    </Col>
                                    <Col xs={6}>
                                        <img className='topSpace' src={obj.challengeImg1} alt='challenge' />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section1'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h3>The Approach</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    {obj.paraApproach}
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={obj.approachImg} alt='Approach' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section1'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h3>The Solution</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    {obj.paraSolution}
                                </p>
                            </div>
                            <div className='img-div low-width'>
                                <img src={obj.solutionImg} alt='solution' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='recent-work'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading text-center'>
                                <h2>Most Recent Work</h2>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='recent-work-boxes'>
                                <Row>
                                    {obj.recent.map((a, i) => (
                                        <Col key={i} md={6}>
                                            <a href={`/past-work/${a.route}`}>
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
                                            </a>
                                        </Col>
                                    ))}
                                    {/* <Col md={6}>
                                        <NavLink to='/past-work/mixmo'>
                                            <div className='past-work-box'>
                                                <div className='img-div'>
                                                    <img src={PastWork4} alt='MIXMO' />
                                                </div>
                                                <div className='text'>
                                                    <div className='heading'>
                                                        <article>
                                                            <h4>MIXMO</h4>
                                                        </article>
                                                    </div>
                                                    <div className='text-div'>
                                                        <p>
                                                            Mixmo: shaking up the music scene with a bold and colorful image
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
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

export default PastWorkInner