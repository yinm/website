---
title: positionがabsoluteな要素における、オフセットプロパティ(top)の挙動をコードで確認する
date: "2020-11-19"
tags: ['CSS']
---

CSSのオフセットプロパティである、[top - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/top)に書かれている挙動がいまいち理解できなかったので、コードを書いて確認してみます。

### 挙動のまとめ
- オフセットプロパティが初期値なら、staticとabsoluteは同じ位置になる
- オフセットプロパティを指定した場合は、staticとabsoluteは基本的に違う位置になる
  - ただし、paddingと同じ値をオフセットプロパティに指定すれば同じ位置になる

以下で、順番に確認します。

### オフセットプロパティが初期値の場合
topの初期値は`auto`です。MDNによると、`position: absolute;`での挙動は次のように書かれています。

> 絶対位置指定要素では、要素の位置は bottom プロパティに基づいて決まり、 height: auto は内容物の高さに基づいて決まります。また、 bottom も auto であった場合は、要素は垂直方向には静的要素が配置される場合と同様に配置されます。

このことから、オフセットプロパティが初期値なら`position: static;`な要素と同じ位置になるはずです。コードで確認してみます。

<iframe height="500" style="width: 100%;" scrolling="no" title="no-offset" src="https://codepen.io/yinm/embed/eYzazEO?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yinm/pen/eYzazEO'>no-offset</a> by yinm
  (<a href='https://codepen.io/yinm'>@yinm</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### オフセットプロパティ指定した場合
次はtopプロパティに値を設定したものを確認します。指定した場合の挙動は、MDNによると次のように書かれています。

> position が absolute または fixed に設定されている場合、 top プロパティは要素の上辺と包含ブロックの上辺との間の距離を指定します。

`要素の上辺`はtopプロパティを設定した要素の上辺なのでわかるとして、`包含ブロック`はどれになるでしょうか？今回の場合における包含ブロックは、[レイアウトと包含ブロック - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Containing_block#Identifying_the_containing_block)を参考に探してみると、次のものが該当します。

> position プロパティが absolute の場合、包含ブロックは position の値が static 以外 (fixed, absolute, relative, sticky) の直近の祖先要素におけるパディングボックスの辺によって構成されます。

このことから、オフセットプロパティを指定した場合はstaticとabsoluteは基本的に違う位置になるが、paddingと同じ値をオフセットプロパティに指定すれば同じになるはずです。コードで確認してみます。

<iframe height="750" style="width: 100%;" scrolling="no" title="offset" src="https://codepen.io/yinm/embed/WNxBxJP?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/yinm/pen/WNxBxJP'>offset</a> by yinm
  (<a href='https://codepen.io/yinm'>@yinm</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 参考
- [top - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/top)
- [レイアウトと包含ブロック - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Containing_block#Identifying_the_containing_block)
