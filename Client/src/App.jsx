import React from "react";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default App;
