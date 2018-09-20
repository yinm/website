---
title: HTMLとCSS3でつくるパンくずのメモ
date: "2018-09-20"
---

[CODEPREP | HTMLとCSS3でつくるパンくず](https://codeprep.jp/books/85)のメモです。

---

### borderを使って三角形を作る
- `border`同士の接地面が**斜めの切り口**になっていることを利用して作る
- 特定の辺を透過させるには、色を`transparent`を設定したり、`border`プロパティを設定しないことで実現する
- [CSSだけで三角形を作ろう！その1：borderプロパティの仕組みをマスター | 株式会社グランフェアズ](https://www.granfairs.com/blog/staff/make-triangle-with-css)

### 外枠を個別に丸める
- `border-*-*-radius`プロパティを使う

```css
border-top-left-radius: 左上を丸める値;
border-top-right-radius: 右上を丸める値;
border-bottom-left-radius: 左下を丸める値;
border-bottom-right-radius: 右下を丸める値;
```

