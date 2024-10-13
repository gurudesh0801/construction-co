import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-split">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Welcome to </span>
          <br />
          Innovating Construction
        </h1>
        <p className="hero-subtitle">
          We build the structures that shape tomorrow. Modern, efficient, and
          sustainable solutions for all your construction needs.
        </p>
        <a href="#services" className="cta-btn">
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Home;
