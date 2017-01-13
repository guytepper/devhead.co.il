---
layout: post
title: טיפים וטריקים ל- Chrome DevTools
---
בשבועות האחרונים נחשפתי למספר טיפים וטריקים שלא הכרתי ב- Chrome DevTools, גם לאחר שנים של שימוש בדפדפן. החלטתי לשתף כמה מהם כאן.

## Warn Before Quitting
הטיפ הראשון יותר רלוונטי למשתמשי מקינטוש. הרבה פעמים כשאני עובר בין טאבים בעזרת `CMD+ספרה`, יוצא שאני לוחץ בטעות על `CMD+Q`, הדפדפן יוצא בפתאומיות ואני מרגיש כאילו חרב עליי עולמי.
בדיוק בגלל מקרים כאלו החברים בכרום חשבו על דרך קלה למנוע אסונות כאלו.

גשו לתפריט Chrome ולאחר מכן לחצו על Warn Before Quitting.

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

על מנת להסתיר או להציג אלמנטים, ניתן ללחוץ על האלמנט ולאחר מכן על `H`  

<img src="/images/posts/devtools-tips/hide-element.gif" alt="">

**הצגת אלמנטים במרכז המסך**  

אם אתם לא בטוחים איפה אלמנט נמצא, לחצו עליו קליק ימני ואז Scroll into View

<img src="/images/posts/devtools-tips/scroll-into-view.gif" alt="">

**איזה עיצובים מוחלים על אלמנט**  
לפעמים יש כמה הגדרות עיצוביות זהות שמוחלים על אותו האלמנט. למשל יכול להיות שגודל מסך מסוים ה- `margin` יהיה `50px`, ובגודל מסך אחר הוא יהיה `100px`.
על מנת לדעת איזו הגדרה באמת מוחלת על האלמנט, ניתן ללחוץ על computed ולראות מה באמת נמצא על האלמנט.

## צבעים
אנחנו עדיין בחלונית האלמנטים, אבל נתרכז בנושא הצבעים כעת.

**שינוי פורמט צבע**  
