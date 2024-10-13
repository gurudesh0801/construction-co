import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>Construction Co.</h1>
          <p>Your partner in building the future.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <Link to="mailto:info@constructioncompany.com">
              info@constructioncompany.com
            </Link>
          </p>
          <p>
            Phone: <Link to="tel:+11234567890">(123) 456-7890</Link>
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Construction Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
