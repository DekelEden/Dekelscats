import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "./css/Home.css";

export default function Home() {
  const history = useHistory();
  let goToContact = () => history.push("/contact");
  return (
    <div className="homediv">
      <div className="pinkback">
        <div className="withmaxwidth">
          <img
            className="meAndSummy"
            src="./13.jpg"
            // src="https://via.placeholder.com/100x100.png"
          />
          <div className="frontpagetext">
            <h1>בעיות עם החתול? אני כאן כדי לעזור</h1>
            <p>
              בשנים האחרונות, יותר ויותר משפחות פותחות את ליבן ואת ביתן ומאמצות
              חתולים.
              <br />
              לצד העליה בביקוש, עולה גם ההבנה כי לא תמיד פשוט "להבין" מה החתולים
              שלנו צריכים, ומשפחות רבות מרגישות שקיים קצר תקשורת בינן לבין החתול
              שלהן, אשר מוביל ללא מעט בעיות התנהגותיות בבית.
              <br />
              <br />
              אני מאמינה, שעם הבנה מעמיקה של צרכי החתול, לצד הכוונה מקצועית
              וטיפול הולם וחיובי, כל בעיית התנהגות ניתנת לפתרון והבעלים יכולים
              לחזור לחיים שקטים ונעימים לצד החתול שלהם.
              <br />
              <br />
              אשמח ללוות אתכם בדרככם ל"לימוד השפה החתולית" וגיבוש מערכת יחסית
              מוצלחת עם חתולכם.
            </p>
          </div>
        </div>
      </div>
      <div className="lightpinkback">
        <div className="withmaxwidthdif">
          <div>
            <h2>הגיע הזמן לנפץ כמה מיתוסים על חתולים:</h2>
            <ul className="catmyths">
              <li>
                <span className="bold">
                  בניגוד לכלבים, חתולים הם לא חיה חברתית -
                </span>
                לא. בניגוד לסטיגמה שהודבקה להם, חתולים הם בהחלט בעל חיים חברתי.
                בטבע, חתולים חיים בקבוצות מטריאכליות המכילות כמה דורות של חתולות
                בעלות קרבת דם. כשיש שפע של משאבים, חתולים יחיו בקבוצות ואף
                יתכרבלו וישחקו אחד עם השני.
              </li>
              <li>
                <span className="bold">
                  כשהחתול שלי עושה משהו רע, אני משפריץ עליו מים ובכך אני "מחנך"
                  אותו להפסיק -
                </span>
                טעות. לא רק שענישה לא מלמדת את החתול שאינכם מעוניינים שיבצע את
                הפעולה, היא גם פוגעת ביחסים בינכם ועלולה לגרום לחתול לפחד מכם
                ולפתח בעיות התנהגות נוספות כתוצאה מכך. חתול אשר מוענש בצורה כזו
                ילמד במקום זאת לבצע את הפעולה מאחורי גבכם. השיטה החיובית מספקת
                אלטרנטיבות ידידותיות ואפקטיביות אשר יאפשרו לכם לתקשר טוב יותר עם
                חתולכם, להבין מדוע מבצע את הפעולה ה"אסורה" וללמד אותו ממה עליו
                להמנע.
              </li>
              <li>
                <span className="bold">
                  אי אפשר לאלף חתולים. החתול שלי לא יקשיב לחינוך, הוא עושה רק מה
                  שבא לו -
                </span>
                לפעמים חתול ימשיך לבצע התנהגות לא רצויה כי אנחנו לא שמים לב
                שאנחנו מחזקים אותה בתגובה שלנו. באילוף חיובי ומדויק שבו רק
                התנהגויות רצויות מחוזקות, עם מספיק התמדה, ועם הבנה מעמיקה של
                צרכי החתול בסביבה הביתית - כל חתול יכול ללמוד להכחיד התנהגות לא
                רצויה.
              </li>
              <li>
                <span className="bold">
                  אין לי הרבה זמן פנוי, אך אוכל לאמץ חתול כי לא צריך להשקיע הרבה
                  זמן בגידולם -
                </span>
                טעות. למעשה, שעמום בקרב חתולים הוא אחד הגורמים הנפוצים לבעיות
                התנהגותיות בבית. חתולים זקוקים לתשומת לב על בסיס יום-יומי,
                במקביל למשחקי העשרה אשר ידמו עבורם פעולת צייד ויאפשרו להם לממש
                את צרכיהם.
              </li>
            </ul>
          </div>
          <div className="picwrapper">
            <img alt="cat" src="./summerisamodel.jfif" />
          </div>
        </div>
      </div>

      <div className="commonProblems">
        <h2 className="problemheader">במה אוכל לעזור?</h2>
        <div className="problems">
          <div className="agression problem">
            <img alt="agressive cat" src="/agression.jpg" />
            <br />
            <span>תוקפנות</span>
          </div>
          <div className="litterbox problem">
            <img alt="cat in litter box" src="/litterbox.jfif" />
            <br />
            <span>צרכים מחוץ לארגז</span>
          </div>
          <div className="meow problem">
            <img alt="cat meowing" src="/meow.jfif" />
            <br />
            <span>יללות</span>
          </div>
          <div className="moving problem">
            <img alt="cat in box" src="/moving.jfif" />
            <br />
            <span>מעבר דירה</span>
          </div>
          <div className="boredom problem">
            <img alt="cat sleeping" src="/boredom.jfif" />
            <br />
            <span>הפגת שעמום</span>
          </div>
          <div className="adopting problem">
            <img alt="kitten" src="adopting.jfif" />
            <br />
            <span>ייעוץ והכנת הבית לפני אימוץ</span>
          </div>
          <div className="twoCats problem">
            <img alt="two cats" src="twocats.jfif" />
            <br />
            <span>חיבור בין חתולים</span>
          </div>
          <div className="catAndDog problem">
            <img alt="cat and dog" src="catanddog.jfif" />
            <br />
            <span>חיבור בין חתול וכלב</span>
          </div>
          <div className="general problem">
            <img alt="cat" src="general.jfif" />
            <br />
            <span>ייעוץ כללי</span>
          </div>
        </div>
      </div>

      <div className="contactForm">
        <div className="contactNoImage">
          <div className="contactheader">
            <h2>צרו קשר</h2>
          </div>
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
                <a href="mailto:contact@dekelscats.com">
                  contact@dekelscats.com
                </a>
              </span>
            </p>
          </div>
          <button onClick={goToContact}> טופס יצירת קשר</button>
        </div>
      </div>
    </div>
  );
}
