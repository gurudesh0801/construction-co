import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="our-services">
      <div className="services-content">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We offer a wide range of construction services to meet your needs.
          From design and planning to building and project management, our team
          of experts ensures high-quality work and exceptional results.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-drafting-compass service-icon"></i>
            <h3>Architectural Design</h3>
            <p>
              We provide innovative and sustainable architectural designs that
              meet the highest standards of quality and functionality.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-hammer service-icon"></i>
            <h3>General Construction</h3>
            <p>
              From residential to commercial projects, our construction services
              cover everything from foundation to finishing.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-hard-hat service-icon"></i>
            <h3>Project Management</h3>
            <p>
              Our experienced project managers ensure that your construction
              projects are completed on time, within budget, and with top-notch
              quality.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-solar-panel service-icon"></i>
            <h3>Green Building Solutions</h3>
            <p>
              We use eco-friendly materials and construction techniques to
              create energy-efficient and sustainable buildings.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-paint-roller service-icon"></i>
            <h3>Renovations</h3>
            <p>
              We specialize in both interior and exterior renovations, bringing
              new life to outdated spaces with fresh, modern designs.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-tools service-icon"></i>
            <h3>Maintenance & Repairs</h3>
            <p>
              Our team offers reliable maintenance and repair services to ensure
              that your properties remain in top condition for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
