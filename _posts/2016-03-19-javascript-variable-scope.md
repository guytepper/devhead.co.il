---
layout: post
title: JavaScript - תחומים ונהנים
excerpt: איפה המשתנים נשמרים ב- JavaScript ואיך ניתן לגשת אליהם? כל זאת ועוד במדריך זה, אשר יעסוק בחוקי ה- Scope בג׳אווהסקריפ.
---
בכל שפת תכנות אנו רגילים לראות דפוס מסוים: היכולת לשמור ולגשת למשתנים.  
הדפוס הזה מעלה מספר שאלות - **איפה המשתנים נשמרים? ואיך ניתן לגשת אליהם?**

על מנת לענות על שאלות אלו נצטרך רשימת חוקים לפיהם נדע כיצד לכתוב קוד בצורה נכונה ואפקטיבית. רשימת החוקים הזו נקבעת על ידי ה- Scope.

### מה זה Scope?

Scope הוא תחום בו משתנים (ופונקציות) מתקיימים. לכל משתנה יש תחום (Variable Scope), שנקבע על פי המקום בו הכרזנו על המשתנה.  
ב- JavaScript קיימים שני סוגי תחומים - **תחום גלובלי** (Global Scope) ו**תחום מקומי** (Local Scope).  

#### Global Scope
כאשר משתנה נוצר בתחום הגלובלי הוא הופך להיות משתנה גלובלי וזמין בכל מקום בקוד.

משתנים גלובליים משתייכים לאובייקט הגלובלי - `window` במידה והקוד רץ בדפדפן.

{% highlight javascript %}
var a = "Hello!";
console.log(window.a); // Hello!
{% endhighlight %}

כל עוד משתנה לא הוגדר תחת פונקציה כלשהיא הוא יהיה שייך לתחום הגלובלי.

#### Local Scope
בניגוד לתחום הגלובלי, כאשר משתנה נוצר בתחום מקומי הוא זמין לתחום זה בלבד, ולא מחוצה לו:

{% highlight javascript %}
// Global Scope
var a = 1;

function print() {
  // Local Scope
  var b = 2;
  console.log(a, b);
}

print(); // 1 2
console.log(b); // ReferenceError: b is not defined
{% endhighlight %}

ב- JavaScript תחומים מקומיים נוצרים על ידי פונקציות בלבד. בערך.

<aside class="post__note">
<p>
Block הוא קוד אשר עטוף בסוגריים מסולסלים, כמו בלולאות ומשפטי תנאי.
<br />
ב- JavaScript לא קיים Block Scope, ומשתנים אשר יוכרזו תחת בלוק יהיו שייכים לתחום אשר הבלוק נמצא תחתיו.
</p>
<figure>
{% highlight javascript %}
if ( true ) {
  var a = "Hello!";
}

console.log(a); // Hello!
{% endhighlight %}
<figcaption>המשתנה נוצר בתחום הגלובלי</figcaption>
</figure>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">ES6 מציגה מילה חדשה</a>, <code>let</code>, אשר כן יוצרת Block Scope, כך שמשתנים הופכים מקומיים ל- Block בו הם הוכרזו.</p>

{% highlight javascript %}
if ( true ) {
  let a = "Hello!";
}

console.log(a); // ReferenceError: a is not defined
{% endhighlight %}

<p>לא ארחיב מעבר לכך במדריך זה, אך חשוב לדעת שאופצייה זו קיימת.</p>
</aside>

#### Nested Scopes

מאחר שמשתנה זמין לתחום בו הוא נוצר, פונקציות שהוגדרו בתוך התחום יכולות גם הן לגשת למשתנה.

{% highlight javascript %}
var x = 10;
function outer() {
  var y = 2;
  function inner() {
    var z = 3;
  }
}

{% endhighlight %}

בקטע קוד זה ל- `inner` יש גישה לכל המשתנים, ל- `outer` יש גישה ל- `y` ו- `x`, ולקוד מחוץ לפונקציה (אשר נמצא בתחום הגלובלי) יש גישה ל-`x` בלבד.

#### דריסת משתנים
כאשר מכריזים בתחום המקומי על משתנה עם שם זהה למשתנה אשר קיים מחוץ לתחום, למשתנה המקומי תהיה עדיפות.

{% highlight javascript %}

var a = 1;

function outer() {
  var a = 2;

  function inner() {
    var a = 3;
    console.log(a); // 3
  }

  inner();
  console.log(a); // 2
}

outer();
console.log(a); // 1


{% endhighlight %}

על מנת למצוא את הערך של a בכל אחד מהתחומים, מנוע JavaScript יתחיל לחפש את הערך בתחום בו המשתנה מבוקש. אם לא ימצא אותו שם הוא ימשיך לתחום שמחוצה לו, עד שיגיע לתחום הגלובלי. אם גם שם המשתנה לא קיים, תתרחש שגיאה.

#### הכרזות ללא `var`

מאחר שב- JavaScript ניתן להכריז על משתנים ללא `var`, עולה השאלה מה המשמעות של הכרזה שכזו.

{% highlight javascript %}
function print() {
  b = 2;
  console.log(b);
}

print(); // 2
console.log(b); // 2
{% endhighlight %}

כפי שניתן לראות, מאחר ש- `b` הוכרז ללא `var`, הוא נוצר בתחום הגלובלי, כך שגם הקוד שמחוץ לפונקציה `print` יכולה לגשת אליו.
[כדאי להמנע מכך](http://c2.com/cgi/wiki?GlobalVariablesAreBad).  
ב- Strict Mode לא ניתן היה לבצע זאת, ושגיאת `ReferenceError` תזרק כאשר ננסה להכריז על משתנה ללא `var`.

----
במדריך קצר זה למדנו על חוקי ה- Scope ב- JavaScript. הבנת חוקים אלו היא הבסיס לכתיבת קוד JavaScript נכון.  
למשתנים מקומיים יש חשיבות רבה בכתיבת תוכניות, מורכבות או פשוטות, ולא היינו רוצים שמשתנים יהיו חשופים למקומות אחרים בקוד שלא צריכים להחשף אליהם.

אבל גם למיקום הגדרת המשתנה יש השפעה על תפקוד הקוד. **אם נגדיר פונקציה בסוף הקוד ונקרא לה בתחילתו, האם JavaScript תאפשר את הפעלת הפונקציה?** (*ספויילר: כן*)  
במדריך הבא נעסוק בדיוק בזה - [במה שנהוג לכנות Hoisting](/hoisting).
