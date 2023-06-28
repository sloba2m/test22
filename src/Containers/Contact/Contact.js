import React, { useEffect, useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import heroImage from '../../assets/images/contact/hero-img.svg'
import Select from 'react-select';

import './Contact.css'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    const options = [
        { value: 'New Website', label: 'New Website' },
        { value: 'Site updates', label: 'Site updates' },
        { value: 'WordPress Conversion', label: 'WordPress Conversion' },
        { value: 'Optimization', label: 'Optimization' },
        { value: 'Branding', label: 'Branding' },
        { value: 'SEO', label: 'SEO' },
        { value: 'Support', label: 'Support' },
        { value: 'Multi-device compatibility', label: 'Multi-device compatibility' }
    ];

    return (
        <div className='contact'>
            <div className='hero-home'>
                <Container className='text-center'>
                    <Row>
                        <Col md={8}>
                            <div className='heading'>
<<<<<<< HEAD
                                <h1 className='before-after'><span>How Can We Assist You?</span></h1>
=======
                                <h1 className='before-after'>We would love to hear from you.<span> Get in touch.</span><br />
                                    </h1>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
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
                                    <input required type='text' placeholder='Your name' />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='input-div'>
<<<<<<< HEAD
                                    <label>Your mail</label>
                                    <input required type='text' placeholder='Your mail' />
=======
                                    <label>Your e-mail</label>
                                    <input type='text' placeholder='Your e-mail' />
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='input-div'>
<<<<<<< HEAD
                                    <label>What you are interested</label>
                                    <Select
                                        isMulti
                                        options={options}
                                        value={selectedOptions}
                                        onChange={handleChange}
                                        classNamePrefix="custom-select"
                                        className="custom-select-container"
                                    />
=======
                                    <label>What you are interested in</label>
                                    <select>
                                        <option>New Website</option>
                                        <option>Website updates</option>
                                        <option>WordPress Conversion</option>
                                        <option>Optimization</option>
                                        <option>Branding</option>
                                        <option>Search Engine Optimization (SEO)</option>
                                        <option>Website Support</option>
                                        <option>Multi-device compatibility</option>
                                    </select>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='input-div'>
                                    <label>Project budget</label>
<<<<<<< HEAD
                                    <input type='text' placeholder='Select your budget' />
=======
                                    <input type='text' placeholder='Your projects budget' />
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='input-div'>
                                    <label>Other important information</label>
<<<<<<< HEAD
                                    <textarea placeholder="Let's tell us know what about your project"></textarea>
=======
                                    <textarea placeholder="Any other information you want to tell us related to your project"></textarea>
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
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
                                <h2>Our Popular Inquiries</h2>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className='accord-main'>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Does your agency provide comprehensive services covering all aspects of web design and development?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            While we don't cover all aspects of web design, our core service offering focuses on designing, building, optimizing, and supporting custom websites. We specialize in both WordPress development and traditional code-based solutions. From initial design and development to ongoing support, we deliver tailored soluti ons that align with your specific requirements. Our expertise in custom web design allows us to create unique and optimized websites to enhance your online presence.
=======
                                        While we don't cover all aspects of web design, our core service offering focuses on designing, building, optimizing, and supporting custom websites. We specialize in both WordPress development and traditional code-based solutions. From initial design and development to ongoing support, we deliver tailored solutions that align with your specific requirements. Our expertise in custom web design allows us to create unique and optimized websites to enhance your online presence.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>How experienced is your web design team?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            Our web design team is highly experienced and skilled in various technologies and platforms. We have a diverse team of designers and developers who specialize in code-based development (React.js and Node.js) as well as WordPress. Collectively, our team has several years of experience in the industry, working on numerous successful projects.
=======
                                        Our web design team is highly experienced and skilled in various technologies and platforms. We have a diverse team of designers and developers who specialize in code-based development (React.js and Node.js) as well as WordPress. Collectively, our team has several years of experience in the industry, working on numerous successful projects.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How long does it typically take to complete a website project?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            The timeline for completing a website project depends on its complexity and scope. A simple website with basic features may take a few weeks, while a more complex project could take several months. During the initial consultation, we assess your requirements and provide you with an estimated timeline for your specific project.
=======
                                        The timeline for completing a website project depends on its complexity and scope. A simple website with basic features may take a few weeks, while a more complex project could take several months. During the initial consultation, we assess your requirements and provide you with an estimated timeline for your specific project.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is the cost of web design services?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            The cost of our web design services varies depending on the project's complexity, features, and requirements. We offer customized solutions tailored to each client's needs, so pricing is determined on a per-project basis. We provide detailed proposals and cost breakdowns after discussing your specific requirements during the consultation process.
=======
                                        The cost of our web design services varies depending on the project's complexity, features, and requirements. We offer customized solutions tailored to each client's needs, so pricing is determined on a per-project basis. We provide detailed proposals and cost breakdowns after discussing your specific requirements during the consultation process.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Do you offer website maintenance and updates after the initial design?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            Yes, we offer website maintenance and updates as part of our services. We understand the importance of keeping your website up to date and functioning smoothly. We provide ongoing support to ensure your website remains secure, performs well, and stays current with the latest technologies.
=======
                                        Yes, we offer website maintenance and updates as part of our services. We understand the importance of keeping your website up to date and functioning smoothly. We provide ongoing support to ensure your website remains secure, performs well, and stays current with the latest technologies.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Can you assist with e-commerce website development?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            Absolutely! We specialize in e-commerce website development. Our team can create custom online stores using various platforms, including code-based solutions like React.js and Node.js, as well as popular e-commerce platforms like WooCommerce for WordPress. We tailor the solution to meet your specific requirements and help you establish a successful online presence.
=======
                                        Absolutely! We specialize in e-commerce website development. Our team can create custom online stores using various platforms, including code-based solutions like React.js and Node.js, as well as popular e-commerce platforms like WooCommerce for WordPress. We tailor the solution to meet your specific requirements and help you establish a successful online presence.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Do you provide ongoing support and customer service?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            Yes, we provide ongoing support and customer service to ensure your satisfaction. We are dedicated to maintaining a long-term relationship with our clients and assisting them whenever needed. Whether it's addressing technical issues, providing updates, or answering questions, our team is here to support you.
=======
                                        Yes, we provide ongoing support and customer service to ensure your satisfaction. We are dedicated to maintaining a long-term relationship with our clients and assisting them whenever needed. Whether it's addressing technical issues, providing updates, or answering questions, our team is here to support you.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Can you help with website hosting and domain registration?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            Absolutely! We offer website hosting and domain registration services. We can help you choose the right hosting solution and register your domain, ensuring a seamless setup for your website. We also provide ongoing management and support for hosting-related issues.
=======
                                        Absolutely! We offer website hosting and domain registration services. We can help you choose the right hosting solution and register your domain, ensuring a seamless setup for your website. We also provide ongoing management and support for hosting-related issues.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>How can I get started with your web design services?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            To get started with our web design services, simply reach out to us through our website or contact information. We'll schedule an initial consultation to discuss your project requirements, goals, and timeline. From there, we'll provide you with a detailed proposal outlining our recommended solutions and associated costs.
=======
                                        To get started with our web design services, simply reach out to us through our website or contact information. We'll schedule an initial consultation to discuss your project requirements, goals, and timeline. From there, we'll provide you with a detailed proposal outlining our recommended solutions and associated costs.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header>Spurs or Lakers?</Accordion.Header>
                                        <Accordion.Body>
<<<<<<< HEAD
                                            As someone who was born in California and found great joy in witnessing the remarkable Kobe and Shaq era with the Lakers, I have since relocated to San Antonio in 2013 and developed a profound admiration for the Spurs. In fact, I even purchased season tickets last season, thoroughly relishing every moment of the Spurs' performance. I am eagerly looking forward to the future with the highly anticipated #1 draft pick, Victor Wembanyama, and the promising prospects that lie ahead for the Spurs organization.
=======
                                        As someone who was born in California and found great joy in witnessing the remarkable Kobe and Shaq era with the Lakers, I have since relocated to San Antonio in 2013 and developed a profound admiration for the Spurs. In fact, I even purchased season tickets last season, thoroughly relishing every moment of the Spurs' performance. I am eagerly looking forward to the future with the highly anticipated #1 draft pick, Victor Wembanyama, and the promising prospects that lie ahead for the Spurs organization.
>>>>>>> d816b66379a3deb7b2e8deeb16289c0b822ccbd3
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