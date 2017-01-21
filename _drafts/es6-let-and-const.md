---
layout: post
title: ES6 - var, let & const
excerpt: soon
---
עד ES6 הייתה לנו דרך אחת להכריז על משתנים - באמצעות `var`. כעת, עם ES6, יש לנו 3 דרכים - `var`, `let` ו- `const`. מה ההבדל בין כל אחת מהדרכים ומתי כדאי להשתמש בכל אחת מהן?

## `var`
זוהי הדרך היחידה שהייתה לנו עד כה להכרזת משתנים ב- JavaScript ולכן לא אתעקב עליה יותר מדי. אבל יש 2 דברים שכן חשוב לי להזכיר בקשר אליה, ששונים מ- `let` ו- `const`.

**Block Scope** - כפי שהזכרתי בפוסט על [Variable Scope](http://devhead.co.il/javascript-variable-scope), התחום היחיד ב- JavaScript שבתוכו נשמרים משתנים הוא פונקציות. לא קיים Block Scope בג׳אווהסקריפט (כמובן עד ES6), כך שהקוד הבא יעבוד ונוכל לגשת למשתנה לאחר שהוכרז בין הסוגריים המסולסלות:

{% highlight javascript %}
if (true) {
  var a = 5;
}
console.log(a) // 5
{% endhighlight %}

**Hoisting** - כאשר אנחנו משתמשים ב- `var`, הקומפיילר של JavaScript מבצע [הויסטינג](http://devhead.co.il/hoisting), מה שיכול לגרום לעתים רבות לבלבול.
