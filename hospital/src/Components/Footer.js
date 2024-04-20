import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          <div className="plashoe">
            <h2>Hospital Mangement System</h2>

            <p>
            A Hospital Management System (HMS) is a comprehensive software solution designed to streamline and improve the efficiency of hospital operations, including patient registration, appointment scheduling, medical records management, billing, and inventory management.
            </p>
            <ul className="icons-li">
              <li className="icons">
                <InstagramIcon />
              </li>
              <li className="icons">
                <FacebookIcon />
              </li>
              <li className="icons">
                <TwitterIcon />
              </li>
            </ul>
          </div>
          <div className="shop">
  <h3>Our Departments</h3>
  <ul>
    <li className="shop-li"><a href="/emergency">Emergency Department</a></li>
    <li className="shop-li"><a href="/medicine">General Medicine</a></li>
    <li className="shop-li"><a href="/surgery">Surgery</a></li>
    <li className="shop-li"><a href="/pediatrics">Pediatrics</a></li>
    <li className="shop-li"><a href="/cardiology">Cardiology</a></li>
  </ul>
</div>

          <div className="about">
            <h3>About Us</h3>
            <ul>
              <li className="about-li">Our Story</li>
              <li className="about-li">Our Materials</li>
              <li className="about-li">Our Value</li>
              <li className="about-li">Sustainability</li>
              <li className="about-li">Manufacture</li>
            </ul>
          </div>
          <div className="needhelp">
  <h3>Quick Links</h3>
  <ul>
    <li className="needhelp-li"><a href="/services">Services</a></li>
    <li className="needhelp-li"><a href="/departments">Departments</a></li>
    <li className="needhelp-li"><a href="/doctors">Doctors</a></li>
    <li className="needhelp-li"><a href="/appointments">Appointments</a></li>
    <li className="needhelp-li"><a href="/contact">Contact Us</a></li>
  </ul>
</div>

        </div>
      </div>
      <div className="underground">
        <div className="underground-left">
          <p>© 2024 Hospital Mangement System<br/>Developed by Aboobacker Sidheeque K</p>
        </div>
        <div className="underground-right">
          <img
            src="	https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
