import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHotel, faPlane,faTrain,faBus } from '@fortawesome/free-solid-svg-icons';
import hotel from "../Media/hotel.jpg";
import flight from "../Media/travel.png";
import train from "../Media/train.png";
import bus from "../Media/bus-school.png";

const Header = () => {
  return (
    <>
      <nav id="header">
        <ul>
          <li>
            <img src={hotel} className="icon" alt="hotel" />
            <Link to="/hotel"><span className="nav-link">Hotels</span></Link>
          </li>
          <li>
            <img src={flight} className="icon" alt="flight" />
            <Link to="/flight"><span className="nav-link">Flight</span></Link>
          </li>
          <li>
            <img src={train} className="icon" alt="train" />
            <Link to="/train"><span className="nav-link"> Trains</span></Link>
          </li>
          <li>
            <img src={bus} className="icon" alt="bus" />
            <Link to="/bus"><span className="nav-link">Bus</span></Link>
          </li>
          <li>
            <Link to="/more"><span className="nav-link">More Destinations..</span></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
