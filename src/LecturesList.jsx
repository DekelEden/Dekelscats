import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './css/lectures-list.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { lecturesData } from './lecturesData'
import { NewlineToBr } from './NewlineToBr'

export default function LecturesList() {
  return (
    <div className="lecturediv">
      <div className="pinkback lecturepink">
        <div className="withmaxwidthnoflex">
          <h1>הרצאות</h1>
        </div>
      </div>

      <div className="pinkback">
        <div className="mainContainer">
          <ul className="lectures-list">
            {lecturesData.map(({ key, title, short_description, image, path }) => (
              <li key={key} className="lecture-item">
                <Link to={path}>
                  <img src={image} alt={title} />
                </Link>
                <div className="lecture-content">
                  <h2>
                    <Link to={path}>{title}</Link>
                  </h2>
                  <p>
                    <NewlineToBr text={short_description} />
                  </p>
                  <Link className="button" to={path}>
                    לרכישה
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lectureForm">
        <div className="lectureNoImage">
          <div className="lectureinfo">
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
                <a href="mailto:contact@dekelscats.com">contact@dekelscats.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
