import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import section1Image from '../../assets/images/pastWorkInner/Laptop.png'
import section2Image from '../../assets/images/pastWorkInner/heyTutor.png'
import section3Image from '../../assets/images/pastWorkInner/clientsresults.png'
import section6Image from '../../assets/images/pastWorkInner/competitiveAnalysis.png'

import section7Image1 from '../../assets/images/pastWorkInner/Archetypical-personas-1.png'
import section7Image2 from '../../assets/images/pastWorkInner/Archetypical-personas-2.png'

import section8Image from '../../assets/images/pastWorkInner/leading-digital.png'

import section10Image1 from '../../assets/images/pastWorkInner/cap-concept-1.png'
import section10Image2 from '../../assets/images/pastWorkInner/cap-concept-2.png'

import section11Image from '../../assets/images/pastWorkInner/web-designing.png'


import PastWork3 from '../../assets/images/pastWork/past-work-3.png'
import PastWork4 from '../../assets/images/pastWork/past-work-4.png'

import './PastWorkInner.css'
import { NavLink } from 'react-router-dom'
import FooterTop from '../../Components/FooterTop/FooterTop'

function PastWorkInner() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className='pastWorkInner'>
            <div className='hero hero-what-we-do' aria-label='Heytutor — Smart Design for online Tutoring Platform with $30M Revenue'>
                <div className='overlay'></div>
                <Container className='text-center'>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h1 className='h1-large-font'>Heytutor — Smart Design for online Tutoring Platform with $30M Revenue</h1>
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
                                <h3>About the project</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    HeyTutor is an online platform that establishes effective communication between tutors, students, and knowledge centers. Based on particular learning needs and preferences, tutees worldwide can find suitable educators to fill gaps in various niches. To get such a “smart match,” tutors can create custom profiles, set their own rates and policies, and browse for nearby jobs. After each session, educators are reviewed by HeyTutor, which enables the online platform to increase efficiency and drive even more positive results from the learning process.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section1Image} alt='About the project' />
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
                                <h3>Online edtech industry</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    According to <span>Straits Research</span>, the availability of free content has made online learning more accessible than ever before, creating a unique opportunity for edtech companies to capitalize on this trend. In 2021, the online education market reached a value of $30.6 billion and is projected to grow at a CAGR of 23.12% to reach $198.9 billion by 2030.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section2Image} alt='Online edtech industry' />
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
                                <h3>Client’s results</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    HeyTutor also actively participates in developing the educational edtech industry, popularizing fun, efficient, and stress-free study. As expected, many users adore the HeyTutor platform, which results in a constantly growing income and astonishing numbers of happy students and tutors across the globe.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section3Image} alt='Client’s results' />
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
                                <h3>Client’s results</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    In light of technological advancements and competitive market conditions, the client recognized the need to improve their business through contemporary design and brand solutions. In short, the platform’s goals can be described as follows:
                                </p>
                            </div>
                            <div className='list-div'>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className='list'>
                                            <div className='text-div'>
                                                <p>
                                                    Designing easy-to-navigate pages for tutors to conveniently register on the platform, manage profiles, and provide their study services smoothly and without difficulties.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='list'>
                                            <div className='text-div'>
                                                <p>
                                                    Enhancing the brand’s overall image and perception by staying updated with the latest design trends and incorporating ideas of fun, fast, and efficient study.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className='list list2'>
                                            <div className='text-div'>
                                                <p>
                                                    Gaining a competitive edge and attracting new customers through efficient design techniques and modern brand identity.
                                                </p>
                                            </div>
                                        </div>
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
                                <h3>Project lineup</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    To effectively manage resources, we identified the essential tasks that our team must prioritize. These are the sections we needed to design:
                                </p>
                            </div>
                            <div className='list-div'>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <div className='list'>
                                            <div className='text-div'>
                                                <p>
                                                    Tutor’s pages, such as “Tutoring Jobs Near Me” and “Tutor Sign Up Flow”, to assist with the management and organization of the studying process.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='list'>
                                            <div className='text-div'>
                                                <p>
                                                    Convenient “Contact Us” form to help the client improve their customer service by gathering valuable data.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <div className='list'>
                                            <div className='text-div'>
                                                <p>
                                                    “Landing Page Curriculum” and “Subject Landing Page” to let tutees plan their study time, making learning more productive and pleasant..
                                                </p>
                                            </div>
                                        </div>
                                        <div className='list'>
                                            <div className='text-div'>
                                                <p>
                                                    Visually engaging animation for the main page that highlights the essential sections of the site.
                                                </p>
                                            </div>
                                        </div>
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
                                <h3>Competitive analysis</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    To identify the optimal practices in designing edtech websites, we deeply analyzed the strengths and weaknesses of HeyTutor’s main competitors. Our team implemented the best features of competitors’ sites, such as attractive photos, high-quality videos, and large typography, but upgraded everything with our own creative touch.
                                    <br />
                                    <br />
                                    At the same time, we paid attention to the issues of similar tutoring platforms: insufficient indentation between blocks, monotonous graphic elements, low contrast, poorly used colors, and unclear hierarchy of accents. By acknowledging these flaws, our team drew a project plan and moved to the next step of our design journey — depicting HeyTutor’s archetypical users.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section6Image} alt='Competitive analysis' />
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
                                <h3>Archetypical personas</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    Without a doubt, HeyTutor’s “typical” user is a young person studying or working in school, college, or university. They are passionate about the latest technologies and strive to improve skills and knowledge crucial to their occupation. Because of a busy schedule and active social life, these users need a flexible and convenient platform to study or work without wasting time and energy. Being aware of their worth, these personas prefer learning and teaching at their own pace, so an innovative edtech platform is precisely what the “classic” HeyTutor users need.
                                    <br />
                                    <br />
                                    Having pointed out all highlighted details of the HeyTutor’s archetypical personas, our team built a user flow map tailored to their wishes and expectations. It helped us ensure that tutees and tutors could easily navigate through the site and achieve their goals while having a fun and productive study time.
                                </p>
                            </div>
                            <div className='img-div'>
                                <Row>
                                    <Col xs={6}>
                                        <img src={section7Image1} alt='Archetypical personas' />
                                    </Col>
                                    <Col xs={6}>
                                        <img className='topSpace' src={section7Image2} alt='Archetypical personas' />
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
                                <h3>Archetypical personas</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    To guide the visual direction of the platform, our design team also created a mood board. Upon analysis, we found out that the mix of cold and warm colors, including blue, mint, and pink, is our best choice as it conveys the hospitality of HeyTutor’s teaching approach. Most of these colors are soft, striving to create a calm aesthetic, so our team added such a palette to the mood board, enhancing it with some extra details. Along with light colors, we chose graphic elements, contrasting gradients, and inserts that look like school supplies, reminding tutees and tutors that study should be interactive and engaging.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section8Image} alt='Archetypical personas' />
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
                                <h3>Vibrant identity for a fun study</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    To attract the target audience, we created a distinctive and memorable brand identity that would set HeyTutor apart from competitors. Our primary focus was revealing a core platform concept — joyful, fast, and smart studying. Our team wanted to create a visually appealing website, so we incorporated graphic elements such as hand-drawn lines, arrows, varied shapes, and minimalist icons. These details helped break up the monotony of the page, making it more attractive to users while emphasizing key content and information.
                                    <br />
                                    <br />
                                    To avoid clutter and create an open and effortless design, our team decided to move on with color contrast, differentiating content blocks and emphasizing specific sections. In opposition to the light white & greyish background, we added pastel corn, lavender, mint, sky, and baby pink colors. Through the pleasant color dissimilarity between the “classic” backdrop and diverse playful tones, we brought a touch of vibrancy and life to the design.
                                </p>
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
                                <h3>Academic cap concept</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    At the heart of HeyTutor's mission is the goal of making learning accessible, intuitive, and enjoyable. To reflect this ethos, we presented HeyTutor's logo as an academic cap, which is commonly associated with education and learning. Its color scheme incorporates shades of light and dark purple, which stands for creativity, wisdom, and loyalty, aesthetically matching the logo’s classic book printing font.
                                    <br />
                                    <br />
                                    The use of purple in the symbol is also consistent with the overall brand identity, which highlights a palette of warm, inviting colors that promote a fun and productive study environment. Overall, the design of the logo and pictorial mark effectively convey HeyTutor’s mission to provide a smart and intuitive online tutoring platform.
                                </p>
                            </div>
                            <div className='img-div'>
                                <Row>
                                    <Col xs={6}>
                                        <img className='topSpace' src={section10Image1} alt='Academic cap concept' />
                                    </Col>
                                    <Col xs={6}>
                                        <img src={section10Image2} alt='Academic cap concept' />
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
                                <h3>Academic cap concept</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    This collaboration left us with a memorable experience and positive feelings only. Putting every effort into this project, our team conducted deep and comprehensive competitive research, designed an eye-catching and convenient website, created a unique contrasting color palette, restyled the logotype, and structured all essential content. Ultimately, our team helped HeyTutor to get a colorful brand identity, stand out from the competitors, and make even more tutees and tutors fall in love with this innovative edtech platform.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section11Image} alt='Academic cap concept' />
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
                                    <Col md={6}>
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
                                    <Col md={6}>
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