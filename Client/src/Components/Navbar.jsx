import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/" className="logo">
        <i className="fas fa-shopping-basket"></i>
        <span>ExploreEase.</span>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="logsign">
        <button type="button" className="btn"><Link to='/login'>Login</Link>
        
        </button>
        <button type="button" className="btn">
          Signin
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
