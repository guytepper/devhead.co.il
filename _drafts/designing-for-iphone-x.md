---
layout: post
title: הכינו אתרכם לאייפון X
---
האייפון X יוצא ממש עוד מעט, ואיתו אפל בחרה לעשות למפתחי האתרים לא   מעט כאב ראש.
לראשונה קצוות המסך מעוגלים ובראש המכשיר, בין שני חלקי המסך, הוצבו הרשמקול, המצלמה וחיישנים.
הדבר גורם לכך שתוכן עלול להיות מוסתר על ידי הקצוות והחיישנים, ולכן אפל בחרה להציג כברירת מחדל את תוכן האתר בין האיזורים הבטוחים (safe areas) של המכשיר, בצורה הבאה:

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/default/">
  <img src="/images/posts/designing-for-iphone-x/default.png" width="550" alt="">
</a>

החלק מחוץ לאזורים הבטוחים ימולאו ברקע שהוגדר על אלמנט ה- `html` או ה- `body` והתוכן ימורכז בין שני אזורים אלו. זה עלול להתאים לחלק מהאתרים (כמו הדף שאתם קוראים בו עכשיו, בו צבע הרקע לאורך כל העמוד אחיד) אבל כמו שניתן לראות בדוגמה למעלה, הדבר עלול לגרום ל_____(איך לקרוא לגועל הזה??)

## מתלבשים על כל המסך

אם נרצה לבטל את התנהגות זו ולהציג את התוכן על פני כל המסך, נוכל להשתמש בהרחבה חדשה לתגית ה- `viewport` הנקראת `viewport-fit`, המאפשרת לשלוט על איך תוכן האתר יוצג במקרים במקרים בהם גבולות המכשיר לא מרובעים.
ערך ברירת המחדל ל- `viewport-fit` הוא `auto`, שכפי שראינו מקודם משאיר את התוכן באזורים הבטוחים של המכשיר.
אם נרצה להציג את תוכן הדף על פני כל מסך המכשיר, נוכל לשנות את הערך ל- `cover`, ונקבל את התוצאה הבאה:

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/viewport-fit/">
  <img src="/images/posts/designing-for-iphone-x/viewport-fit.png" width="550" alt="">
</a>

כמו שניתן לראות, שורת הניווט אמנם נראית נהדר כרגע, אך התוכן שלנו מוסתר על ידי הרמקול.
נוסף על כך, בבר התחתון נמצאים לחצן הגישה למסך הבית (הקו המעוגל) ולינק יצירת הקשר באותו המקום, דבר ההופך את שתי הפונקציות לקשות לשימוש.

## זהירות מוקשים

על מנת לפתור את הבעיות הללו נוצרו 4 משתנים, שניתן לגשת אליהן דרך ה- CSS בעזרת פונקציית constant. המשתנים הם:

- `safe-area-inset-left`
- `safe-area-inset-right`
- `safe-area-inset-top`
- `safe-area-inset-bottom`

בעזרתם נוכל להוסיף `padding` / `margin` לתוכן שלנו על מנת להגיע לאיזורים הבטוחים של המכשיר.

{% highlight css %}

main {
  padding-right: constant(safe-area-inset-right);
  padding-left: constant(safe-area-inset-left);
}

footer {
  padding-bottom: constant(safe-area-inset-bottom);
}

{% endhighlight %}

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/constants/">
  <img src="/images/posts/designing-for-iphone-x/constants.png" width="550" alt="">
</a>

הידד! כעת אנחנו מציגים את תוכן האתר בצורה ברורה, ה- `footer` נגיש ואין בעיה לגשת למסך הבית.

כותרת על min ו max

אך מה יקרה אם נחזיק את המכשיר בצורה אנכית?

<a href="https://guytepper.github.io/designing-websites-for-iphone-x/he/constants/">
  <img src="/images/posts/designing-for-iphone-x/portrait.png" width="300" alt="">
</a>

כפי שניתן לראות, אין יותר מרווח בין קצוות המסך לתוכן. הסיבה היא שהגדרנו מחדש את ה- `padding` של אלמנט התוכן עם ה- constant.
הערך של constant הוא דינאמי לפי המצב בו המכשיר מוחזק, ולכן כשעברנו למצב אנכי הערך של `safe-area-inset-right` עבר להיות 0.


ניתן לפתור את הבעיה הזו בעזרת 2 פונקציות CSS חדשות: `min` ו- `max`.
הפונקציות לוקחות 2 משתנים ומחזירות את הערך הגדול / הקטן מבין שניהם.

iOS 11 נכון לכתיבת שורות אלו לא תומכת בפונקציות הנ״ל (ככל הנראה עדכון התומך בפונקציות ישוחרר לפני שחרור האייפון X). לעת עתה ניתן להתנסות איתן בעזרת [גרסת המפתחים של Safari](https://developer.apple.com/safari/technology-preview/).

{% highlight css %}

@supports(padding: max(0px)) {
  main {
    padding-right: max(12px, constant(safe-area-inset-right));
    padding-left: max(12px, constant(safe-area-inset-left));
  }
}

{% endhighlight %}

חשוב לבדוק לבדוק לפני השימוש בפונקציות אם הן נתמכות ע״י הדפדפן, משום שאם הדפדפן לא תומך בהן הדפדפן לא ישתמש בערך שהוגדר קודם לכן ל- `padding`, אלא יחזור לערך ברירת המחדל של `padding`.

כעת, כשנחזיק את המכשיר במצב אופקי, ערך ה- `padding` שיוחל הוא ה- constant, וכשנחזיק את המכשיר במצב אנכי הערך יהיה `12px`.

# לסיכום..
אחרי שהבנו את כל השינויים שצריך לבצע על מנת להתאים אתר לאייפון X, רציתי לציין שלדעתי המהלך הזה שאפל ביצעה שלילי, ואנחנו, מפתחים האתרים, לא צריכים לעודד או לתמוך במקרים של התאמות אתרים למכשירים ספציפיים.

עם זאת, ראיתי את המקרה הזה כמקרה מעניין ונחמד לדעת איך פותרים בעיה שכזו ב- CSS. בנוסף, כן צריך לחשוב על התאמת האתר במידה והאתר פופולארי או מקבל תנועה גדולה ממשתמשים עם אייפון X.
