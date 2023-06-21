import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FooterTop from '../../Components/FooterTop/FooterTop'

import section2Image from '../../assets/images/blogInner/Product-concept.png'
import section8Image from '../../assets/images/blogInner/Design.png'

import pBlog1 from '../../assets/images/blogInner/Real-estate.png'
import pBlog2 from '../../assets/images/blogInner/Uiandux2.png'
import pBlog3 from '../../assets/images/blogInner/Programming.png'

import './OurBlogInnerPage.css'

function OurBlogInnerPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='ourBlogInnerPage'>
            <div className='hero hero-what-we-do' aria-label='Heytutor — Smart Design for online Tutoring Platform with $30M Revenue'>
                <div className='overlay'></div>
                <Container className='text-center'>
                    <Row>
                        <Col md={12}>
                            <div className='heading'>
                                <h1 className='h1-large-font'>Search Results Page Design UI/UX Best Practices</h1>
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
                                    Imagine the following situation. You have a business, and your main goal is to attract new clients while retaining the existing ones. Your products are of high quality and pretty popular, however, the website makes no headway. There may be a couple of reasons for that, such as poor search functionality, non-user-friendly navigation, or a crude "No Results" page that doesn’t even offer any options or tips. In most cases, after such a "traumatic" experience, customers leave and rarely return. To avoid these blunders, we suggest revising your website’s design and, specifically, its search results page.
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
            </section>

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