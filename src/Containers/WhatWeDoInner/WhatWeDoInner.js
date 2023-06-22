import React, { useEffect, useState } from 'react'


import PastWork3 from '../../assets/images/pastWork/past-work-3.png'
import PastWork4 from '../../assets/images/pastWork/past-work-4.png'

import { Col, Container, Row } from 'react-bootstrap'

import './WhatWeDoInner.css'
import { NavLink } from 'react-router-dom'
import FooterTop from '../../Components/FooterTop/FooterTop'

let data = [
    {
        id: "Consultation-and-Requirement-Gathering",
        name: "Consultation and Requirement Gathering",
        mainICon: require('../../assets/images/whatWeDoInner/Consultation.png'),
        arr: [
            {
                name: "Initial Meeting",
                para: "A meeting or call is scheduled to discuss your project, including your business, goals, target audience, branding, competitors, and specific website requirements.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Initial Meeting.png")
            },
            {
                name: "Objectives and User Experience Research",
                para: "The web design team goes deeper into understanding your website objectives, such as generating leads or building brand awareness. They conduct user experience research to ensure a website that resonates with your target audience.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Objectives.png")
            },
            {
                name: "Defining Scope and Deliverables",
                para: "Based on the gathered information, the web design business helps define the project's scope, including the number of pages, desired features, content requirements, timeline, and budget.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Defining.png")
            },
            {
                name: "Wireframing, Prototyping, and Branding Assets",
                para: "Wireframes or prototypes may be created to visualize the website's structure, and branding assets like logos and color palettes are gathered. These steps help align the design with your brand identity and facilitate feedback for revisions.",
                para2: "The thorough consultation and requirements gathering process aims to understand your needs, align expectations, and set the stage for a successful web design project.",
                icon: require("../../assets/images/whatWeDoInner/Wireframing.png")
            },
        ]
    },
    {
        id: "Design-Concept-and-Mockups",
        name: "Design Concept and Mockup",
        mainICon: require('../../assets/images/whatWeDoInner/Design.png'),
        arr: [
            {
                name: "Design Brief and Research",
                para: "The web design team reviews gathered information and your preferences to understand the visual direction and style that represents your brand.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Design Brief.png")
            },
            {
                name: "Moodboards and Visual Inspiration",
                para: "Moodboards are created to capture the desired look and feel, establishing a shared visual language and serving as a reference point.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Moodboards.png")
            },
            {
                name: "Wireframes or Sketches",
                para: "Wireframes or sketches outline the website's layout and structure, focusing on hierarchy rather than visual design.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Wireframes.png")
            },
            {
                name: "Design Concepts",
                para: "Wireframes or prototypes may be created to visualize the website's structure, and branding assets like logos and color palettes are gathered. These steps help align the design with your brand identity and facilitate feedback for revisions.",
                para2: "The collaborative process aims to create a design that aligns with your vision, brand identity, and target audience, ensuring that the final design accurately captures your requirements and expectations.",
                icon: require("../../assets/images/whatWeDoInner/Design Concepts.png")
            },
        ]
    },
    {
        id: "Custom-Design-and-Development",
        name: "Custom Design and Development",
        mainICon: require('../../assets/images/whatWeDoInner/Custom Design.png'),
        arr: [
            {
                name: "Front-End Development",
                para: "The approved design concepts are transformed into HTML, CSS, and JavaScript code, ensuring accurate implementation and compatibility across browsers and devices.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/front-end development.png")
            },
            {
                name: "Responsive Design",
                para: "The website is made responsive, adapting to different screen sizes through responsive design techniques and CSS media queries.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Responsive Design.png")
            },
            {
                name: "Content Integration and Interactive Functionality",
                para: "Content is integrated into the website, and interactive features are implemented using HTML, CSS, and JavaScript. Custom animations and functionality like forms and sliders may be added.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Content Integration.png")
            },
            {
                name: "Testing, Optimization, and Deployment",
                para: "Wireframes or prototypes may be created to visualize the website's structure, and branding assets like logos and color palettes are gathered. These steps help align the design with your brand identity and facilitate feedback for revisions.",
                para2: "Close collaboration, communication, and feedback between you and the web design team are crucial throughout the custom design and development phase to ensure a final website that meets your expectations.",
                icon: require("../../assets/images/whatWeDoInner/Testing.png")
            },
        ]
    },
    {
        id: "Content-Integration",
        name: "Content Integration",
        mainICon: require('../../assets/images/whatWeDoInner/Content Integration main.png'),
        arr: [
            {
                name: "Content Assessment and Formatting",
                para: "The web design business reviews and assesses the provided content, assisting in formatting it for consistency and alignment with the design. They optimize the content for web delivery.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Content Assessment.png")
            },
            {
                name: "Page Creation",
                para: "The necessary pages are created based on the website's structure, integrating the content into designated sections. Headings, paragraphs, images, and other media elements are added as per the design.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Page Creation.png")
            },
            {
                name: "SEO Considerations",
                para: "Guidance may be provided on optimizing the content for search engine visibility, including keyword incorporation, meta titles, descriptions, heading tags, and search engine-friendly structuring.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/SEO Considerations.png")
            },
            {
                name: "CMS Integration, Navigation, and Validation",
                para: "If a CMS platform is used, the content is integrated, and navigation menus and internal links are set up. Content validation is performed to ensure accurate display and alignment across devices. Multilingual support is addressed if necessary.",
                para2: "Effective communication and collaboration with the web design team, along with well-organized and high-quality content, contribute to a seamless integration process and a cohesive, engaging website.",
                icon: require("../../assets/images/whatWeDoInner/CMS Integration.png")
            },
        ]
    },
    {
        id: "Responsive-Design",
        name: "Responsive Design",
        mainICon: require('../../assets/images/whatWeDoInner/Responsive Design main.png'),
        arr: [
            {
                name: "Fluid Grid Layout",
                para: "Responsive design uses a fluid grid layout that adapts to different screen sizes by using proportional units instead of fixed-width elements.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Fluid Grid Layout.png")
            },
            {
                name: "Media Queries",
                para: "CSS media queries are used to apply different styles based on device characteristics, allowing for breakpoints and customized layouts for different screen sizes.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Media Queries.png")
            },
            {
                name: "Flexible Images",
                para: "Images are made responsive by using CSS techniques that allow them to scale and adapt to different screen sizes without causing layout issues.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Flexible Images.png")
            },
            {
                name: "Responsive Typography and Navigation",
                para: "Typography is adjusted using relative units for legibility, and navigation is optimized for smaller screens with collapsible menus or responsive navigation patterns.",
                para2: "Implementing responsive design ensures an optimal user experience on various devices, and thorough testing and iteration are conducted to address any layout or usability issues that may arise.",
                icon: require("../../assets/images/whatWeDoInner/Responsive Typography.png")
            },
        ]
    },
    {
        id: "Functionality-and-Features",
        name: "Functionality and Features",
        mainICon: require('../../assets/images/whatWeDoInner/Functionality and Features.png'),
        arr: [
            {
                name: "Feature Identification",
                para: "The web design team collaborates with you to identify the specific functionalities and features required for your website based on business goals and user requirements.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Feature Identification.png")
            },
            {
                name: "Planning, Design, and Integration",
                para: "Features are planned and designed, considering the website's structure and user interface. Development and integration are carried out, including writing code, configuring plugins, and integrating third-party services if needed.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Planning.png")
            },
            {
                name: "Custom Development",
                para: "Custom solutions are developed for unique or complex functionalities that are not readily available. This involves writing custom code or scripts to meet specific requirements and enhance website functionality.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Custom Development.png")
            },
            {
                name: "Testing, UX Considerations, Documentation, and Support",
                para: "Thorough testing is conducted to ensure functionality and reliability. User experience aspects are considered, and documentation or training materials may be provided. Ongoing support and maintenance services are available for bug fixes, updates, and technical assistance.",
                para2: "The web design team's collaboration throughout the process aims to ensure that the implemented functionalities meet your requirements and enhance the overall user experience of your website.",
                icon: require("../../assets/images/whatWeDoInner/Testing, UX.png")
            },
        ]
    },
    {
        id: "Testing-and-Quality-Assurance",
        name: "Testing and Quality Assurance",
        mainICon: require('../../assets/images/whatWeDoInner/Testing and Quality Assurance.png'),
        arr: [
            {
                name: "Test Planning",
                para: "Manual testing is conducted to validate functionality and user experience, while compatibility testing ensures the website works across different browsers, devices, operating systems, and internet connection speeds.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Test Planning.png")
            },
            {
                name: "Manual and Compatibility Testing",
                para: "Manual testing is conducted to validate functionality and user experience, while compatibility testing ensures the website works across different browsers, devices, operating systems, and internet connection speeds.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Manual and Compatibility Testing.png")
            },
            {
                name: "Usability and Performance Testing",
                para: "Usability testing assesses the website's ease of use and navigation, while performance testing evaluates speed and responsiveness. Adjustments are made to enhance usability and optimize performance.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Usability and Performance Testing.png")
            },
            {
                name: "Security Testing and Bug Resolution",
                para: "Security testing identifies vulnerabilities and implements measures to protect the website and user data. Bugs and issues are documented, tracked, and resolved through iterative testing and bug fixing.",
                para2: "By following a rigorous testing and quality assurance process, the web design team aims to deliver a high-quality website that meets requirements, functions correctly, and provides a positive user experience.",
                icon: require("../../assets/images/whatWeDoInner/Security Testing and Bug Resolution.png")
            },
        ]
    },
    {
        id: "Deployment-and-Launch",
        name: "Deployment and Launch",
        mainICon: require('../../assets/images/whatWeDoInner/Deployment and Launch.png'),
        arr: [
            {
                name: "Hosting Setup and Server Configuration",
                para: "The web design team assists in selecting a hosting provider and configures the server to support the website's requirements, optimizing performance and enabling necessary technologies.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Hosting Setup and Server Configuration.png")
            },
            {
                name: "File Transfer and Database Setup",
                para: "All website files and assets are securely uploaded to the hosting server, and if applicable, the database is set up and configured to support dynamic content or e-commerce functionality.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/File Transfer and Database Setup.png")
            },
            {
                name: "Domain Configuration and Final Testing",
                para: "The domain name is configured to point to the hosting server, and final testing is conducted to ensure full functionality, including links, forms, and other features. Browser and device compatibility checks are performed.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Domain Configuration and Final Testing.png")
            },
            {
                name: "Performance Optimization and Launch",
                para: "The website is optimized for performance, enabling caching, minimizing server requests, and compressing files. Once testing and optimizations are complete, the website is officially launched and made publicly accessible.",
                para2: "Collaboration, communication, and post-launch monitoring are important to ensure a smooth transition to the live environment and address any post-launch concerns or necessary adjustments.",
                icon: require("../../assets/images/whatWeDoInner/Performance Optimization and Launch.png")
            },
        ]
    },
    {
        id: "Ongoing-Support-and-Maintenance",
        name: "Ongoing Support and Maintenance",
        mainICon: require('../../assets/images/whatWeDoInner/Ongoing Support and Maintenance.png'),
        arr: [
            {
                name: "Support Channels and Issue Resolution",
                para: "The web design team provides dedicated support channels for prompt assistance and resolves reported bugs, errors, or issues to ensure the smooth functioning of your website.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Support Channels and Issue Resolution.png")
            },
            {
                name: "Updates and Security Maintenance",
                para: "Regular updates and upgrades are applied to keep your website secure, stable, and compatible with the latest web technologies. Security monitoring, patching, and best practices are implemented to protect against vulnerabilities and threats.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Updates and Security Maintenance.png")
            },
            {
                name: "Performance Optimization",
                para: "Periodic performance reviews and optimizations are conducted to enhance website speed, server response times, and overall user experience, improving search engine rankings and user satisfaction.",
                para2: "",
                icon: require("../../assets/images/whatWeDoInner/Performance Optimization.png")
            },
            {
                name: "Content Updates, Backup, and Consultation",
                para: "Assistance with content updates, regular website backups, and consultation for enhancements and trends are provided. This ensures that your website remains up to date, secure, and effective in meeting your business goals.",
                para2: "By discussing and establishing clear expectations, service level agreements, and ongoing support terms, a strong partnership can be formed with the web design team for continued success and the smooth functioning of your website.",
                icon: require("../../assets/images/whatWeDoInner/Content Updates, Backup, and Consultation.png")
            },
        ]
    },
]

function WhatWeDoInner() {

    let [obj, setObj] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        let route = window.location.pathname.split("/")[2]
        let ob = data.find((a) => a.id === route)

        setObj(ob)
    }, [])

    return (
        obj ?
            <div className='whatWeDoInnerPage'>
                <Container>
                    <section className='section1 text-center'>
                        <Row className='align-items-center'>
                            <Col md={12}>
                                <div className='img-div'>
                                    <img src={obj.mainICon} />
                                </div>
                                <div className='heading'>
                                    <h2>{obj.name}</h2>
                                </div>
                            </Col>
                        </Row>
                    </section>

                    {obj.arr.map((a, i) => {
                        return (
                            i % 2 == 0 ?
                                <>
                                    <section className='section2'>
                                        <Container>
                                            <Row className='align-items-center reverse'>
                                                <Col sm={6}>
                                                    <div className='heading'>
                                                        <h4>{a.name}</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <p>
                                                            {a.para}
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className='img-div right'>
                                                        <img src={a.icon} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </section>

                                    <hr />
                                </>
                                :
                                <>
                                    <section className='section2'>
                                        <Container>
                                            <Row className='align-items-center'>
                                                <Col sm={6}>
                                                    <div className='img-div right'>
                                                        <img src={a.icon} />
                                                    </div>
                                                </Col>
                                                <Col sm={6}>
                                                    <div className='heading'>
                                                        <h4>{a.name}</h4>
                                                    </div>
                                                    <div className='text-div'>
                                                        <p>
                                                            {a.para}
                                                        </p>
                                                    </div>
                                                </Col>
                                                {a.para2 &&
                                                    <Col md={12}>
                                                        <div className='text-div text-center'>
                                                            <p>
                                                                {a.para2}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                }
                                            </Row>
                                        </Container>
                                    </section>
                                    {i !== data[1].arr.length - 1 &&
                                        <hr />
                                    }
                                </>
                        )
                    })}

                    <FooterTop />

                </Container>
            </div>
            :
            null
    )
}

export default WhatWeDoInner