import React from "react";
import logo from "../../../../assets/images/logozigvy.png";
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-col">
          <p className="txtFooter">
            38/6k Nguyen Van Troi
            Ward 15, Phu Nhuan District.
          </p>
          <p className="txtFooter">
            info@zigvy.com</p>
          <p className="txtFooter">
            Tel: 028 62581439</p>
          <p className="txtFooter">
            Hotline: +84 93301 3306</p>
          <p className="txtFooter">
            © 2024 Zigvy Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
