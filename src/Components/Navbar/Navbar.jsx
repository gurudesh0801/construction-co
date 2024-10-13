import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Construction Co.</h2>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/services">Services</Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-item" onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
