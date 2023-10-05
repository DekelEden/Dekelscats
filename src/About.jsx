import React from 'react'
import ReactDOM from 'react-dom'
import './css/about.css'
import { PHONE_NUMBER } from './consts'

export default function About() {
  let goToContact = () => (document.location.href = '/contact')

  return (
    <div className="aboutdiv">
      <div className="pinkback">
        <div className="withmaxwidth centered">
          <div>
            <img className="meAndCats" src="/meandrocket2.jpeg" />
          </div>
          <div className="aboutpagetext">
            <h1>קצת עליי</h1>
            <p>
              שמי דקל, יועצת להתנהגות חתולים ובוגרת תואר ראשון ושני בחוג למדעי בעלי החיים ווטרינריה
              של האוניברסיטה העברית.
              <br />
              <br />
              בעלי חיים הינם חלק בלתי נפרד מחיי. במהלך שנותיי באקדמיה למדתי רבות אודות הפיזיולוגיה,
              האנטומיה והאתולוגיה של מגוון בעלי חיים, ובשנים האחרונות הקדשתי חלק לא מבוטל מזמני
              בלימוד התנהגותם של חתולים, הבנת צרכיהם וחיפוש אחר דרכים לשפר את רווחתם בבית.
              <br />
              <br />
              בסיום לימודיי, הוכשרתי כמאבחנת, יועצת ומטפלת התנהגותית לחתולים בשיטה החיובית ("Force
              free") בהתמחות תחת הנחייתה של אפרת סימון.
              <br />
              <br />
              בעבודתי כיועצת התנהגות אני מסייעת לבעלי חתולים להתמודד עם מגוון בעיות, מספקת להם כלים
              לתקשורת נכונה עם חתולים, מייעצת ומנחה לגידול נכון של חתולי בית תוך דגש על צרכיו
              הטבעיים של החתול והדרכים למימושם בסביבה הביתית.
              <br />
              <br />
              אני מאמינה שעם ליווי מקצועי, סבלנות והרבה אהבה, יכול כל אדם להגיע לחיים שקטים
              והרמוניים עם חתוליו ולהנות משפע היתרונות של מחייה בסביבת בעלי חיים.
            </p>
          </div>
        </div>
      </div>
      <div className="lightpinkback secondlightpink">
        <div className="withmaxwidthnoflex">
          <h2 className="whatcanido">כיצד תוכלו להעזר בי?</h2>
          <div className="whatcanidoText">
            <p>
              אני עורכת ביקורי בית, פגישות זום ומלווה בשאלות אונליין לנוחיותכם.
              <br /> <br />
              ניתן לפנות אליי לפתרון מגוון בעיות התנהגותיות שיש לכם עם חתולכם, לייעוץ כללי, הכנת
              חתולכם לשינויים גדולים צפויים (כמו מעבר דירה, לידה ועוד), לטיפים להכנת הבית לפני אימוץ
              חתולכם או לכל שאלה אחרת.
            </p>
            <div className="meandrocketpic smallerpic">
              <img src="/15.jpg" />
            </div>
          </div>
        </div>
        <div className="contactForm newcontact">
          <div className="contactNoImage">
            <div className="contactheader">
              <h2>צרו קשר</h2>
            </div>
            <div className="contactinfo ">
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
            <button onClick={goToContact}> טופס יצירת קשר</button>
          </div>
        </div>
      </div>
    </div>
  )
}
