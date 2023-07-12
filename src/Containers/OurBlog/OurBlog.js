import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import EmptyBlogImg from "../../assets/images/blogs/emptyBlogTab.svg";

import latest1 from "../../assets/images/blogs/Choosing-icons.svg";
import latest2 from "../../assets/images/blogs/Uiandux.svg";
import latest3 from "../../assets/images/blogs/Information-technology.png";
import latest4 from "../../assets/images/blogs/Improvement.png";
import latest5 from "../../assets/images/blogs/Businesspeople.png";
import latest6 from "../../assets/images/blogs/Stock-market.png";

import selectIcon from "../../assets/images/blogs/arrow-down.png";

import "./OurBlog.css";
import FooterTop from "../../Components/FooterTop/FooterTop";
import { NavLink } from "react-router-dom";

function OurBlog() {
  let [selectedTab, setSelectedTab] = useState("latest");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let [data, setData] = useState([
    {
      name: "latest",
      data: [
        {
          heading:
            "San Antonio Web Design: Empowering Local Businesses with Custom Solutions and Personalized Service",
          img: latest1,
        },
        // {
        //  heading: "Search Results Page Design — UI/UX Best Practices",
        //  img: latest2,
        // },
        // {
        //  heading: "How to Run a Python script from Node.js",
        //  img: latest3,
        // },
        // {
        //  heading: "10 CSS properties you should try to use",
        //  img: latest4,
        // },
        // {
        //  heading: "Best Sitemap XML Optimization Practices for SEO and Google",
        //  img: latest5,
        // },
        // {
        //  heading: "7 SEO Tips To Boost Your New Website's Rankings",
        //  img: latest6,
        // },
      ],
    },
    {
      name: "design",
      data: [],
    },
    {
      name: "development",
      data: [],
    },
    {
      name: "seo",
      data: [],
    },
  ]);

  const toggleClass = (e) => {
    let val = e.target.value.toLowerCase();
    let allTabs = document.getElementsByClassName("tab-pane");
    for (let i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.remove("active");
      allTabs[i].classList.remove("show");
    }
    document.getElementById(val).classList.add("active");
    document.getElementById(val).classList.add("show");

    setSelectedTab(val);
  };

  return (
    <div className="blog">
      <div className="hero hero-what-we-do">
        <Container className="text-center">
          <Row>
            <Col md={12}>
              <div className="heading">
                <h1 className="h1-large-font">
                  We Write About:
                  <br /> <span>Design,Tech & Business</span>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="section1">
        <Container>
          <Row>
            <Col md={12}>
              <div className="tabsDiv">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item latest" role="presentation">
                    <button
                      className="nav-link show active"
                      id="latest-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#latest"
                      type="button"
                      role="tab"
                      aria-controls="latest"
                      aria-selected="true"
                    >
                      <div>LATEST</div>
                    </button>
                  </li>
                  <li className="nav-item design" role="presentation">
                    <button
                      className="nav-link"
                      id="design-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#design"
                      type="button"
                      role="tab"
                      aria-controls="design"
                      aria-selected="false"
                    >
                      <div>DESIGN</div>
                    </button>
                  </li>
                  <li className="nav-item development" role="presentation">
                    <button
                      className="nav-link"
                      id="development-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#development"
                      type="button"
                      role="tab"
                      aria-controls="development"
                      aria-selected="false"
                    >
                      <div>DEVELOPMENT</div>
                    </button>
                  </li>
                  <li className="nav-item seo" role="presentation">
                    <button
                      className="nav-link"
                      id="seo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#seo"
                      type="button"
                      role="tab"
                      aria-controls="seo"
                      aria-selected="false"
                    >
                      <div>SEO</div>
                    </button>
                  </li>
                </ul>

                <div className="selectBlogHead">
                  <img src={selectIcon} />
                  <div className="bg-white">
                    <select
                      value={selectedTab}
                      onChange={(e) => toggleClass(e)}
                    >
                      <option value={"latest"}>LATEST</option>
                      <option value={"design"}>DESIGN</option>
                      <option value={"development"}>DEVELOPMENT</option>
                      <option value={"seo"}>SEO</option>
                    </select>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  {data.map((a, i) => {
                    return (
                      <div
                        key={i}
                        className={`tab-pane fade ${
                          i == 0 ? "active show" : ""
                        }`}
                        id={`${a.name}`}
                        role="tabpanel"
                        aria-labelledby={`${a.name}-tab`}
                      >
                        {a.data.length ? (
                          <div className="blog-listing row">
                            {a.data.map((b, i) => {
                              return (
                                <Col key={`${a.name}-${i}`} lg={4} sm={6}>
                                  <NavLink to={`/our-blog/our-blog-inner-page`}>
                                    <div className="blog-single">
                                      <div className="img-div">
                                        <img src={b.img} alt={`${b.heading}`} />
                                      </div>
                                      <div className="heading">
                                        <h5>{b.heading}</h5>
                                      </div>
                                    </div>
                                  </NavLink>
                                </Col>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="emptyBlogTab">
                            <img src={EmptyBlogImg} alt="empty blog" />
                            <div className="heading">
                              <h2>No blogs are available</h2>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <FooterTop />
    </div>
  );
}

export default OurBlog;
