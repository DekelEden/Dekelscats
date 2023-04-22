import React from "react";
import "./css/contactform.css";
import { send } from "@emailjs/browser";

export default class ContactForm extends React.Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    howToContact: "",
    problem: "",
    message: "",
    isSent: false,
    nameError: "",
    emailError: "",
    phoneError: "",
    contactError: "",
    problemError: "",
    messageError: "",
  };

  validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    this.setState({
      nameError: "",
      emailError: "",
      phoneError: "",
      contactError: "",
      problemError: "",
      messageError: "",
    });

    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let contactError = "";
    let problemError = "";
    let messageError = "";

    if (!this.state.fullName) {
      nameError = "נא להקליד שם";
    }
    if (this.state.fullName && this.state.fullName.length < 2) {
      nameError = "השם שהוקלד אינו חוקי. נא להקליד שם מלא";
    }

    if (!this.validateEmail(this.state.email)) {
      emailError = "הכתובת לא תקינה";
    }
    if (!this.state.howToContact) {
      contactError = "נא לסמן דרך תקשורת מועדפת";
    }
    if (!this.state.problem) {
      problemError = "נא לציין את סיבת הפנייה";
    }
    if (!this.state.phone) {
      phoneError = "נא להקליד מספר טלפון חוקי";
    }
    if (!this.state.message || this.state.message.length < 20) {
      messageError = "התיאור חייב להכיל לפחות 20 תוים. נא לפרט";
    }
    if (emailError || nameError || phoneError || contactError || problemError || messageError) {
      this.setState({
        emailError,
        nameError,
        phoneError,
        contactError,
        problemError,
        messageError,
      });
      return false;
    }
    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const data = {
        fullName: this.state.fullName,
        email: this.state.email,
        phone: this.state.phone,
        howToContact: this.state.howToContact,
        problem: this.state.problem,
        message: this.state.message,
        access_token: "ikkarkrp6iwwzjrstnwfs06c",
      };
      send("default_service", "template_rnhwgvi", data);

      this.setState({
        fullName: "",
        email: "",
        phone: "",
        // howToContact: "",
        problem: "",
        message: "",
        isSent: true,
        nameError: "",
        emailError: "",
        phoneError: "",
        contactError: "",
        problemError: "",
        messageError: "",
      });
    }
  };

  render() {
    return (
      <form className="maxwidthform">
        <label className="flexthis">
          <div className="title">
            <i className="fas fa-user"></i>
          </div>
          <div className="inputcontainer">
            <input
              type="text"
              name="fullName"
              placeholder="שם מלא"
              value={this.state.fullName}
              onChange={e => this.change(e)}
            />
            {this.state.nameError ? <div className="error">{this.state.nameError}</div> : null}
          </div>
        </label>
        <br /> <br />
        <label className="flexthis">
          <div className="title">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="inputcontainer">
            <input
              name="email"
              type="email"
              placeholder="דואר אלקטרוני"
              value={this.state.email}
              onChange={e => this.change(e)}
            />
            {this.state.emailError ? <div className="error">{this.state.emailError}</div> : null}
          </div>
        </label>
        <br /> <br />
        <label className="flexthis">
          <div className="title">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="inputcontainer">
            <input
              type="text"
              name="phone"
              placeholder="טלפון"
              value={this.state.phone}
              onChange={e => this.change(e)}
            />
            {this.state.phoneError ? <div className="error">{this.state.phoneError}</div> : null}
          </div>
        </label>
        <br />
        <div className="inputcontainer">
          <p className="titlep">
            <i className="fas fa-comments"></i>
            <span className="titleptext">כיצד תרצו שאצור איתכם קשר לתיאום מפגש?</span>
          </p>
          <div className="flexthis">
            <label className="flexthis radiolabel">
              <input type="radio" name="howToContact" value="phoneCall" onChange={e => this.change(e)} />
              שיחת טלפון
            </label>

            <label className="flexthis radiolabel">
              <input type="radio" name="howToContact" value="whatsapp" onChange={e => this.change(e)} />
              וואצאפ/Whatsapp
            </label>

            <label className="flexthis radiolabel">
              <input type="radio" name="howToContact" value="email" onChange={e => this.change(e)} />
              אימייל
            </label>
          </div>
          {this.state.contactError ? <div className="error">{this.state.contactError}</div> : null}
        </div>
        <br />
        <label className="flexthis title">
          <i className="fas fa-info"></i>
          <span className="titleptext"> סיבת הפנייה:</span>
          <div className="inputcontainer">
            <select name="problem" value={this.state.problem} onChange={e => this.change(e)} className="reason">
              <option className="grey" value="">
                בחרו:
              </option>
              <option value="agression">חתול תוקפן</option>
              <option value="litterbox">צרכים מחוץ לארגז</option>
              <option value="loudcat">יללנות יתר</option>
              <option value="connectcats">חיבור בין חתולים</option>
              <option value="connectcatdog">חיבור בין חתול וכלב</option>
              <option value="adoption">ייעוץ לפני אימוץ</option>
              <option value="other">ייעוץ כללי/שאלה כללית/אחר</option>
            </select>
          </div>
        </label>
        {this.state.problemError ? <div className="error">{this.state.problemError}</div> : null}
        <br />
        <div className="inputcontainer">
          <label className="flexthis">
            {" "}
            <div className="title descript">תיאור הפנייה:</div>
          </label>
          <textarea
            name="message"
            rows="5"
            maxLength="500"
            value={this.state.message}
            placeholder="תיאור כללי של עד 500 תוים"
            onChange={e => this.change(e)}
          ></textarea>
          {this.state.messageError ? <div className="error">{this.state.messageError}</div> : null}
        </div>
        <br />
        <div className="helpmecenter">
          <button type="submit" className="formbutton" onClick={e => this.onSubmit(e)}>
            שליחה
          </button>
          <h2 className="submitted" style={{ color: this.state.isSent ? "black" : "transparent" }}>
            פנייתך התקבלה
          </h2>
        </div>
      </form>
    );
  }
}
