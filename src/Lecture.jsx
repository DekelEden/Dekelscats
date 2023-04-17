import React from 'react'
import ReactDOM from 'react-dom'
import './css/lecture.css'

const API_BASE = 'https://us-central1-casraf-dev.cloudfunctions.net/api/dekel'

export default function Lecture() {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [videoURL, setVideoURL] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const getVideoURL = React.useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `${API_BASE}/get_video_url?${new URLSearchParams({
          username,
          key: password,
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
      }
      setError(messages[e.message] || e.message || 'שגיאה לא ידועה')
    } finally {
      setLoading(false)
    }
  }, [password, username])

  return (
    <div className="lecturediv">
      <div className="pinkback lecturepink">
        <div className="withmaxwidthnoflex">
          <img className="catform" src="/catform.jfif" />
          <h1>הרצאה: מדברים חתולית</h1>
          {videoURL ? null : (
            <>
              <h2>תת כותרת</h2>
              <p>תיאור קצר</p>
            </>
          )}
        </div>
      </div>

      <div className="pinkback">
        <div className="mainContainer">
          {videoURL ? (
            <div className="videoContainer">
              <video className="" controls>
                <source src={videoURL} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="lectureFormContainer">
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
          )}
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
                <a href="mailto:lecture@dekelscats.com">lecture@dekelscats.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
