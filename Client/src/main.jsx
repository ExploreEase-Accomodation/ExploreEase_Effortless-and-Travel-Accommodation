import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,

} from "react-router-dom";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Hotel from "./Components/Bookings/Hotel.jsx";
import Flight from "./Components/Bookings/Flight.jsx";
import Bus from "./Components/Bookings/Bus.jsx";
import Train from "./Components/Bookings/Train.jsx";
import MorDes from "./Components/Bookings/MoreDes.jsx";
import Container from "./Components/Container.jsx";
import Login from "./FormControl/Login.jsx";
import Contact from "./Components/Contact.jsx";
import Signup from "./FormControl/Signup.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(

    <React.Fragment>
     <Route path="login" element={<Login />}></Route>
     <Route path="signup" element={<Signup />}></Route>

    
    <Route path="/" element={<App />}>
      <Route path="" element={<Container />} />

      <Route path="hotel" element={<Hotel />} />
      <Route path="flight" element={<Flight />} />
      <Route path="train" element={<Train />} />
      <Route path="bus" element={<Bus />} />
      <Route path="more" element={<MorDes />} />

      <Route path="about" element={<About />}></Route>
      <Route path="services" element={<Services />}></Route>      
      <Route path="contact" element={<Contact />}></Route>      
    </Route>
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
