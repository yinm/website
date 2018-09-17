---
title: HTMLとCSS3でつくるお天気パネルのメモ
date: "2018-09-18"
---

[CODEPREP | HTMLとCSS3でつくるお天気パネル](https://codeprep.jp/books/77)のメモです。

---

### 天気アイコンを作る
- [Weather Icons](https://erikflowers.github.io/weather-icons/)を使う
  - Font Awesomeにインスパイアされて作成された、天気専門のアイコンフォント

### Flexアイテムの幅を調整する
- `flex-grow`プロパティを使う
- `flex-grow`は、FlexアイテムのFlex伸長係数(Flexコンテナー内の利用可能な空間のうち、どれだけがそのアイテムに割り当てられるか)を指定できる
- [flex-grow - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/flex-grow)

### 背景をグラデーションにする
- 背景に線形グラデーションを指定するには`linear-gradient`関数を使う
- 書式は、 `linear-gradient(グラデーションの方向, 最初の色, 最後の色)`
  - グラデーションの方向は、`to`キーワードに続けてグラデーションの終点を指定する (e.g. 左から右なら、 `to right`)
