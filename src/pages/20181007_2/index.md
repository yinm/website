---
title: ６ステップでマスターする　「最新標準」HTML+CSSデザイン_ch2-1
date: "2018-10-07"
---

[６ステップでマスターする　「最新標準」HTML+CSSデザイン | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839960223.html)のメモです。letter-spacingが文字の右側に挿入されるの知らなかった...！

---

### ブラウザの横幅に合わせて、フォントサイズを変更する
- `font-size: XXXvw;`で指定する
  - `vw`は画面の横幅を100vwとする単位
- 表示端末の最小幅(320pxなど)で設定したいフォントサイズをベースに計算すればいい
  - e.g. 320pxで48pxのフォントサイズにしたい場合は、 `(48 / 320) * 100 = 15vw`

### 大きい画面でフォントサイズが大きくなりすぎないようにする
- メディアクエリを使って、特定の大きさからは大きくならないようにする
  - e.g. iPadの横幅(768px)から大きくしない場合は、`@media (min-width: 768px) { font-size: XXXpx; }`

### 字間の調整
- `letter-spacing: XXem;`を使う
  - emは、`フォントサイズ = 1em`とする単位
- letter-spacingは、**各文字の右側に余白**が挿入される (最後の文字の右側にも挿入される)
  - 中央揃えにするために、`margin-left: letter-spacingと同じpx`を挿入するといい


### 背景画像に関するプロパティ
- `background-size`: background-imageを指定したボックスに合わせて自動的に画像を拡大・縮小
- `background-position`: 拡大・縮小などの処理の基点を指定

### ヒーローイメージ

```css
  .container {
    display: flex; /* flexboxにする  */
    align-items: center; /* 交差軸(上下)の中央揃え  */
    justify-content: center; /* 主軸(左右)の中央揃え  */
    height: 100vh; /* 画像を画面の高さいっぱいにする  */
    min-height: 450px; /* ブラウザの高さが少なすぎた時の表示崩れを防ぐための最小限確保する高さ  */
    background-image: url(/fruits.jpg); /* 背景画像  */
    background-position: center; /* 拡大・縮小などの処理の基点を、中央にする  */
    background-size: cover; /* ボックスに合わせて自動的に画像を拡大・縮小 */
    text-align: center; /* 文字を中央揃え  */
  }
```

### 背景画像にレイヤーを重ねる
- `background-image: linear-gradient(rgba(色指定, 0.2くらいのalpha値), rgba(色指定, 0.2くらいのalpha値)), url("画像のパス");`
  - 画像を指定せずに、レイヤーだけ使うこともできる(`:hover`につけるなど) `background-image: linear-gradient(rgba(色指定, 0.2くらいのalpha値), rgba(色指定, 0.2くらいのalpha値));`
- [background-image - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/background-image)

### SVGの表示
- imgタグのsrc属性で指定すればいい (画像と同じ)

### SVGのサイズ変更
- width/heightで指定する

### インライン要素にマージンをつける
- `display: inline-block`など、marginを指定できる要素にしてから指定する

### 背景やボーダーでテキストと同じ色にする
- `currentColor`キーワードを使う
- [<color> - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color_value#currentColor_keyword)


