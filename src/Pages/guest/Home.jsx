import React from "react";
import BlogList from "./Blogs";
const Home = () => {
  return (
    <div>
      <div className="main-container">
        <div id="nav-links" className="aside">
          <div className="logo">
            <span id="close">
              <i className="fa-solid fa-circle-xmark"></i>
            </span>
            <div className="myLogo">
              <div className="logo">
                <span style={{ color: "black" }}>My</span>
                <span style={{ color: "red", marginLeft: "-3px" }}>_Brand</span>
              </div>
            </div>
          </div>
          <div id="navbar">
            <ul className="nav">
              <li>
                <a href="#home" className="active">
                  <i className="fa-solid fa-house"></i>Home
                </a>
              </li>
              <li>
                <a href="#about">
                  {" "}
                  <i className="fa-solid fa-address-card"></i>About
                </a>
              </li>
              <li>
                <a href="#articles">
                  {" "}
                  <i className="fa-solid fa-blog"></i>article
                </a>
              </li>

              <li>
                <a href="#contact">
                  <i className="fa-solid fa-address-book"></i>Contact
                </a>
              </li>
              <li>
                <a href="/login.html">
                  <i className="fa-solid fa-right-to-bracket"></i>Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <section className="home section" id="home">
            <div id="toggle-btn">
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="container">
              <div className="row">
                <div className="home-info padd-15">
                  <h3 className="hello">
                    Hi,I'm Jean <span className="name">Pierre.</span>
                  </h3>
                  <h3 className="my-profession">
                    I'm a
                    <span className="typing">
                      Software Developer & Web designer.
                    </span>
                  </h3>
                  <p>
                    I'm a web designer from Rwanda since 2 years ago. I have
                    different skills so I can provide good looking website with
                    clean codes. Also I can give you graphic designs and many
                    different designs.
                  </p>
                  <a href="#contact" className="btn hire-me">
                    Hire Me.
                  </a>
                </div>
                <div className="home-img padd-15">
                  <img
                    className="myprofile"
                    src="../images/IMG-20240129-WA0000.jpg"
                    alt="My-Pic"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about section">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2> About Me</h2>
                </div>
              </div>
              <div className="row">
                <div className="about-content padd-15">
                  <div className="row">
                    <div className="about-text padd-15">
                      <h3>
                        FrontEnd <span>developer</span>
                      </h3>
                      <p>
                        Hi, I'm Jean Pierre HITAYEZU. I'm from Kigali in Rwanda.
                        I'am a software developer. <br />I feel lucky when I'm
                        designing as well as writing codes! I also like music.{" "}
                        <br />
                        I'm a quick learner and also very passionate about my
                        work. My tools that I use <br />
                        during my designs are Figma and Photoshop. I'm keen to
                        learn new things and progress in my career.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="personal-info padd-15">
                      <div className="row">
                        <div className="info-item padd-15">
                          <p>+250785934003</p>
                        </div>
                        <div className="info-item padd-15">
                          <p>Email: hitapeter2@gmail.com</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="buttons">
                          <a href="#" className="btn padd-15">
                            Download CV
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="skills padd-15">
                      <div className="row">
                        <div className="skill-item padd-15">
                          <h5>HTML</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: "90%" }}
                            ></div>
                            <div className="skill-percent">90%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>CSS</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: "80%" }}
                            ></div>
                            <div className="skill-percent">80%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>JS</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: "60%" }}
                            ></div>
                            <div className="skill-percent">60%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>REACT</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: "50%" }}
                            ></div>
                            <div className="skill-percent">50%</div>
                          </div>
                        </div>
                        <div className="skill-item padd-15">
                          <h5>PYTHON</h5>
                          <div className="progress">
                            <div
                              className="progress-in"
                              style={{ width: "65%" }}
                            ></div>
                            <div className="skill-percent">65%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="articles" className="service section">
            <div className="row">
              <div className="section-title padd-15">
                <h2>ARTICLES</h2>
                <div id="myblogs">
                <BlogList />
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="contact section">
            <div className="container">
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Contact Me Via</h2>
                </div>
              </div>
              <h3 className="contact-title">Do You Want To Approach Me?</h3>
              <h4 className="contact-sub-title">
                Let me provide you my full info.
              </h4>
              <div className="row">
                <div className="contact-info-item padd-15">
                  <div className="icons">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4>You Can Call</h4>
                  <p>+250785934003</p>
                </div>
                <div className="contact-info-item">
                  <div className="icons">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h4>You Can Email</h4>
                  <p>hitapeter2@gmail.com</p>
                </div>
              </div>
            </div>
          </section>
          <section></section>
          <footer>
            <div className="copyright">
              <div className="media">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <button className="subscribe-btn">Subscribe</button>
              <button className="home-btn" id="backToHomeBtn">
                BACK TO HOME
                <i id="logo" className="fa-solid fa-arrow-up-short-wide"></i>
              </button>
              <h1 className="foot-heading">LAPIDIS</h1>
              <p className="copyright">Copyright &COPY; 2024 Lapidis</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
