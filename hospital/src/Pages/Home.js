import React from "react";
import "./Home.css";
// import Leftsidebar from "../Components/Leftsidebar";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="topbar">
          <div>Hospital Management Systems</div>
          <div className="dis">
            <ul>
              <li>Admin</li>
              <li>Doctor</li>
              <li>Users</li>
            </ul>
          </div>
          <div className="other">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="left">
        <div  className="left-sidebar">
              <Leftsidebar/>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
