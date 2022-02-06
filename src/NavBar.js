import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li className="smalllogocontainer">
          <Link to="/">
            <img className="smalllogo" alt="logo" src="./logonotext.jpg" />
          </Link>
        </li>
        <li className="textcontainer">
          <Link to="/">
            <img className="smalllogotext" alt="logo" src="./textonly.png" />
          </Link>
        </li>
        <li>
          <Link className="withhover" to="/">
            דף הבית
          </Link>
        </li>
        <li>
          <Link className="withhover" to="/about">
            אודות
          </Link>
        </li>
        <li>
          <Link className="withhover" to="/consult">
            טיפול וייעוץ
          </Link>
        </li>
        <li>
          <Link className="withhover" to="/contact">
            צרו קשר
          </Link>
        </li>
        <li className="emptyspace"></li>
        <li>
          <a href="">
            {/* <!-- replace with business facebook page --> */}
            <i className="fab fa-facebook icon"></i>
          </a>
        </li>
        <li>
          <a href="">
            {/* <!-- replace with business instagram page --> */}
            <i className="fab fa-instagram icon"></i>
          </a>
        </li>
        <li>
          <a href="mailto:dekeltsa@gmail.com">
            <i className="far fa-paper-plane icon"></i>
          </a>
        </li>
        {/* <li>
          <a href="/contact">
            {/* <i className="fas fa-phone icon"></i> }
            <i className="ri-phone-line icon phone"></i>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
