import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FooterTop from '../../Components/FooterTop/FooterTop'

import section2Image from '../../assets/images/blogInner/Product-concept.svg'
import section8Image from '../../assets/images/blogInner/Design.svg'

import pBlog1 from '../../assets/images/blogInner/Real-estate.svg'
import pBlog2 from '../../assets/images/blogInner/Uiandux2.svg'
import pBlog3 from '../../assets/images/blogInner/Programming.svg'

import content1Bg from '../../assets/images/blogInner/content-1-bg.svg'
import content2Bg from '../../assets/images/blogInner/content-2-bg.svg'
import content3Bg from '../../assets/images/blogInner/content-3-bg.svg'
import content4Bg from '../../assets/images/blogInner/content-4-bg.svg'
import content5Bg from '../../assets/images/blogInner/content-5-bg.svg'
import content6Bg from '../../assets/images/blogInner/content-6-bg.svg'

import content1Img1 from '../../assets/images/blogInner/content1img1.svg'
import content1Img2 from '../../assets/images/blogInner/content1img2.svg'
import content1Img3 from '../../assets/images/blogInner/content1img3.svg'
import content1Img4 from '../../assets/images/blogInner/content1img4.svg'

import content2Img1 from '../../assets/images/blogInner/content2img1.svg'
import content2Img2 from '../../assets/images/blogInner/content2img2.svg'
import content2Img3 from '../../assets/images/blogInner/content2img3.svg'
import content2Img4 from '../../assets/images/blogInner/content2img4.svg'

import content3Img1 from '../../assets/images/blogInner/content3img1.svg'
import content3Img2 from '../../assets/images/blogInner/content3img2.svg'
import content3Img3 from '../../assets/images/blogInner/content3img3.svg'
import content3Img4 from '../../assets/images/blogInner/content3img4.svg'

import content4Img1 from '../../assets/images/blogInner/content4img1.svg'
import content4Img2 from '../../assets/images/blogInner/content4img2.svg'
import content4Img3 from '../../assets/images/blogInner/content4img3.svg'

import content5Img1 from '../../assets/images/blogInner/content5img1.svg'
import content5Img2 from '../../assets/images/blogInner/content5img2.svg'
import content5Img3 from '../../assets/images/blogInner/content5img3.svg'

import content6Img1 from '../../assets/images/blogInner/content6img1.svg'
import content6Img2 from '../../assets/images/blogInner/content6img2.svg'
import content6Img3 from '../../assets/images/blogInner/content6img3.svg'
import content6Img4 from '../../assets/images/blogInner/content6img4.svg'

import './OurBlogInnerPage.css'

function OurBlogInnerPage() {

    let content = [
        {
            key: "San-Antonio-Web-Design",
            heroText: "San Antonio Web Design: Empowering Local Businesses with Custom Solutions and Personalized Service",
            description: "Unlock your digital potential with Pixel Infinity, a dedicated San Antonio web design company. Discover how our tailored solutions and personalized service empower local businesses to thrive online. Contact us for exceptional web design services.",
            para: "Welcome to the blog of Pixel Infinity, a dedicated web design company based in San Antonio. Our team is passionate about serving the vibrant local business community and helping businesses unlock their digital potential. In this post, we will share how our tailored web design solutions and personalized service can contribute to the success of local businesses in the digital landscape.",
            bgImage: content1Bg,
            arr: [
                {
                    heading: "Understanding the Local Business Landscape in San Antonio",
                    para1: "San Antonio is a city known for its entrepreneurial spirit and innovation. From the iconic River Walk to the thriving food scene and rich cultural heritage, local businesses play a vital role in shaping the city's identity. As a homegrown web design company, we are deeply connected to the pulse of our community. We understand the challenges local businesses face and are here to be your trusted partner in overcoming them.",
                    image: content1Img1,
                    para2: ""
                },
                {
                    heading: "A Small but Passionate Team of Web Design Experts",
                    para1: "At Pixel Infinity, our small team is fueled by passion and dedication. We believe that success is not measured by the size of a team, but by the quality of their work and the impact they create. Each member of our talented group brings a unique set of skills and expertise to the table, allowing us to deliver innovative web design solutions tailored to the specific needs of your business.",
                    image: content1Img2,
                    para2: ""
                },
                {
                    heading: "Tailored Web Design Solutions for San Antonio Businesses",
                    para1: "We recognize that every business in San Antonio is unique, and off-the-shelf solutions won't cut it. Our approach to web design is centered around understanding your business goals, target audience, and brand identity. With this knowledge, we combine our technical proficiency and creative flair to craft visually stunning and user-friendly websites that leave a lasting impression. Whether you need an e-commerce platform, a portfolio website, or a content management system, our custom solutions will elevate your online presence.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Embracing Innovation for Optimal Performance",
                    para1: "In the ever-changing digital landscape, staying ahead of the curve is crucial. As a forward-thinking web design company, we embrace the latest trends and technologies. Our team regularly explores emerging design concepts, responsive frameworks, and optimization techniques to ensure your website not only looks visually captivating but also performs flawlessly across devices and platforms. By leveraging our expertise, your San Antonio business can stand out from the competition.",
                    image: content1Img3,
                    para2: ""
                },
                {
                    heading: "Building Long-Term Relationships Based on Trust and Exceptional Service",
                    para1: "We don't just want to be your web design service provider; we aspire to be your long-term partner in success. Our mission is to build lasting relationships with our clients based on trust, transparency, and exceptional customer service. From the moment you reach out to us, you can expect open communication, timely project updates, and a collaborative approach that values your input. Your satisfaction is our top priority, and we are committed to delivering results that exceed your expectations.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Conclusion: Unleash Your San Antonio Business's Digital Potential with Pixel Infinity",
                    para1: "Pixel Infinity is excited to partner with local businesses in San Antonio and help them thrive in the digital age. Our small but passionate team is poised to provide tailored web design solutions that reflect your unique brand identity and drive tangible results. By choosing Pixel Infinity, you are placing your trust in a local team that is invested in the success of our community. Let's embark on this exciting journey together and unleash the digital potential of your San Antonio business!",
                    image: content1Img4,
                    para2: "We hope you found this blog post informative and inspiring. If you have any questions or would like to discuss your web design needs further, please don't hesitate to contact us. We look forward to hearing from you and helping your San Antonio business flourish in the online world."
                },
            ]
        },
        {
            key: "Unlock-the-Power-of-HTML-and-CSS",
            heroText: "Unlock the Power of HTML and CSS: Master Web Design with Pixel Infinity",
            description: "Unlock the power of HTML and CSS with Pixel Infinity. Master the core concepts, learn how to create engaging visuals, boost performance, and stay updated with the latest trends. Start your journey to web design mastery today!",
            para: "In the ever-advancing digital age, a unique, compelling website is not a luxury but a necessity. The unsung heroes behind striking web designs are HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). In collaboration with Pixel Infinity, we'll delve into the core concepts of HTML and CSS and offer actionable tips to unlock their power.",
            bgImage: content2Bg,
            arr: [
                {
                    heading: "1. Decoding HTML and CSS: The Heart of Web Design",
                    para1: "Every HTML document follows a hierarchical pattern with different tags signifying various elements. Tags like <html>, <head>, and <body> form the rudimentary structure. CSS syntax, comprising selectors, properties, and values, lets designers specify visual attributes and desired appearances.",
                    image: content2Img1,
                    para2: ""
                },
                {
                    heading: "Emphasizing Semantic Markup for Accessibility and SEO",
                    para1: "Semantic markup is vital for accessibility and search engine optimization (SEO). Usage of semantic HTML tags like <header>, <nav>, <section>, and <article> provides structure and context, enhancing user experience and boosting search engine rankings.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Journeying through HTML and CSS Evolution",
                    para1: "HTML and CSS have undergone significant transformations, ushering in new features and standards. HTML5 introduced semantic elements like <header>, <nav>, and <footer>, simplifying the creation of well-structured content. CSS3 unveiled properties and capabilities like border-radius, box-shadow, and transitions, enabling designers to produce visually arresting effects and interactions.",
                    image: "",
                    para2: "To summarize, HTML and CSS are fundamental in web design, with HTML providing the structure and CSS defining the style. Semantic markup enhances SEO and accessibility, while the evolution of HTML5 and CSS3 has introduced additional capabilities for designers."
                },
                {
                    heading: "2. Creating Engaging Visuals: The Art of CSS",
                    para1: "CSS breathes life into your webpage's text, fonts, and colors. It also controls images, graphics, and layouts, and even adds interactivity through animations and transitions.",
                    image: content2Img2,
                    para2: ""
                },
                {
                    heading: "Elevating Text, Fonts, and Colors",
                    para1: "With CSS, you can experiment with text styles using properties like font-family, font-size, and color. These tools help you create visually compelling and cohesive typography.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Enhancing Visual Appeal with Images and Graphics",
                    para1: "Incorporating images and graphics amplifies your website's aesthetic appeal. CSS provides full control over image size, position, and alignment, leading to a visually pleasing user experience.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Optimizing Layouts with CSS",
                    para1: "CSS is pivotal in crafting effective layouts. Floats, flexbox, and grid layouts offer flexibility and responsiveness, making websites visually appealing and functional.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Infusing Interactivity with CSS Animations and Transitions",
                    para1: "CSS animations and transitions animate your website, providing subtle or striking movements and effects. CSS keyframes allow you to define a series of animation steps and apply them to specific elements, while transitions enable smooth animation of changes in CSS properties.",
                    image: "",
                    para2: "In conclusion, CSS brings the visual appeal of your website to life through the styling of text, fonts, and colors. It allows precise control over images and graphics, optimizes layouts, and adds interactivity with animations and transitions."
                },
                {
                    heading: "3. Boosting Performance and Compatibility: Tips and Tricks",
                    para1: "Optimizing your HTML and CSS code is critical for enhancing website performance, while ensuring cross-browser compatibility guarantees consistent website appearance and functionality across various browsers.",
                    image: content2Img3,
                    para2: ""
                },
                {
                    heading: "HTML and CSS Code Optimization",
                    para1: "Minifying your code, using external CSS files, and compressing images can optimize loading times. Organize your code with proper indentation and commenting for better readability and maintenance.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Achieving Cross-Browser Compatibility",
                    para1: "Test your website across popular browsers and address compatibility issues using CSS vendor prefixes and fallbacks when necessary. Regularly update your website to accommodate changes and updates in browser technologies.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Implementing Responsive Design",
                    para1: "Responsive design ensures your website is compatible with different screen sizes and devices. Use CSS media queries for different styles based on screen size breakpoints, and design fluid layouts that adapt to mobile, tablet, and desktop screens.",
                    image: "",
                    para2: "Overall, optimizing HTML and CSS code significantly improves website performance. Ensuring cross-browser compatibility guarantees a consistent user experience across various browsers, while implementing responsive design caters to different screen sizes and devices."
                },
                {
                    heading: "4. Additional Resources and Your Next Steps:",
                    para1: "We recommend online resources like Mozilla Developer Network (MDN), W3Schools, and Codecademy for in-depth knowledge of HTML and CSS. Platforms like YouTube, Udemy, Stack Overflow, and Reddit offer tutorials, forums, and active communities to ask questions, seek advice, and collaborate.",
                    image: content2Img4,
                    para2: ""
                },
                {
                    heading: "Keeping Up with Web Design Trends",
                    para1: "Stay updated with the latest trends, techniques, and best practices in HTML and CSS. Follow industry blogs, subscribe to design newsletters, and explore design inspiration websites like Pixel Infinity to stay inspired.",
                    image: "",
                    para2: "HTML and CSS, when wielded effectively with the guidance of Pixel Infinity, enable you to craft captivating, functional websites. Mastering these fundamental tools paves the way for limitless web design possibilities. Ignite your creativity, implement best practices, and start an exhilarating journey of web design mastery with Pixel Infinity as your trusted guide."
                },
            ]
        },
        {
            key: "The-Importance-of-Responsive-Design",
            heroText: "The Importance of Responsive Design: Ensuring Your Website Looks Great on All Devices",
            description: "Explore the power of responsive web design with Pixel Infinity. Discover how our designs ensure seamless user experience, cost-efficiency, and future-proof your digital presence.",
            para: "In today's dynamic digital age, where user preferences and devices are as diverse as the global online population itself, the need for an all-encompassing approach to website design is paramount. At the heart of this approach is responsive design—an ingenious technique that ensures your website shines and functions flawlessly across all devices.",
            bgImage: content3Bg,
            arr: [
                {
                    heading: "Understanding Responsive Design",
                    para1: "Responsive web design is not merely a method, but a philosophy and strategy that emphasizes adapting to the user's behavior and environment. This includes factors like screen size, platform, and orientation. It's about creating digital spaces that respond to the user's needs and facilitate interaction, regardless of the device in use.",
                    image: content3Img1,
                    para2: "Creating a responsive design means using flexible grids and layouts, adjusting images dynamically, and making smart use of CSS media queries. With these techniques, your website will automatically adapt to the device's resolution, image size, and scripting capabilities. It's akin to pouring liquid into a container—it seamlessly takes the shape of its vessel. That's how your website should behave across devices—like fluid, morphing and restructuring itself to deliver the best viewing experience for the user."
                },
                {
                    heading: "Why Responsive Design Matters?",
                    para1: "",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Crafting a Smooth User Experience",
                    para1: "The cornerstone of responsive design is its ability to provide a seamless user experience. Whether it's a laptop with a large screen or a mobile phone with a small display, users won't need to do excessive pinching or zooming to read the content.",
                    image: content3Img2,
                    para2: `Moreover, the growing trend of using multiple devices, sometimes simultaneously—a process known as "multi-platforming"—requires a design that provides consistency across different screens. A responsive design ensures the user's journey on your website will be smooth and uninterrupted, regardless of the device they choose to use.`
                },
                {
                    heading: "Cost and Time Efficiency",
                    para1: "While building a responsive website might seem like an expensive and time-consuming venture initially, it is a worthwhile investment in the long run. With a single, responsive design, updates become easier to manage, ensuring consistency in the information and appearance across all devices.",
                    image: content3Img3,
                    para2: ""
                },
                {
                    heading: "Future-Proofing Your Web Design",
                    para1: "Responsive web design isn't just a passing trend—it's an essential aspect of the future of web design. At Pixel Infinity, we recognize this importance and incorporate responsive design as a standard in our work.",
                    image: content3Img4,
                    para2: "Our dedicated team is committed to creating websites that are not only visually pleasing but also adaptive to any device, ensuring a powerful and effective online presence for your business.",
                    para3: "By choosing Pixel Infinity for your web design needs, you're not just following a trend—you're preparing your digital presence for the future, ensuring it remains relevant and accessible to all. Responsive design isn't a luxury; it's a necessity in our increasingly digital and interconnected world.",
                    para4: "To learn more about how Pixel Infinity's responsive design can transform your business, get in touch with us for a consultation or quote today. Alternatively, take a look at our portfolio to see real-world examples of the transformational power of responsive design.",
                },
            ]
        },
        {
            key: "The-Power-of-Effective-Web-Design",
            heroText: "The Power of Effective Web Design: Boosting Your Online Presence and Driving Sales",
            description: "Unleash the power of effective web design to boost your online presence and drive sales. Discover captivating visuals, user-centric experiences, mobile optimization, and conversion-oriented strategies in this comprehensive blog post. Elevate your brand, engage visitors, and convert them into loyal customers.",
            para: "In today's digital era, a well-designed website is not just a luxury but a necessity for businesses looking to succeed online. Effective web design can have a profound impact on your online presence, helping you attract more visitors, drive traffic, and convert leads into loyal customers. In this blog post, we will explore the influence of impactful web design on increasing visibility, enhancing user experience, and ultimately driving sales. By understanding the key elements of effective web design, you can unlock the full potential of your online platform.",
            bgImage: content4Bg,
            arr: [
                {
                    heading: "Captivating Visual Design:",
                    para1: "When visitors land on your website, their first impression is crucial. A visually appealing design can captivate users and encourage them to explore further. By incorporating captivating imagery, well-balanced layouts, and visually appealing typography, you can create a positive and engaging user experience. A well-designed website that aligns with your brand identity helps establish credibility and professionalism, making a lasting impression on visitors.",
                    image: content4Img1,
                    para2: ""
                },
                {
                    heading: "User-Centric Experience:",
                    para1: "User experience (UX) plays a vital role in effective web design. Creating an intuitive and user-friendly interface helps visitors navigate your website effortlessly and find the information they need. Clear and easy-to-use navigation, intuitive menu structures, and well-organized content contribute to a positive user experience. By understanding your target audience's needs and preferences, you can design a website that caters to their expectations, leading to increased engagement and higher conversion rates.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Mobile-Friendly Optimization:",
                    para1: "With the rise of mobile browsing, optimizing your website for mobile devices is essential. A responsive design ensures that your site looks and functions well across various screen sizes and devices. Mobile optimization not only improves the user experience but also positively impacts your search engine rankings. Search engines prioritize mobile-friendly websites, making them more visible to potential customers who are searching on their smartphones or tablets.",
                    image: content4Img2,
                    para2: ""
                },
                {
                    heading: "Conversion-Oriented Design:",
                    para1: "A website designed with conversions in mind can significantly impact your sales. Strategic placement of call-to-action buttons, clear and persuasive messaging, and streamlined checkout processes can guide visitors towards taking desired actions. By optimizing landing pages, simplifying forms, and using persuasive design techniques, you can create a seamless path for visitors to become customers. Testing and analyzing the effectiveness of different design elements can help optimize your conversion rate and drive sales.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Conclusion:",
                    para1: "Effective web design is a powerful tool that can elevate your online presence and drive sales. By focusing on captivating visual design, providing a user-centric experience, optimizing for mobile devices, and incorporating conversion-oriented elements, you can create a website that engages visitors and converts them into loyal customers. Remember, your website serves as the digital face of your business, so investing in professional and effective web design is essential for long-term success.",
                    image: content4Img3,
                    para2: "At Pixel Infinity, we specialize in crafting visually stunning and conversion-focused websites. Contact us today to learn how our expertise in web design can help enhance your online presence and drive your business forward."
                },
            ]
        },
        {
            key: "Unlock-Your-Business-Potential",
            heroText: "Unlock Your Business Potential: How the Right Web Design Can Skyrocket Your Success",
            description: "Discover the transformative power of professional web design. Learn how the right website can boost your brand, draw in a wider audience, outshine competition, and ultimately skyrocket your small business success.",
            para: "",
            bgImage: content5Bg,
            arr: [
                {
                    heading: "Web Design and Small Businesses: A Match Made in Digital Heaven",
                    para1: "In today's digital era, the importance of a well-crafted website for a small business cannot be overstated. The web has leveled the playing field, providing an opportunity for small businesses to compete with their larger counterparts, and a well-designed website is a vital tool to seize this opportunity. Here, we will explore how professional web design services can deliver numerous benefits to small businesses, including brand establishment, broader customer reach, and increased conversions. We'll also discuss key factors like mobile optimization, user-friendly interfaces, and SEO-friendly design.",
                    image: content5Img1,
                    para2: ""
                },
                {
                    heading: "Building Your Brand",
                    para1: "The essence of your brand is reflected in your website's design. It's where your brand story unfolds. A professionally designed website helps establish your brand in the online space, giving it a distinct voice and visual identity. Color schemes, typography, images, and layout all contribute to a cohesive brand image, giving visitors a clear sense of your business's personality and values.",
                    image: "",
                    para2: "Furthermore, consistency in design not only strengthens your brand identity but also builds trust with customers. When a visitor lands on a well-designed website, it signals that your business is professional and reliable. This sense of trust and authenticity can significantly impact your online reputation and customer loyalty."
                },
                {
                    heading: "Competing with Larger Businesses",
                    para1: "The online marketplace is competitive. As a small business, you might feel dwarfed by the expansive digital footprint of larger enterprises. However, a well-crafted website can give you a competitive edge.",
                    image: "",
                    para2: "Professional web design services can create a website that is not just visually appealing but also user-friendly and optimized for search engines. Such a website can help you compete on equal footing with larger businesses, enhancing your visibility and helping you carve out your niche in the online landscape."
                },
                {
                    heading: "Reaching a Wider Audience",
                    para1: "In the digital age, your website serves as your business's online storefront. And unlike a physical store, it isn't restricted by geographic boundaries. A well-designed website allows you to reach a broader audience, extending your reach beyond your local community to potential customers around the world.",
                    image: content5Img2,
                    para2: "Incorporating SEO-friendly design elements can further extend this reach by improving your search engine rankings, thereby increasing your website's visibility to people who are searching for the products or services you offer."
                },
                {
                    heading: "Increasing Conversions",
                    para1: "Professional web design goes beyond creating an attractive website. It's also about guiding the user journey and encouraging visitors to take desired actions, whether that's making a purchase, filling out a contact form, or signing up for a newsletter.",
                    image: "",
                    para2: "A professionally designed website will strategically place calls-to-action, simplify navigation, and streamline the checkout process. These design elements can significantly enhance the user experience and boost your conversion rate, turning visitors into customers."
                },
                {
                    heading: "Mobile Optimization and User-Friendly Interfaces",
                    para1: "As more people use their smartphones for web browsing, it's critical that your website performs flawlessly across a variety of devices. Mobile optimization ensures that your site's design, images, and layouts adapt to fit the screen on which they're displayed, providing a seamless browsing experience for all users.",
                    image: content5Img3,
                    para2: "Additionally, a user-friendly interface is a cornerstone of effective web design. Clear navigation, intuitive layouts, and accessible content can significantly enhance user satisfaction, encouraging visitors to stay longer and explore more of your website."
                },
                {
                    heading: "Conclusion",
                    para1: "In the digital landscape, your website is more than just an online address. It's a vital platform for communicating with customers, showcasing your offerings, and driving sales. Professional web design can amplify your online presence, helping your small business flourish in the digital realm. By investing in a professionally designed website, you're not just creating an online platform for your business—you're laying the foundation for your digital success. Remember, in the digital world, your website is your first impression, and at Pixel Infinity, we ensure it's a lasting one. Contact us today to learn more about our professional web design services tailored for small businesses.",
                    image: "",
                    para2: ""
                },
            ]
        },
        {
            key: "Unlocking-Local-Success",
            heroText: "Unlocking Local Success: How a Powerful Website Transforms Small Businesses",
            description: "Discover the transformative power of a well-crafted website for your small business. Learn how to showcase your offerings, attract local customers, and boost engagement. Turn your small business into a local powerhouse in the digital age.",
            para: "",
            bgImage: content6Bg,
            arr: [
                {
                    heading: "Small Business, Big Impact: How Your Website Can Make a Difference",
                    para1: "In the contemporary business landscape, even the smallest businesses can make a substantial impact. The secret lies in a powerful tool that any business—regardless of size—can leverage: a website. From showcasing products and services to attracting potential customers and facilitating communication, a well-crafted website is your most potent marketing weapon. This blog post explores the transformative role of a website in shaping a small business's trajectory.",
                    image: content6Img1,
                    para2: ""
                },
                {
                    heading: "Showcasing Your Products and Services",
                    para1: "A website is your business’s virtual storefront. It provides a platform where you can display your products or services in their best light, accessible to customers around the clock. High-quality images, detailed product descriptions, customer testimonials, and product demonstration videos can enhance product appeal and inform prospective customers. Moreover, unlike a physical store, a website is not constrained by shelf space or store hours. You can display an unlimited number of products and offer services that are accessible at any time of day, catering to a global audience.",
                    image: content6Img2,
                    para2: ""
                },
                {
                    heading: "Attracting Potential Customers",
                    para1: "Your website is more than just a catalogue of your offerings—it's also a magnet for potential customers. Search Engine Optimization (SEO) plays a vital role here. With effective SEO strategies, your website can rank higher on search engine results pages, increasing visibility and attracting more organic traffic.",
                    image: "",
                    para2: ""
                },
                {
                    heading: "Conclusion",
                    para1: "In addition to SEO, content marketing can be a powerful tool for drawing in potential customers. Blogs, articles, how-to guides, and other forms of content can provide value to your audience, establishing your business as a knowledgeable authority in your field. This not only attracts traffic but also builds trust and credibility.",
                    image: content6Img3,
                    para2: ""
                },
                {
                    heading: "Serving as a Platform for Communication and Engagement",
                    para1: "A website also serves as a platform for communication and engagement. Through contact forms, live chat features, and feedback forms, your website can facilitate two-way communication, allowing customers to reach out to you with queries, feedback, or concerns.",
                    image: "",
                    para2: "Simultaneously, features like newsletters and blog post comments provide opportunities for engagement. By encouraging interaction, you foster a sense of community, enhancing customer loyalty and promoting positive word-of-mouth marketing."
                },
                {
                    heading: "Empowering Your Business with Data",
                    para1: "Beyond its role as a marketing tool, your website is also a rich source of data. Tools like Google Analytics provide insights into your website traffic, user behavior, and conversion paths. This data can inform your business strategy, helping you understand what works and what doesn't, and guiding you to make data-driven decisions that enhance your marketing effectiveness.",
                    image: content6Img4,
                    para2: ""
                },
                {
                    heading: "Boosting Your Brand",
                    para1: "Ultimately, your website is a powerful branding tool. Every element—from the color scheme and typography to the content and customer service—contributes to your brand identity. By creating a consistent, engaging, and user-friendly website, you reinforce your brand values, mission, and unique selling proposition, differentiating your business in a crowded marketplace.",
                    image: "",
                    para2: "For small businesses in today's digital age, a website isn't just a nice-to-have—it's an essential tool for success. As your virtual storefront, marketing magnet, communication platform, data source, and branding tool, your website can make a significant difference in your business. It's the gateway through which customers can discover your offerings, interact with your brand, and engage with your business—no matter where they are in the world or what time of day it is. At Pixel Infinity, we specialize in designing websites that not only look good but also deliver results. Contact us today to discover how we can help your small business make a big impact online."
                },
            ]
        },
    ]

    let [obj, setObj] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
        let id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]

        let filterObj = content.find((a) => a.key === id)

        setObj(filterObj)

    }, [])

    return (
        obj &&
        <div className='ourBlogInnerPage'>
            <div style={{ backgroundImage: `url(${obj.bgImage})` }} className='hero hero-what-we-do' aria-label='Heytutor — Smart Design for online Tutoring Platform with $30M Revenue'>
                <div className='overlay'></div>
                <Container className='text-center'>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h1 className='h1-large-font'>{obj.heroText}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <section className='section1 first'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='text-div'>
                                <p>
                                    <b>Description: </b>
                                    {obj.description}
                                </p>

                                {obj.para &&
                                    <p>
                                        <br />
                                        {obj.para}
                                    </p>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {obj.arr.map((a, i) => (
                <section key={i} className='section1'>
                    <Container>
                        <Row>
                            <Col md={12}>
                                {a.heading &&
                                    <div className='heading'>
                                        <h3>{a.heading}</h3>
                                    </div>
                                }

                                {a.para1 &&
                                    <div className='text-div'>
                                        <p>
                                            {a.para1}
                                        </p>
                                    </div>
                                }

                                {a.image &&
                                    <div className='img-div'>
                                        <img src={a.image} alt={a.heading} />
                                    </div>
                                }

                                {a.para2 &&
                                    <div className='text-div'>
                                        <p>
                                            {a.para2}
                                        </p>
                                    </div>
                                }

                                {a.para3 &&
                                    <div className='text-div'>
                                        <p>
                                            {a.para3}
                                        </p>
                                    </div>
                                }

                                {a.para4 &&
                                    <div className='text-div'>
                                        <p>
                                            {a.para4}
                                        </p>
                                    </div>
                                }
                            </Col>
                        </Row>
                    </Container>
                </section>
            ))}

            {/* <section className='section1'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h3>Basic Principles</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    When we think of search engines (it doesn’t matter which exactly, as they all function in a similar way), the first thing that comes to mind is the precise results that help users find exactly what they need. That’s the way it is, and that’s what everyone is used to. However, there are some additional features to consider — in the age of digital development, convenience, proficiency, and versatility are the key factors for success in any work field.
                                    <br />
                                    <br />
                                    Now let’s take a look at some not-so-obvious supplementary options, which are sorely required for the perfect search process.
                                    <br />
                                    <br />
                                    Next, there are Informational features. It is a whole set of components that consists of various types of similar queries, found results, a bunch of individual results that include hyperlinked titles, and support for inquiry rephrasing and autocorrection, for instance, "Did you mean…?".
                                </p>
                            </div>
                            <div className='img-div'>
                                <div className='heading'>
                                    <h5>Always allow users to see their initial text in the search bar. When the customers cannot find the desired items, it is crucial they try again.</h5>
                                </div>
                                <img src={section2Image} alt='Basic Principles' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section1'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='text-div'>
                                <p>
                                    Last but not least are the Personalization features. These features help provide customers with tailored and relevant search results based on user profiles or activity. And this is especially applicable to e-commerce websites. For example, if you've searched for dog food, you may see a suggestion to take a look at pet toys during your next attempt. Putting two and two together like that isn’t that hard, really, especially if customers complete their website profiles with personal preferences.
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
                                <h3>Page Layouts</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    Right now, there is a big variety of search page UI designs aimed at making the search more functional for customers and, consequently, more profitable for the owners. Let’s look at key factors that will help you improve both the user interface and user experience.
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
                                <h3>Make your results page less overwhelming</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    The task of each search bar is to provide the users with a results page that will satisfy their needs. However, there are significant differences between various types of sites. For media-sharing platforms like Instagram or Pinterest, it may be a better strategy to use endless scrolling and loading as many results as possible. Adding a "Load more" button is also an option — it may be visible when there are interruptions with the Internet connection and the next batch of the images has not loaded yet. For e-commerce websites, though, it makes sense to use pagination.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section1 first'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h3>Don’t erase users’ queries after they press the search button</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    Always allow users to see their initial text in the search bar. When the customers cannot find the desired items, it is crucial they try again. To facilitate that and to save their time, leave their initial request be, making it easier to edit on the spot.
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
                                <h3>Choose the proper page layout</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    It’s also important to remember that when searching in varied collections (different item types), for example, in a department store, the page layout will depend on the types of items in the queries. If the appearance matters for the product (e.g., cars, clothes), the most appropriate layout will be visually-oriented.
                                    <br />
                                    <br />
                                    In other cases, you can provide a detail-oriented layout when appearance is not so critical (e.g., laptops, devices). Basically, use details in lists and pictures in grids. The extra handy option would be allowing users to switch between these two views on the fly.
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
                                <h3>Blended Results</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    In general, various types of search results require using different layouts, and many content-rich websites are willing to inspire users to explore more. Such sites take a much more ingenious approach, offering users blended results. These are layouts that mix different media after the search. This leaves users free to choose whatever they like: news, videos, photos, maps, and so on.
                                </p>
                            </div>
                            <div className='img-div'>
                                <img src={section8Image} alt='Blended Results' />
                                <div className='heading two'>
                                    <h5>Blended results help expand and facilitate search as much as possible</h5>
                                </div>
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
                                <h3>Zero Results</h3>
                            </div>
                            <div className='text-div'>
                                <p>
                                    Although most search engines provide autosuggestions and a feature set to find the most accurate results, some queries simply cannot be satisfied. This is when the users see the dreaded zero results page.
                                    <br />
                                    <br />
                                    The problem is that this page might scare away potential buyers, so website owners should try to minimize these kinds of engagements. If they are indeed inevitable, take a gander at the following practical tips to make this experience more amicable.
                                    <br />
                                    <br />
                                    First, you need to explain that there are no matching results intelligibly and politely. In doing so, you can also suggest removing some filters or searching in other categories. Providing additional suggestions with "Were you looking for…?" would also be beneficial in this case.
                                    <br />
                                    <br />
                                    Furthermore, there are alternative ways of solving the problem. For instance, you can offer different options between similar queries, and remind users to check it for spelling or even rephrase it. Another helpful feature would be prompting your customers to contact customer service or asking them to provide feedback in a designated field. However, it’s worth noting that despite all this, certain visitors will still be left frustrated.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            <section className='popular-blog'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='heading text-center'>
                                <h2>Our Popular Blogs</h2>
                            </div>
                        </Col>

                        <Col md={12}>
                            <div className='popular-blog-boxes'>
                                <Row>
                                    <Col lg={4} md={6} className='first'>
                                        <NavLink to={`/our-blog/our-blog-inner-page`}>
                                            <div className='blog-single'>
                                                <div className='img-div'>
                                                    <img src={pBlog1} alt="How Contrast Works in User Experience Design" />
                                                </div>
                                                <div className='heading'>
                                                    <h5>How Contrast Works in User Experience Design</h5>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <NavLink to={`/our-blog/our-blog-inner-page`}>
                                            <div className='blog-single'>
                                                <div className='img-div'>
                                                    <img src={pBlog2} alt="Search Results Page Design — UI/UX Best Practices" />
                                                </div>
                                                <div className='heading'>
                                                    <h5>Search Results Page Design — UI/UX Best Practices</h5>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <NavLink to={`/our-blog/our-blog-inner-page`}>
                                            <div className='blog-single'>
                                                <div className='img-div'>
                                                    <img src={pBlog3} alt="How to Run a Python script from Node.js" />
                                                </div>
                                                <div className='heading'>
                                                    <h5>How to Run a Python script from Node.js</h5>
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

export default OurBlogInnerPage