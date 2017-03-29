---
layout: post
title: ES6 - Default Values
excerpt: ES6 מאפשרת לקבוע ערכי ברירת מחדל לפרמטרים של פונקציות, שיהיו בשימוש כאשר הפונקציה נקראת ללא פרמטרים.
---
אם הייתם רוצים ליצור בג׳אווהסקריפט פונקציה אשר מקבלת פרמטר עם ערך ברירת מחדל, יכול להיות שהייתם כותבים משהו כזה:

{% highlight javascript %}
function foo(x) { 
  x = x || 2;
  console.log(x);
}

foo(5); // 5
foo(); // 2
{% endhighlight %}

הרעיון הוא שהסימן `||` בודק האם הערך הראשון מחזיר `true` - אם כן, הוא בוחר את הערך הזה ומציב אותו במשתנה. אם לא, הוא מציב את הערך השני במשתנה.

אבל מה קורה אם נקרא לפונקציה עם הערך 0?

{% highlight javascript %}
foo(0); // 2
{% endhighlight %}

מאחר ש-0 בג׳אווהסקריפט נחשב לערך שמחזיר `false`, הערך שנבחר הוא 2. לכן, הדרך הנכונה לבדוק אם הפונקציה נקראה עם פרמטר היא כך:

{% highlight javascript %}
 x = x !== undefined ? x || 2;
{% endhighlight %}

כאן אנו בודקים אם יש ערך כלשהוא שהוצב ב- x. אם כן, זה הערך שנבחר, אם לא, נבחר את הערך השני.
כן, זה לא ברור במיוחד. מזל שיש את ES6.

## ערכי ברירת מחדל ב- ES6

עם ES6 הכל נהיה פשוט יותר. כך נכתוב פונקציה המקבלת פרמטר עם ערך ברירת מחדל:


{% highlight javascript %}
function foo(x = 2) {
	console.log(x);
}

foo(5); // 5
foo(0); // 0
foo(); // 2
{% endhighlight %}

נוסף על כך, יש אפשרות לכתוב ביטוי (expression) בתור ערך ברירת מחדל לפרמטר, כך שניתן לקרוא לפונקציה אם לא הועבר אליה פרמטר. לדוגמה:

{% highlight javascript %}
function bar() {
	return "hola!";
}

function foo(x = bar()) {
	console.log(x);
}

foo("hello!"); // "hello!"
foo(); // "hola!"
{% endhighlight %}
