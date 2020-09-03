---
title: linear-gradient()の角度の効き方をまとめる
date: "2020-09-03"
---

[linear-gradient()](https://developer.mozilla.org/ja/docs/Web/CSS/linear-gradient)の角度を指定したときに、どう効いているのかわかりにくかったので、区切り目がわかりやすいよう(色経由点を50%)にして、まとめました。

基本的な考え方は、「値が増加すると、時計回りに回る」です。

以下のまとめには出てこないですが、負の値にすると反時計回りに回ります(e.g. -45degは、315degと同じ)。

<iframe height="700" style="width: 100%;" scrolling="no" title="OJNxdBv" src="https://codepen.io/yinm/embed/OJNxdBv?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yinm/pen/OJNxdBv'>OJNxdBv</a> by yinm
  (<a href='https://codepen.io/yinm'>@yinm</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


