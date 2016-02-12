---
layout: post
title: Flexbox - מדריך למתחילים - חלק א׳
excerpt: Flexbox פותר הרבה מהבעיות שאנו נתקלים בהן מדי יום. אם אתם מעצבים אתר רספונסיבי, Flexbox הופך את כל העבודה לקלה ולהגיונית - הוא מיועד בדיוק למטרה זו.
---
בקיץ האחרון התחלתי ללמוד פיתוח אתרים. אני חושב שאני בר מזל, כי החיים של מפתחת אתרים ב-2016 הרבה יותר קלים מחיים של מפתחת אתרים ב-2006.

אני לא מתיימר לדעת איך זה להיות מפתח אתרים לפני 10 שנים, אבל התנסות קלה בטכניקות שהשתמשו (ועדיין משתמשים) בהן, כמו שימוש בטבלה וב- float על מנת לעצב דף אינטרנט, גרמו לי מהר מאוד כאב ראש, והרי די ברור שהמאפיינים הללו לא יועדו לבצע את התפקיד החדש שהמציאו להם.

רגע לפני שהשלמתי עם העובדה שאני הולך להעביר את השנים הקרובות בלנקות floats ולשים תוכן בטבלאות נסתרות, גיליתי שיש מאפיין שיכול לפתור את רוב הבעיות שלי.

### Flexbox

Flexbox הוא כינוי ל- [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/), שהוא בעצם Box Model חדש שמותאם במיוחד לממשקי משתמש רספונסיבים. כפי שנראה מיד, הילדים של אותו אלמנט שמוגדר כפלקסבוקס יכולים להיות מסודרים באופן אופקי או אנכי, ונוכל לקבוע מה יקרה עם השטח הפנוי שהם משאירים.

Flexbox פותר הרבה מהבעיות שאנחנו נתקלים בהן מדי יום - הגדרת Grid System, סידור Layout וקומפוננטות, מירכוז אנכי ועוד. אם אתם מעצבים אתר רספונסיבי, Flexbox הופך את כל העבודה לקלה ולהגיונית - הוא מיועד בדיוק למטרה זו.

[כל הדפדפנים כיום](http://caniuse.com/#search=flexbox) תומכים בפלקסבוקס כך שאין סיבה לא להשתמש בו, אלא אם כן אתם צריכים לתמוך ב-IE 9 ומטה. למרות זאת, הרבה מפתחים חוששים מפלקסבוקס - הוא מביא איתו הרבה מאפיינים וערכים חדשים שגורמים לו להראות מסובך הרבה יותר ממה שהוא, ולכן המדריך מחולק ל-2 חלקים וכללתי בו הרבה דמואים.

אלמנט ה"אב", או הקונטיינר, שאותו מגדירים כאלמנט פלקסבוקס מכונה **Flex Container**, והילדים שלו מכונים **Flex Items**. בחלק הראשון של המדריך נתעסק בתכונות המוגדרות על הקונטיינר, ובחלק השני בתכונות המוגדרות על הילדים.

אני ממליץ לפתוח את הדמואים בטאבים נפרדים, ובכל מקרה להתנסות בעצמכם במקביל; לא משנה כמה תקראו על פלקסבוקס, בלתי אפשרי להבין איך הוא עובד בלי להתנסות איתו בפועל.

### Flex Container
על מנת להתחיל להשתמש ב- Flexbox עליכם להגדיר אלמנט עם `display: flex`, מה שכאמור יהפוך אותו להיות **Flex Container** ואת הילדים של אותו אלמנט ל- **Flex Items**.

<p data-height="265" data-theme-id="0" data-slug-hash="adEQWq" data-default-tab="result" data-user="guytepper" data-preview="false" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/adEQWq/'>Flexbox Activate Demo</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

שימו לב שלא נגענו כאן ב- Flex Items. מספיק להגדיר את הקונטיינר כפלקס, והילדים שלו, כברירת מחדל, יפרסו אחד ליד השני בשורה.

### שינוי כיוון ה- Flex Container
ניתן להגדיר את הכיוון שבו יפרסו הילדים ע"י הגדרת `flex-direction` בקונטיינר ל-`row` (ברירת מחדל) או ל- `column`.

<aside class="post__note" id="flexbox-illu">
<p>
שינוי הכיוון ישנה גם את ה<strong id="main-axis" class="anchor-highlight">"ציר הראשי"</strong> (main axis) ו<strong id="cross-axis" class="anchor-highlight">"הציר המשני"</strong> (cross axis) שבו פלקסבוקס עובד. כאשר הכיוון מוגדר כ-<code class="highlighter-rouge">row</code>, הציר הראשי יהיה מימין לשמאל (אם אנחנו עובדים בעברית) והציר המשני יהיה מלמעלה למטה. אם נשנה את הכיוון ל-<code class="highlighter-rouge">column</code> זה יתהפך - הציר הראשי יהיה מלמעלה למטה והציר המשני מימין לשמאל.
</p>
<figure>
<a href="/images/flexbox-illu.svg" target="_blank"><img src="/images/flexbox-illu.svg"></a>
<figcaption>האנטומיה של פלקסבוקס, כאשר flex-direction: row</figcaption>
</figure>

<p>
הציר הראשי משפיע על ה<strong id="main-size" class="anchor-highlight">"גודל הראשי"</strong> (main size) של פריטי הפלקסבוקס, ויקבע אם הוא יהיה הגובה או הרוחב. כאשר הציר הראשי הוא מימין לשמאל הגודל הראשי יהיה הרוחב של פריט, וכאשר הוא מלמעלה למטה הגודל הראשי יהיה הגובה של הפריט.
</p>
<p>
המושגים הללו אולי נשמעים כרגע קצת מבלבלים ולא חשובים במיוחד, אך חשוב להבין אותם - הם הולכים להשפיע על הדרך בה המאפיינים הבאים שנלמד עליהם יתנהגו.
</p>
</aside>

כבר עכשיו אפשר לראות כמה שימושי Flexbox - בדוגמה הבאה נסו להקטין ולהגדיל את גודל הדפדפן ושימו לב איך הילדים מגיבים לשינוי ב- `flex-direction`.

<p data-height="265" data-theme-id="0" data-slug-hash="zrRBXj" data-default-tab="result" data-user="guytepper" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/zrRBXj/'>flex-direction Responsive Usage</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

*בנוסף ל- `row` ו- `column`, קיימים גם הערכים `row-reverse` ו- `column-reverse`, שמבצעים את אותה הפעולה רק הפוך.*

### שובר שורות
כפי שראינו בדוגמה הראשונה, Flex Items תמיד יפרסו על אותה השורה. זה קורה בגלל המאפיין `flex-wrap` שמוגדר ל- `nowrap` כברירת מחדל.

`flex-wrap` קובע אם ה- Flex Items יוכלו ״לגלוש״ לשורות חדשות, או שיואלצו להשאר על גבי שורה אחת. אם נגדיר `flex-wrap: wrap`, הפריטים יוכלו לגלוש ולהפרס בשורות חדשות (או עמודות, כפי שמוגדר ב- `flex-direction`).

<p data-height="268" data-theme-id="0" data-slug-hash="NxygBx" data-default-tab="result" data-user="guytepper" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/NxygBx/'>flex-wrap Demo</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

*ניתן להשתמש ב-`flex-flow` כקיצור של `flex-direction` ו- `flex-wrap`. לדוגמה:*

{% highlight css %}
flex-flow: column wrap;
{% endhighlight %}

### יישור עם פלקסבוקס
עד עכשיו, יישור אלמנטים בדף אינטרנט היה כאב ראש לא קטן. פלקסבוקס הופך את כל העיסוק ביישור אלמנטים לקליל, בעזרת 3 מאפיינים חדשים: `justify-content`, `align-items` ו- `align-content`

#### `justify-content`

קובע את יישור ה- Flex Items על גבי ה[ציר הראשי](#main-axis). לוקח את השטח הפנוי שנשאר בכל שורה, ומחלק אותו בהתאם לערך שתגדירו לו. הערכים שניתן להגדיר הם:

* `flex-start` - ברירת מחדל. האלמנטים צמודים אחד לשני מתחילת השורה.
* `flex-end` - האלמנטים צמודים אחד לשני מסוף השורה.
* `center` - האלמנטים צמודים אחד לשני באמצע השורה.
* `space-between` - האלמנטים פרוסים לרוחב השורה באופן שווה; האלמנט הראשון יופיע בתחילת השורה והאחרון בסופה.
* `space-around` - האלמנטים פרוסים לרוחב השורה עם רווחים שווים ביניהם. שימו לב שזה לא נראה ככה בפועל, מפני שהמרווח בין האלמנט הראשון בשורה לקונטיינר הוא יחידה אחת, והמרווח בינו לבין האלמנט הבא הוא שתי יחידות - הוא לוקח בחשבון גם את הרווח של האלמנט השני.

<p data-height="350" data-theme-id="0" data-slug-hash="wMXYgo" data-default-tab="result" data-user="guytepper" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/wMXYgo/'>justify-content Demo</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

#### `align-items`
קובע את יישור האלמנטים על גבי ה[ציר המשני](#cross-axis). זהה ל-`justify-content`, רק הפוך.

* `flex-start` - צד האלמנטים הפונה לכיוון התחלת הציר המשני ממוקם עליו.
* `flex-end` - צד האלמנטים הפונה לכיוון סוף הציר המשני ממוקם עליו.
* `center` - האלמנטים ממורכזים על גבי הציר המשני.
* `baseline` - האלמנטים מיושרים לפי ה-[baseline](https://en.wikipedia.org/wiki/Baseline_(typography)) שלהם (ראו דוגמה).
* `stretch` - ברירת מחדל. מגדיל את האלמנטים עד למילוי הקונטיינר.

<p data-height="350" data-theme-id="0" data-slug-hash="QyxJEV" data-default-tab="result" data-user="guytepper" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/QyxJEV/'>align-items Demo</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

#### `align-content`
קובע את יישור **השורות** על גבי ה**ציר המשני**, במידה ויש בו מקום פנוי. לא משפיע כאשר יש רק שורה אחת של Flex items.

* `flex-start` - השורות צמודות אחת לשנייה מתחילת הקונטיינר.
* `flex-end` - השורות צמודות אחת לשנייה מסוף הקונטיינר.
* `center` - השורות צמודות אחת לשנייה באמצע הקונטיינר.
* `space-between` - השורות פרוסות לאורך הקונטיינר באופן שווה; שורה ראשונה תופיע בתחילת הקונטיינר והאחרונה בסופו.
* `space-around` - השורות פרוסות לאורך הקונטיינר באופן שווה עם רווחים שווים ביניהן.
* `stretch` - ברירת מחדל. מגדיל את השורות עד למילוי הקונטיינר.

<p data-height="380" data-theme-id="0" data-slug-hash="rxKQrV" data-default-tab="result" data-user="guytepper" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/rxKQrV/'>align-content Demo</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### וכולם ביחד !
כפי שראיתם, מלאכת יישור האלמנטים כעת פשוטה מתמיד. שילוב של כל המאפיינים הללו יחדיו מאפשרים לנו לעשות דברים שעד כה היו מסובכים למדי, כמו למשל מרכוז באמצע הדף.

<p data-height="407" data-theme-id="0" data-slug-hash="rxKQRx" data-default-tab="result" data-user="guytepper" class='codepen'>See the Pen <a href='http://codepen.io/guytepper/pen/rxKQRx/'>Flexbox Alignment Demo</a> by Guy (<a href='http://codepen.io/guytepper'>@guytepper</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

כאן מסתיים החלק הראשון של המדריך. אני מקווה שגם אתם התאהבתם בפלקסבוקס!  

בחלק הבא (שיעלה בקרוב) נלמד על Flex Items ועל המאפיינים הייחודיים שלהם. אם עד עכשיו לא התרשמתם מפלקסבוקס - החלק הבא יפיל אתכם מהכסא (-:
