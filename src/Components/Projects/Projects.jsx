import React from "react";
import "./Projects.css";
import img1 from "../../assets/images/img4.jpg";
import img2 from "../../assets/images/img5.jpg";
import img3 from "../../assets/images/img6.jpg";
import img4 from "../../assets/images/img7.jpg";
import img5 from "../../assets/images/img8.jpg";
import img6 from "../../assets/images/img9.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <h2 className="projects-title">Our Projects</h2>
        <p className="projects-subtitle">
          Discover some of the remarkable projects we've completed, showcasing
          our dedication to excellence and innovation in construction.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={img1} alt="Modern Office Building" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Modern Office Building</h3>
              <p className="project-description">
                A sleek, eco-friendly office building designed to maximize space
                and energy efficiency.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img2} alt="Residential Complex" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Residential Complex</h3>
              <p className="project-description">
                A luxurious residential area, blending nature with urban
                amenities.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img3} alt="Luxury Resort" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Luxury Resort</h3>
              <p className="project-description">
                A premium resort designed for comfort, relaxation, and
                sustainability.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img4} alt="Bridge Infrastructure" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Bridge Infrastructure</h3>
              <p className="project-description">
                A state-of-the-art bridge infrastructure project that connects
                communities.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img5} alt="Eco-Friendly Homes" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Eco-Friendly Homes</h3>
              <p className="project-description">
                Sustainable homes built with the environment in mind for modern
                living.
              </p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img src={img6} alt="Urban Shopping Mall" />
            </div>
            <div className="project-details">
              <h3 className="project-title">Urban Shopping Mall</h3>
              <p className="project-description">
                A contemporary shopping mall redefining the retail experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
