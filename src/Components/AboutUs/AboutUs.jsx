import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
          Innovating Construction is a forward-thinking company delivering
          state-of-the-art building solutions. We combine craftsmanship and
          sustainability to build a brighter future.
        </p>

        <div className="about-details">
          <div className="about-card">
            <div className="card-text">
              <h3>Our Mission</h3>
              <p>
                We are committed to driving innovation in construction and
                ensuring client satisfaction with every project.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-rocket"></i>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="card-text">
              <h3>Global Vision</h3>
              <p>
                Our goal is to expand globally while maintaining excellence in
                quality and sustainability.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-text">
              <h3>Eco-Friendly</h3>
              <p>
                We integrate eco-friendly materials and processes to ensure we
                minimize our environmental footprint.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-leaf"></i>
            </div>
          </div>

          <div className="about-card">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-text">
              <h3>Expert Team</h3>
              <p>
                Our team of professionals is dedicated to delivering top-quality
                construction services with a focus on innovation.
              </p>
            </div>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="card-text">
              <h3>Expert Team</h3>
              <p>
                Our team of professionals is dedicated to delivering top-quality
                construction services with a focus on innovation.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-text">
              <h3>Award-Winning Projects</h3>
              <p>
                Our innovative approach has earned us numerous awards in
                sustainable construction.
              </p>
            </div>
            <div className="card-icon">
              <i className="fas fa-award"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
