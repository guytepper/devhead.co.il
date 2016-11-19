---
layout: post
title: Hoisting
excerpt: soon
---

אז למדנו על סוגי התחומים השונים והדרך בה משתנים משתייכים לתחומים בהם הוכרזו. אבל האם ישנה משמעות למיקום המשתנים בתחום?

{% highlight javascript %}
console.log(a); // undefined
var a = 2;
{% endhighlight %}

המשמעות של `undefined` היא שהמשתנה **_כבר הוכרז_** אך אין לו ערך (לעומת `ReferenceError`, האומר שניסינו לגשת למשתנה לא קיים).  
איך יכול להיות שהמשתנה קיים אם הכרזנו על המשתנה אחרי שקראנו לו?

הסיבה היא שלפני שהדפדפן מריץ את הקוד ישנו תהליך קומפילציה, בו הקומפיילר קורא את כל הכרזות המשתנים ומפרק אותם לשניים - הכרזות משתנים והשמת ערך אליהם.  
כך, הביטוי `var a = 2` יפורק ל- `var a` ו- `a = 2`. הכרזת המשתנה תועבר לתחילת התחום בו הוכרז, בעוד שהשמת הערך למשתנה תשאר במקום בו נכתבה.


כך ייראה קטע הקוד שלמעלה אחרי שהקומפייר עבר עליו:
{% highlight javascript %}
var a;
console.log(a)
a = 2;
{% endhighlight %}


גם על הכרזת פונקציות (Function Declaration) מתבצע Hoisting, אבל לפני שנדבר על כך, בוא ונבדיל בין **_Function Declaration_** ל- **_Function Expression_**.

{% highlight javascript %}
function foo()  { } // Function Decleration
var foo = function() { } // Function Expression
{% endhighlight %}

כאשר נכריז על פונקציהדרך פשוטה להבדיל בין השניים, היא שכאשר נכריז על פונקציה (Declaration), המילה `function` תבוא תמיד ראשונה בשורת הקוד.  
לעומת זאת, כאשר נצהיר על פונקציה בתוך ביטוי כלשהוא (Function Expression), תמיד יופיע קוד מסוים לפני המילה `function`.

{% highlight javascript %}
sayHello(); // Hello!

function sayHello() {
  console.log('Hello!');
}
{% endhighlight %}

## לסיכום
*  כל ההכרזות, בין אם של פונקציות או משתנים עוברות Hoisting ומועברות לתחילת התחום בו הן הוכרזו.  
* הכרזות על פונקציות ימוקמו קודם להכרזה על משתנים.
* עוד משו
