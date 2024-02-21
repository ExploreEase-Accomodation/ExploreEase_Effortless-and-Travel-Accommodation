import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    mobileno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="signup">
      <div className="signup-cart">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className="form-info">
            <label htmlFor="fullname">Full Name :</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Your full Name"
              required
            />
          </div>
          <div className="form-info">
            <label htmlFor="mobileno">Mobile No :</label>
            <input
              type="text"
              id="mobileno"
              name="mobileno"
              value={formData.mobileno}
              onChange={handleChange}
              placeholder="Your Mobile No.."
              required
            />
          </div>
          <div className="form-info">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email.."
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-info">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose password"
              required
            />
          </div>
          <button type="submit" id="btn">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
