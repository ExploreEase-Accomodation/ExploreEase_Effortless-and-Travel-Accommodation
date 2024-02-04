import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav id="header">
        <ul>
          <li>
          <Link to="/hotel">Hotels</Link>
          </li>
          <li>
          <Link to="/flight">Flight</Link>
          </li>
          <li>
          <Link to="/train">Trains</Link>
          </li>
          <li>
          <Link to="/bus">Bus</Link>
          </li>
          <li>
          <Link to="/more">More Destinations..</Link>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Header;