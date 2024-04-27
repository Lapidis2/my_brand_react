import React from "react";
import Navbar from "../../Components/Guest/Navbar";
import Footer from "../../Components/Guest/Footer";

const Portfolio = () => {
  return (
    <div>
      <div class="container">
       <Navbar/>

        <main>
          <div class="portfolio">
            <h1>My Portfolio</h1>
            <div class="projects">
              <div class="project-card">
                <div class="image">
                  <img src="./images/infinity.png" alt="" />
                </div>
                <div class="project-name">INFINITYTECH SOLUTION</div>
                <div class="details">
                  <span>
                    {" "}
                    voluptas earum harum aperiam praesentium mollitia, adipisci
                    inventore!
                  </span>
                  <a href="#">View Project</a>
                </div>
              </div>
              <div class="project-card">
                <div class="image">
                  <img src="./images/brightforth.png" alt="" />
                </div>
                <div class="project-name">BRIGHTFOTH</div>
                <div class="details">
                  <span>
                    {" "}
                    voluptas earum harum aperiam praesentium mollitia, adipisci
                    inventore!
                  </span>
                  <a href="#">View Project</a>
                </div>
              </div>
              <div class="project-card">
                <div class="image">
                  <img src="./images/brightforth.png" alt="" />
                </div>
                <div class="project-name">BRIGHTFOTH</div>
                <div class="details">
                  <span>
                    {" "}
                    voluptas earum harum aperiam praesentium mollitia, adipisci
                    inventore!
                  </span>
                  <a href="#">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  
      
    </div>
  );
};

export default Portfolio;
