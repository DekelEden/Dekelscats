import React from 'react'
import ReactDOM from 'react-dom'
import './css/lecture.css'
import { lecturesData } from './lecturesData'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { NewlineToBr } from './NewlineToBr'

const API_BASE = 'https://us-central1-casraf-dev.cloudfunctions.net/api/dekel'

export default function Lecture() {
  const { id } = useParams()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [videoURL, setVideoURL] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const { title, long_description, page_subtitle, image, document_url, toc } = React.useMemo(() =>
    lecturesData.find((x) => x.key === id),
  )

  const getVideoURL = React.useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `${API_BASE}/get_video_url?${new URLSearchParams({
          username,
          key: password,
          video_key: id,
        }).toString()}`,
      )
      const json = await response.json()
      console.debug('🚀 | file: Lecture.jsx:25 | getVideoURL | json:', json)
      if (json.error) {
        throw new Error(json.error)
      }
      setVideoURL(json.url)
    } catch (e) {
      console.error(e)
      console.debug('🚀 | file: Lecture.jsx:29 | getVideoURL | e:', e)
      const messages = {
        unauthorized: 'שם משתמש או סיסמה לא נכונים',
        missing_username: 'נא להכניס שם משתמש וסיסמה',
      }
      setError(messages[e.message] || e.message || 'שגיאה לא ידועה')
    } finally {
      setLoading(false)
    }
  }, [id, password, username])

  const purchaseButton = (
    <div className="lecturePurchaseContainer">
      <a className="button lectureButton" href={document_url}>
        מילוי פרטים ורכישה
      </a>
    </div>
  )

  return (
    <div className="lecture-container">
      <div className="lecturepink">
        <div className="top-area">
          <div className="pinkback lecturepink">
            <div>
              <img className="catform" src={image} alt={title} />
              <h1>{title}</h1>
              {videoURL ? null : (
                <>
                  <h2>{page_subtitle}</h2>
                  <div>{purchaseButton}</div>
                </>
              )}
            </div>
          </div>
          {videoURL ? null : (
            <div className="lecture-details-container">
              <div className="lightpinkback">
                <div className="withmaxwidthnoflex">
                  <p>
                    <NewlineToBr text={long_description} />
                  </p>
                  <p>
                    <h4>מה בתוכנית?</h4>
                    <ul>
                      {toc.map(({ title, description }, i) => (
                        <li key={i}>
                          <b>
                            <u>
                              <NewlineToBr text={title} />
                            </u>
                          </b>
                          {' - '}
                          <NewlineToBr text={description} />
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {videoURL ? (
        <div className="mainContainer">
          <div className="videoContainer">
            <video className="" controls>
              <source src={videoURL} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : (
        <div className="pinkback">
          <div className="mainContainer">
            <div className="lectureOnboardingContainer">
              {purchaseButton}
              <div className="lectureFormContainer">
                <h4 align="center">כבר רכשתם? הכניסו פרטים לצפייה</h4>
                <div className="inputcontainer">
                  <input
                    name="username"
                    type="text"
                    placeholder="שם משתמש"
                    value={username}
                    disabled={loading}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="inputcontainer">
                  <input
                    name="password"
                    type="password"
                    placeholder="סיסמה"
                    value={password}
                    disabled={loading}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error ? <div className="error">{error}</div> : null}
                <div className="inputcontainer buttonContainer">
                  <button type="button" disabled={loading} onClick={getVideoURL}>
                    צפייה בהרצאה
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
