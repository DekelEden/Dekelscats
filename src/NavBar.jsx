import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './css/NavBar.css'

export default function NavBar() {
  const [menuOpenMobile, setMenuOpenMobile] = React.useState(false)

  return (
    <nav>
      {/*
        DESKTOP MENU
       */}
      <ul className="desktopmenu">
        <li className="smalllogocontainer">
          <Link to="/">
            <img className="smalllogo" alt="logo" src="/logonotext.jpg" />
          </Link>
        </li>
        <li className="textcontainer">
          <Link to="/">
            <img className="smalllogotext" alt="logo" src="/textonly.png" />
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
          <Link className="withhover" to="/lectures/speaking-cats">
            הרצאת מדברים חתולית
          </Link>
        </li>
        <li>
          <Link className="withhover" to="/contact">
            צרו קשר
          </Link>
        </li>
        <li className="emptyspace"></li>
        <li>
          <a href="https://www.facebook.com/Dekelscats">
            {/* <!-- replace with business facebook page --> */}
            <i className="fab fa-facebook icon"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/dekelscats">
            {/* <!-- replace with business instagram page --> */}
            <i className="fab fa-instagram icon"></i>
          </a>
        </li>
        <li>
          <a href="mailto:contact@dekelscats.com">
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

      {/*
        MOBILE MENU
       */}

      <ul className="mobilemenu">
        <li className="smalllogocontainer alwaysshow">
          <Link to="/">
            <img className="smalllogo" alt="logo" src="/logonotext.jpg" />
          </Link>
        </li>
        <li className="textcontainer alwaysshow">
          <Link to="/">
            <img className="smalllogotext" alt="logo" src="/textonly.png" />
          </Link>
        </li>
        <li className="spacer alwaysshow" />
        <li className="alwaysshow hamburger" onClick={() => setMenuOpenMobile((open) => !open)}>
          <i className="fas fa-bars"></i>
        </li>
      </ul>
      <ul className={'mobilemenu mobilemenuhidden ' + (menuOpenMobile ? 'open' : '')}>
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
          <Link className="withhover" to="/lectures/speaking-cats">
            הרצאת מדברים חתולית
          </Link>
        </li>
        <li>
          <Link className="withhover" to="/contact">
            צרו קשר
          </Link>
        </li>
        <li className="emptyspace"></li>
        <li>
          <a href="https://www.facebook.com/Dekelscats">
            {/* <!-- replace with business facebook page --> */}
            <i className="fab fa-facebook icon"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/dekelscats">
            {/* <!-- replace with business instagram page --> */}
            <i className="fab fa-instagram icon"></i>
          </a>
        </li>
        <li>
          <a href="mailto:contact@dekelscats.com">
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
  )
}
