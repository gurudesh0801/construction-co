import React from "react";
import "./Home.css";
import img from "../../assets/images/img3.png";

const Home = () => {
  return (
    <section className="hero-split">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Welcome to </span>
          <br />
          Innovating Construction-co
        </h1>
        <p className="hero-subtitle">Where Innovation Builds Your Future</p>
        <a href="/services" className="cta-btn">
          Explore Our Services
        </a>
      </div>
      <img src={img} alt="" />
    </section>
  );
};

export default Home;
