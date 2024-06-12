import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';



const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);


  return (
    <nav id="navbar">
      <Link to="/" className="logo">
        <i className="fas fa-shopping-basket"></i>
        <div>
          Explore<span>Ease.</span>
        </div>
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

      {
        !localStorage.getItem("authToken") ? (

          <div className="logsign">
            <button type="button" className="btn">
              <Link to="/login">Login</Link>
            </button>
            <button type="button" className="btn">
              <Link to="/signup">Signup</Link>
            </button>
          </div>

        ) : (
          <div className="profile-main">
            <div className="profile" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              {/* <img src={userIcon} alt="" /> */}
              <p>Welcome</p>
              {dropdown && <Dropdown />} {/* Render Dropdown component when dropdown state is true */}
            </div>
          </div>
        )
      }


    </nav>
  );
};

export default Navbar;
