---
layout: post
title: טיפים וטריקים ל- Chrome DevTools
---
בשבועות האחרונים נחשפתי למספר טיפים וטריקים שלא הכרתי ב- Chrome DevTools, גם לאחר שנים של שימוש בדפדפן. החלטתי לשתף כמה מהם כאן.

## Warn Before Quitting
הטיפ הראשון יותר רלוונטי למשתמשי מקינטוש. הרבה פעמים כשאני עובר בין טאבים בעזרת `CMD+ספרה`, יוצא שאני לוחץ בטעות על `CMD+Q`, הדפדפן יוצא בפתאומיות ואני מרגיש כאילו חרב עליי עולמי.
בדיוק בגלל מקרים כאלו החברים בכרום חשבו על דרך קלה למנוע אסונות כאלו.

גשו לתפריט Chrome ולאחר מכן לחצו על **Warn Before Quitting**.

<img src="/images/posts/devtools-tips/warn-before-quitting@1x.jpg"
     srcset="/images/posts/devtools-tips/warn-before-quitting@2x.jpg 2x"
    alt="" width="300">


כעת, כאשר תלחצו על `CMD+Q`, תתבקשו להחזיק במקשים על מנת לסגור את הדפדפן.

<img src="/images/posts/devtools-tips/hold-to-quit@1x.jpg"
     srcset="/images/posts/devtools-tips/hold-to-quit@2x.jpg 2x"
    alt="" width="300">

## Elements
הטיפים הבאים יתייחסו לחלונית האלמנטים באינספקטור.  

**הסתרת אלמנטים**  

על מנת להסתיר או להציג אלמנטים, ניתן ללחוץ על האלמנט ולאחר מכן על `H`.

<img src="/images/posts/devtools-tips/hide-element.gif" alt="">

**הצגת אלמנטים במרכז המסך**  

אם אתם לא בטוחים איפה אלמנט נמצא בעמוד, לחצו עליו קליק ימני ואז **Scroll into View**.

<img src="/images/posts/devtools-tips/scroll-into-view.gif" alt="">

**איזה עיצובים מוחלים על אלמנט**  
לפעמים ישנן כמה הגדרות עיצוביות זהות שמוחלים על אותו האלמנט. למשל יכול להיות שגודל מסך מסוים ה- `margin` יהיה `50px`, ובגודל מסך אחר הוא יהיה `100px`.
על מנת לדעת איזו הגדרה באמת מוחלת על האלמנט, ניתן ללחוץ על computed ולראות מה באמת נמצא על האלמנט.

<img src="/images/posts/devtools-tips/computed-props@1x.jpg"
     srcset="/images/posts/devtools-tips/computed-props@2x.jpg 2x"
    alt="" width="300">


## צבעים
אנחנו עדיין בחלונית האלמנטים, אבל נתרכז בנושא הצבעים כעת.

**שינוי פורמט צבע**  
על מנת לשנות את הפורמט שבו הצבע מוצג, יש ללחוץ על `Shift` וקליק על הצבע.

<img src="/images/posts/devtools-tips/change-color-format.gif" alt="">

**Color Palettes**  
ניתן ליצור בכרום פלטות צבעים מותאמות אישית, אבל גם להשתמש בכאלה קיימות. 2 פלטות הצבעים שמגיעות עם הדפדפן הן Material Design ו- Page Colors.  
את פלטת הצבעים הראשונה אתם וודאי מכירים, והשניה תציג את הצבעים הפופולאריים בדף שנטען.

<img src="/images/posts/devtools-tips/color-palettes.gif" alt="">

**Color Picker**  
אם תרצו לבחור צבע שכבר קיים איפשהוא בדף, ניתן להשתמש ב- Color Picker המובנה בדפדפן.

<img src="/images/posts/devtools-tips/color-picker.gif" alt="">

## Console
קונסול הג׳אווהסקריפט יכול לבצע המון דברים שהרבה אנשים לא מודעים אליהם. הנה כמה מהם.

**בחירת אלמנטים אחרונים**  
אם תרצו לגשת לאלמנטים האחרונים שבחרתם בחלונית האלמנטים דרך הקונסול, תוכלו לעשות זו על ידי כתיבה של `$1` / `$2` / `$3` / `$4`, כשכל ספרה מסמנת את מספר האלמנט בהיסטוריה.

**querySelector**  
זה פיצ׳ר ממש מגניב שמאפשר פונקציונאליות דומה לזו של jQuery. אם נרצה לחפש אלמנטים בדף, נוכל לכתוב את הפקודה הבאה:

* `()$` - מתפקד כמו `()document.querySelector` ומחזיר את האלמנט הראשון שעונה על הבקשה. לדוגמה `('div')$`
* `()$$` - מתפקד כמו `()document.querySelectorAll` ומחזיר את כל האלמנטים שעונים על הבקשה. לדוגמה `('.users')$$`

**ניקוי הקונסול**  
אם תרצו לנקות את חלונית הקונסול, לחצו על `CMD + K`

## Sources

**Unminify**  
הרבה פעמים אנחנו רוצים להסתכל על קוד שכתבו / שאנחנו כתבנו ועבר מיניפקציה, כך שהוא לא קריא. כמה נחמד שכרום יודע להתמודד עם קבצים כאלו:

<img src="/images/posts/devtools-tips/unminify.gif" alt="">

**Workspaces**  
זה אמנם פיצ׳ר ידוע בכרום, אבל הרבה מפתחים לא משתמשים בו. מה שהוא מאפשר זה לכתוב קוד ישירות בכרום, ולשמור את השינויים ישירות לקבצי המקור. כך למשל תוכלו לשנות הגדרות עיצוביות בלשונית האלמנטים, והשינויים ישמרו בקוד המקור.

על מנת לאפשר עריכה של קבצים מקומיים דרך כרום, עקבו אחר ההוראות הבאות:
1. לחצו קליק ימני בסיידבר, ואז על **Add Folder to Workspace**.
2. בחרו את התיקייה שאתם רוצים להוסיף.
3. לחצו על **Allow** על ההודעה הצהובה שתופיע בחלק העליון של המסך.

<img src="/images/posts/devtools-tips/add-folder-to-workspace@1x.jpg"
     srcset="/images/posts/devtools-tips/add-folder-to-workspace@2x.jpg 2x"
    alt="" width="300">

4. לחצו קליק ימני על קובץ מקור אשר שייך לאתר עליו אתם עובדים
5. לחצו על **Map to File System Resource**
6. בחרו את הקובץ המקומי אשר תואם את הקובץ אותו בחרתם
7. טענו את העמוד מחדש וכרום ימפה את הקובץ שנטען לקובץ המקומי! 🤗

---

זה הכל לבנתיים. אם אתם מכירים עוד טיפים שלא רשמתי, אתם מוזמנים ל[שלוח לי מייל](mailto:guytepper@gmail.com) ואשמח להוסיף!
