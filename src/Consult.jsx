import React from 'react'
import ReactDOM from 'react-dom'
import './css/consult.css'
import { PHONE_NUMBER } from './consts'

export default function Consult() {
  let goToContact = () => (document.location.href = '/contact')

  return (
    <div className="consultdiv">
      <div className="pinkback consultpink">
        <div className="withmaxwidthnoflexdif">
          <div className="headerpic">
            <img src="/catscounter.jfif" alt="חתול על שיש" />
          </div>
          <h1>למי מיועד הייעוץ?</h1>
          <p>
            היעוץ מיועד לכל אדם אשר מעוניין להבין טוב יותר את החתול שלו, למנוע בעיות התנהגות או
            לפתור בעיית התנהגות קיימת ולשפר את איכות החיים של החתול וכלל חברי הבית.
            <br />
            <br />
            אוכל לסייע במגוון מצבים כמו: תוקפנות, עשיית צרכים מחוץ לארגז החול, הרס רהיטים בבית,
            יללנות יתר, הכנה למעבר דירה עם חתולים, מציאת דרכים להפגת שעמום בקרב חתולים, חיבור בין
            חתולי הבית, חיבור בין כלב וחתול, ייעוץ לפני אימוץ, התאמת הבית לצרכי החתול ועוד.
          </p>
        </div>
      </div>

      <div className="lightpinkback consultlightpink">
        <div className="withmaxwidthnoflex">
          <h2>תהליך הייעוץ:</h2>
          <p>
            לפני שנפגש, יש להפנות את החתול לבדיקה וטרינרית על מנת לשלול את קיומה של בעיה רפואית אשר
            עשויה לגרור בעיה התנהגותית.
            <br />
            לאחר מכן, נוכל להמשיך ולאבחן את הטריגר לבעיה באמצעים התנהגותיים.
            <br />
            <br />
            כל חתול הוא ייחודי, ונרצה לקיים פגישות בהן החתול (והבעלים) מרגיש בנוח ובביטחון, ולכן
            כתלות בבעיה ובאופי החתול, נוכל להחליט יחדיו האם מדובר בבעיה שניתן לפתור במפגשים
            וירטואליים דרך הזום, או לקיים פגישה פרונטלית
            <span className="notes">*</span> בביתכם.
            <br />
            <br />
            הפגישה תורכב מחלק תיאורטי, אשר מורכב משלב <span className="underline">אבחון</span> בו
            אכיר אתכם, את מבנה הבית את שגרת חייו של חתולכם ואת פרטי המקרה, ובשלב הבא נבנה יחדיו{' '}
            <span className="underline">תוכנית פעולה</span> מפורטת לפתרון הבעיה. החלק השני של הפגישה
            יהיה חלק מעשי בהתאם לפרטי המקרה.
            <br />
            <br />
            לאחר הפגישה, אשלח לכם דוח מפורט של סיכום המפגש, ותוכלו לקבל מענה טלפוני (בשיחות או
            בהודעות) ותמיכה מלאה בהמשך התהליך גם בין המפגשים.
            <br />
            <br />
            <span className="notes actualnote">
              *מפגשים פרונטליים נערכים בצפון ובמרכז בהתאם לזמינות.
            </span>
          </p>
        </div>
      </div>
      <div className="pinkback consultpink part2">
        <div className="withmaxwidthnoflex">
          <h2>חבילות הייעוץ:</h2>
          <ul>
            <li>
              <span className="bold">חד פעמית - </span>
              פגישת זום או פגישה פרונטלית חד פעמית באורך שעה – מתאים לשאלות נקודתיות או לקבלת מידע
              במקרים בהם לא נדרש טיפול בבעיה התנהגותית מסוימת.
            </li>
            <li>
              <span className="bold">חבילת פרימיום - </span>3 מפגשי זום/מפגשים פרונטליים/שילוב של
              השניים על בסיס שבועי + ליווי אישי במשך חודש בו תוכלו לשאול שאלות, לשלוח לי סרטונים
              למעקב ולקבל את הפידבק שלי על ההתקדמות או תרגילי האימון.
            </li>
          </ul>
        </div>
      </div>

      <div className="contactForm">
        <div className="contactNoImage">
          <div className="contactheader">
            <h2>ליצירת קשר ורכישת חבילת ייעוץ:</h2>
          </div>
          <div className="contactinfo">
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
  )
}
