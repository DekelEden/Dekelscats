import React from 'react'
import ReactDOM from 'react-dom'
import './css/contact.css'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <div className="contactdiv">
      <div className="pinkback contactpink">
        <div className="withmaxwidthnoflex">
          <img className="catform" src="/catform.jfif" />
          <h2>אנא השאירו פרטים ליצירת קשר:</h2>
          <ContactForm />
        </div>
      </div>

      <div className="contactForm">
        <div className="contactNoImage">
          <div className="contactinfo">
            <p>
              <span className="myname">דקל עדן-צאליק</span>
              <span className="space"></span>
              <span>
                <i className="fas fa-phone-square-alt"></i>
                0503059422
              </span>
              <span className="space"></span>
              <span className="divide">|</span>
              <span className="space"></span>
              <span>
                <i className="fas fa-envelope-square"></i>
                <a href="mailto:dekeltsa@gmail.com">dekeltsa@gmail.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
