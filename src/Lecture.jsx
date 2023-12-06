import React from 'react'
import './css/lecture.css'
import { lecturesData } from './lecturesData'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import { NewlineToBr } from './NewlineToBr'
import VideoJS from './Video'
import { PHONE_NUMBER } from './consts'

const API_BASE =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5001/casraf-dev/us-central1/api/dekel'
    : 'https://us-central1-casraf-dev.cloudfunctions.net/api/dekel'
//

export default function Lecture() {
  const { id } = useParams()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [videoURLs, setVideoURLs] = React.useState([])
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const {
    title,
    long_description,
    page_subtitle,
    image,
    document_url,
    toc,
    video_preview_image,
    toc_title,
    video_titles,
  } = React.useMemo(() => lecturesData.find((x) => x.key === id), [id])

  const getVideoURL = React.useCallback(
    async (e) => {
      e.preventDefault()
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `${API_BASE}/get_video_urls?${new URLSearchParams({
            username,
            key: password,
            video_key: id,
          }).toString()}${process.env.NODE_ENV === 'development' ? '&refresh=1' : ''}`,
        )
        const json = await response.json()
        if (json.error) {
          throw new Error(json.error.map((issue) => issue.message).join(', ') || 'שגיאה לא ידועה')
        }
        setVideoURLs(json.urls)
        setCurrentVideoIndex(0)
      } catch (e) {
        console.error(e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    },
    [id, password, username],
  )

  const playerRef = React.useRef(null)

  const videoJsOptions = React.useMemo(
    () => ({
      // autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      poster: video_preview_image,
      sources: [
        {
          src: videoURLs[currentVideoIndex],
          type: 'video/mp4',
        },
      ],
    }),
    [currentVideoIndex, videoURLs, video_preview_image],
  )

  const handlePlayerReady = React.useCallback((player) => {
    playerRef.current = player
  }, [])

  const purchaseButton = (
    <div className="lecturePurchaseContainer">
      <a className="button lectureButton" href={document_url} target="_blank" rel="noreferrer">
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
              {videoURLs.length ? (
                <div style={{ height: '2rem' }} />
              ) : (
                <>
                  {page_subtitle ? <h2>{page_subtitle}</h2> : <div style={{ height: '2rem' }} />}
                  <div>{purchaseButton}</div>
                </>
              )}
            </div>
          </div>
          {videoURLs.length ? null : (
            <div className="lecture-details-container">
              <div className="lightpinkback">
                <div className="withmaxwidthnoflex">
                  <p>
                    <NewlineToBr text={long_description} />
                  </p>
                  {toc.length > 0 && (
                    <p>
                      <h4>{toc_title}</h4>
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
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {videoURLs.length ? (
        <>
          <div className={['mainContainer', video_titles.length ? 'hasSidebar' : ''].join(' ')}>
            {video_titles.length ? (
              <ul className="videoSidebar">
                {video_titles.map((title, i) => (
                  <li key={i}>
                    <button
                      className={['sidebarItem', i === currentVideoIndex ? 'active' : ''].join(' ')}
                      onClick={() => setCurrentVideoIndex(i)}
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            <div
              className={['videoContainer', videoURLs.length > 1 ? 'hasSidebar' : '']
                .filter(Boolean)
                .join(' ')}
            >
              <VideoJS
                options={videoJsOptions}
                onReady={handlePlayerReady}
                poster={video_preview_image}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="pinkback">
          <div className="mainContainer">
            <div className="lectureOnboardingContainer">
              {purchaseButton}
              <form className="lectureFormContainer" onSubmit={getVideoURL}>
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
                  <button type="submit" disabled={loading || !username.trim() || !password.trim()}>
                    צפייה בהרצאה
                  </button>
                </div>
              </form>
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
                {PHONE_NUMBER}
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
