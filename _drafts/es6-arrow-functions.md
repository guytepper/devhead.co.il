---
layout: post
title: ES6 - Arrow Functions
excerpt: soon
---

פיצ׳ר שנמצא בשימוש רחב בג׳אווהסקריפט הוא האפשרות לכתוב פונקציות בכל מקום שנרצה. לדוגמה, הפונקציה `Array.filter` שלוקחת פונקציה כפרמטר ומפעילה אותה על כל אלמנט במערך:

{% highlight javascript %}
var people = [
  { name: 'Dana', age: 32 },
  { name: 'Yossi', age: 19 },
  { name: 'Dorit', age: 8 },
]

var grownUps = p.filter(function(person) {
  return p.age > 18;
});
{% endhighlight %}

הקוד הזה אמנם עובד, אבל הוא ארוך, בעוד שהוא עושה דבר כל כך פשוט.  
לא עוד - בואו ונכיר את פונקציות החץ (ובגלל שעברית לא מחמיאה להן, הרשו לי להשתמש בשם הלועזי שלהן בהמשך הפוסט..).

## Arrow Functions - מה השתנה?

Arrow Functions קצרות בהרבה מפונקציות ״רגילות״, וכתוצאה מכך מאפשרות לנו לכתוב פונקציות קצרות, בשורה אחת ועם מטרה אחת.  
וכמובן שאפשר לכתוב פונקציות עם מטרה אחת ללא Arrow Functions, אך העובדה שצורת הכתיבה של הפונקציה כבר לא ״עמוסה״, גורמת, לדעתי, לקצר את אורך הפונקציה ולחשוב עליה מלכתחילה כפונקציה עם מטרה יחידה.

ככה יראה קטע הקוד שראינו בתחילת הפוסט, כשיכתב עם Arrow Functions:

{% highlight javascript %}
var grownUps = people.filter(p => p.age > 18);
{% endhighlight %}

כאשר אנו כותבים פונקציות קצרות, אשר מקבלות פרמטר אחד, כוללות ביטוי אחד ומחזירות ערך כלשהוא, צורת הכתיבה תהיה `פרמטר => ביטוי`. אין צורך ב- `function`, בסוגריים מעוגלות ומסולסלות וב- `return` לפני הביטוי.

אם נרצה להעביר 2 פרמטרים לפונקציה, נצטרך לעטוף אותם בסוגריים:

{% highlight javascript %}
var numbers = [1, 2, 3];

// ES5
numbers.reduce(function(a, b) {
  return a + b;
});

// ES6
numbers.reduce((a, b) => a + b);
{% endhighlight %}

ואם נצטרך לכתוב פונקציה עם יותר משורת קוד אחת, נכתוב אותה כך:

{% highlight javascript %}
// ES5
button.addEventListener('click', function(event) {
  event.stopPropagation();
  buttonClicked = true;
});

// ES6
button.addEventListener('click', event => {
  event.stopPropagation();
  buttonClicked = true;
});
{% endhighlight %}

## מה זה ׳זה׳?

נוסף לשינוי צורת הכתיבה של Arrow Functions מפונקציות אנונימיות רגילות, ישנו שינוי התנהגות משמעותי.

ב- JavaScript, הערך של `this` משתנה בהתאם למקום ממנו הוא נקרא ובצורה בה הוא נקרא (מידע נוסף על כך תוכלו למצוא [כאן](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)).  
עד כה, כאשר היינו יוצרים פונקציות, הפונקציה שנוצרה הייתה יוצרת תחום חדש, ומבדילה את עצמה מהקונטקסט ממנה היא נקראה. לדוגמה:

{% highlight javascript %}
function Counter() {
  this.seconds = 0;

  setInterval(function() { // New anonymous function
    this.seconds++; // What's seconds? S:
    console.log(seconds); // NaN
  }, 1000);
}

var myCounter = new Counter();
{% endhighlight %}

Arrow Functions, לעומת זאת, אינם מבדילים את עצמם מהקונטקסט בו הם נמצאים ואינם יוצרים ערך `this` חדש .   
כתוצאה מכך, אין צורך יותר לחשוב על מה יהיה הערך של `this` כשנשתמש בפונקציה, ופשוט לכתוב פונקציות כמו שהיינו כותבים משפטי `if-else` או `switch` מבלי לחשוש על ערך ה- `this` בתוכם.
