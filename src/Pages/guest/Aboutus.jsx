import React from "react";
import Navbar from "../../Components/Guest/Navbar";
import Footer from "../../Components/Guest/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Aboutus = () => {
  
  return (
    <div>
      <div class="container">
        <Navbar/>
      
        <main class="main-about">
       
          <div class="about-me">
            <h1>About Me</h1>
            <span>
              Hi, I'm Mwungeri Ngabo Sevelin, a passionate software developer
              dedicated to crafting high-quality, innovative solutions. With 2
              years of experience in the tech industry, I specialize in web
              development, mobile apps etc
            </span>
            <span>
              Throughout my academic journey and internships, I've gained
              foundational knowledge in programming languages such as Node.js
              for server-side development and React.js for building dynamic user
              interfaces. Additionally, I'm proficient in HTML and CSS for
              crafting visually appealing and responsive web applications
            </span>
            <span>
              My Goal IsConsistently deliver superior software solutions that
              surpass expectations and drive client success
            </span>
          </div>

          <div class="my-skills">
            <h1>My Skills</h1>
            <div class="skills-one">
              <div class="skill">
                <img
                  src="./images/node.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>

              <div class="skill">
                <img
                  src="./images/react.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
              <div class="skill">
                <img
                  src="./images/mongo.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
              <div class="skill">
                <img
                  src="./images/git.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
              <div class="skill">
                <img
                  src="./images/mysql.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
              <div class="skill">
                <img
                  src="./images/tailwind.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
              <div class="skill">
                <img
                  src="./images/redux.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
              <div class="skill">
                <img
                  src="./images/js.png"
                  style={{width: '100%', objectFit: 'cover'}}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="mission-conatiner">
            <div class="my my-mission">
              <h4>My Mission</h4>
              <span>
                My mission is simple: to use my skills and expertise to make a
                difference. Whether it's building user-friendly applications,
                optimizing performance, or solving complex problems, I strive to
                deliver solutions that exceed expectations and drive positive
                change.
              </span>
            </div>
            <div class="my my-vision">
              <h4>My Vision</h4>
              <span>
                My vision is to innovate and inspire through technology. By
                pushing the boundaries of what's possible, I aim to create
                transformative solutions that empower individuals and
                organizations to thrive in a digital world.
              </span>
            </div>
            <div class="my my-goal">
              <h4>Main Goal</h4>
              <span>
                My main goal is to consistently deliver superior software
                solutions that surpass expectations and drive client success.
                Through a relentless pursuit of excellence and a commitment to
                continuous improvement, I strive to set new standards in
                software development and positively impact the lives of others.
              </span>
            </div>
          </div>
          <div class="my-journey">
            <div class="my my-journey">
              <h4>My Journey</h4>
              <span>
                I began my journey in software development 2 years ago, fueled
                by my passion for technology and desire to create meaningful
                solutions. Since then, I've embarked on a continuous learning
                journey, honing my skills and staying up-to-date with the latest
                industry trends.
              </span>
            </div>
          </div>
        </main>
      </div>
 
    </div>
  );
};

export default Aboutus;
