---
layout: post
title: הכינו אתרכם לאייפון X
excerpt: לאייפון X יש מסך שמגיע לכל קצוות המכשיר, מה שגורם לרשמקול, החיישנים והמצלמה הקדמית לכסות חלק מהמסך - וליצור למפתחי האתרים כאב ראש.
---
האייפון X יוצא ממש עוד מעט, ואיתו אפל בחרה לעשות למפתחי האתרים לא מעט כאב ראש. לראשונה קצוות המסך מעוגלים ובראש המכשיר, בין שני חלקי המסך, הוצבו הרשמקול, המצלמה והחיישנים.  
הדבר גורם לכך שתוכן עלול להיות מוסתר על ידי קצוות המסך המעוגלים והחיישנים, ולכן אפל בחרה להציג כברירת מחדל את תוכן האתר בין האיזורים הבטוחים (safe areas) של המכשיר.

לצורך הפוסט יצרתי אתר לדוגמה, כך הוא נראה במצב אופקי במכשיר האייפון 8:

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/default/">
  <img src="/images/posts/designing-for-iphone-x/iphone-8-example.png" width="550" alt="">
</a>

הכל עובד כצפוי והאתר נראה מהמם. ועכשיו נעבור לבדוק את האתר באייפון X:

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/default/">
  <img src="/images/posts/designing-for-iphone-x/default.png" width="550" alt="">
</a>

אוי לא! מה קרה כאן? החלק מחוץ לאזורים הבטוחים התמלא ברקע שהוגדר על אלמנט ה- `html` או ה- `body` ותוכן האתר מורכז בין שני האזורים מימין ומשמאל -- בניגוד להתנהגות הרגילה בה התוכן מתפרס על פני כל שטח המסך.  
זה עשוי להתאים לחלק מהאתרים (כמו הדף שאתם קוראים בו עכשיו, בו צבע הרקע לאורך כל העמוד אחיד) אבל כמו שניתן לראות בדוגמה למעלה, הדבר עלול לגרום לעיצוב האתר להראות ״קטוע״.

<aside class="post__note">
<p>
על התמונות בפוסט ניתן ללחוץ ולבדוק את האתר בדפדפן.<br>
בנוסף, אפשר להסתכל על קוד המקור ב<a href="https://github.com/guytepper/designing-websites-for-iphone-x/tree/master/he">גיטהאב</a>.
</p>
</aside>

## מתלבשים על כל המסך

אם נרצה לבטל את ההתנהגות הזו ולהציג את התוכן על פני כל המסך, נוכל להשתמש בהרחבה חדשה לתגית המטא `viewport` הנקראת [`viewport-fit`](https://drafts.csswg.org/css-round-display/#viewport-fit-descriptor), המאפשרת לשלוט על איך תוכן האתר יוצג במקרים במקרים בהם גבולות המכשיר לא מרובעים.

ערך ברירת המחדל ל- `viewport-fit` הוא `auto`, שכפי שראינו מקודם משאיר את התוכן באזורים הבטוחים של המכשיר.
אם נרצה להציג את תוכן הדף על פני כל המסך, נוכל לשנות את הערך ל- `cover`.

{% highlight html %}
<meta name='viewport' content='initial-scale=1, viewport-fit=cover'>

{% endhighlight %}

לאחר השינוי נקבל את התוצאה הבאה:

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/viewport-fit/">
  <img src="/images/posts/designing-for-iphone-x/viewport-fit.png" width="550" alt="">
</a>

כמו שניתן לראות, שורת הניווט אמנם נראית נהדר כרגע, אך התוכן מוסתר על ידי הרמקול והחיישנים.
נוסף על כך, בבר התחתון נמצאים לחצן הגישה למסך הבית (הקו המעוגל) ולינק יצירת הקשר באותו המקום, דבר ההופך את שתי הפונקציות לקשות לשימוש.

## זהירות מוקשים

על מנת לפתור את הבעיות הללו נוצרו ארבעה משתנים, שניתן לגשת אליהן דרך ה- CSS בעזרת פונקציית `()env`. המשתנים הם:

- `safe-area-inset-left`
- `safe-area-inset-right`
- `safe-area-inset-top`
- `safe-area-inset-bottom`

<figure>
  <a href="https://webkit.org/demos/safe-area-insets/safe-areas.html">
    <img src="/images/posts/designing-for-iphone-x/safe-areas.png" width="505" alt="">
  </a>
  <figcaption>האיזורים הבטוחים והלא בטוחים באייפון X.
    <a href="https://webkit.org/blog/7929/designing-websites-for-iphone-x/">נלקח מהבלוג הרשמי של WebKit.</a>
  </figcaption>
</figure>

בעזרת המשתנים נוכל להוסיף `padding` / `margin` לתוכן שלנו על מנת להגיע לאיזורים הבטוחים של המכשיר.

{% highlight css %}

main {
  padding-right: env(safe-area-inset-right);
  padding-left: env(safe-area-inset-left);
}

footer {
  padding-bottom: env(safe-area-inset-bottom);
}

{% endhighlight %}

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/constants/">
  <img src="/images/posts/designing-for-iphone-x/constants.png" width="550" alt="">
</a>

הידד! כעת אנחנו מציגים את תוכן האתר בצורה ברורה, ה- `footer` נגיש ואין בעיה לגשת למסך הבית.

<aside class="post__note">
<p>iOS 11 משתמשת בפונקציית ה- <code>()constant</code> בכדי לגשת למשתנים שהוגדרו ע״י הדפדפן, אך ב- <a href="https://github.com/w3c/csswg-drafts/issues/1693">CSS Working Group החליטו</a> להשתמש בשם <code>()env</code> לפונקציה בסופו של דבר.</p>
<p>לכן, על מנת לתמוך באייפון X נכון לעכשיו, יש להשתמש בפונקצייה <code>()env</code>, אך בעתיד יהיה צורך לשנות את השם ל- <code>()env</code>.</p>
</aside>

# משנים כיוון

אך מה יקרה אם נחזיק את המכשיר בצורה אנכית?

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/constants/">
  <img src="/images/posts/designing-for-iphone-x/portrait.png" width="300" alt="">
</a>

כפי שניתן לראות, אין יותר מרווח בין קצוות המסך לתוכן. הסיבה היא שהגדרנו מחדש את ה- `padding` של אלמנט התוכן עם משתנה.
ערך המשתנה הוא דינאמי לפי המצב בו המכשיר מוחזק, ולכן כשעברנו למצב אנכי ערך המשתנה `safe-area-inset-right` עבר להיות 0.


ניתן לפתור את הבעיה הזו בעזרת 2 פונקציות CSS חדשות: `min` ו- `max`.  
הפונקציות לוקחות 2 משתנים ומחזירות את הערך הגדול / הקטן מבין שניהם.

נכון לכתיבת שורות אלו iOS 11 לא תומכת בפונקציות הנ״ל (ככל הנראה עדכון תוכנה שיוסיף תמיכה בפונקציות ישוחרר לפני תאריך יציאת האייפון X). לעת עתה ניתן להתנסות איתן בעזרת [גרסת המפתחים של Safari](https://developer.apple.com/safari/technology-preview/).

{% highlight css %}

@supports(padding: max(0px)) {
  main {
    padding-right: max(12px, env(safe-area-inset-right));
    padding-left: max(12px, env(safe-area-inset-left));
  }
}

{% endhighlight %}

<aside class="post__note">
<p>
חשוב לבדוק לבדוק לפני השימוש בפונקציות אם הן נתמכות ע״י הדפדפן, משום שאם הוא לא תומך בהן, הדפדפן לא יבחר בערך שהוגדר קודם לכן ל- <code class="highlighter-rouge">padding</code>, אלא יחזור לערך ברירת המחדל של <code class="highlighter-rouge">padding</code>.
</p>
</aside>

כעת, כשנחזיק את המכשיר במצב אופקי, ערך ה- `padding` שיוחל יהיה ערך המשתנה, וכשנחזיק את המכשיר במצב אנכי הערך יהיה `12px`.

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/minmax/">
  <img src="/images/posts/designing-for-iphone-x/portrait-fixed.png" width="300" alt="">
</a>

# לסיכום...
אחרי שהבנו את כל השינויים שצריך לבצע על מנת להתאים אתר לאייפון X, רציתי לציין שלדעתי המהלך הזה שאפל ביצעה אינו נכון, ואנחנו, מפתחי האתרים, לא צריכים לעודד או לתמוך בהתאמת אתרים למכשירים ספציפיים.
עם זאת, ראיתי את המקרה הזה כמעניין, ונחמד לדעת איך פותרים בעיה שכזו.
בנוסף, כן צריך לחשוב על התאמת האתר במידה והאתר פופולארי או מקבל תנועה גדולה ממשתמשים עם אייפון X.
