---
title: ６ステップでマスターする　「最新標準」HTML+CSSデザイン_ch2-2
date: "2018-10-08"
---

[６ステップでマスターする　「最新標準」HTML+CSSデザイン | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839960223.html)のメモです。

---

### 文章全体をゆったりとレイアウトする
- `line-height`をデフォルト(`1.5`)より大きな数にする (e.g. `1.8`)
- content(要素の内容)の高さが高くなるので、余白が広がる (余白を広げるのはpadding, marginだけじゃない)

### 文字を薄くする
- `opacity: 1より少ない数`を使って透明度を下げる


### 円の中心にアイコンを配置する

```css
.icon {
  font-size: 40px;
  width: 2em;          /* font-sizeの倍の横幅  */
  line-height: 2em;    /* font-sizeの倍の高さ  */
  border-radius: 50%;
  text-align: center;  /* 中央揃え */
  background-color: #ddd;
}
```

### カラム数を画面サイズによって変更する (レスポンシブデザイン)
- メディアクエリを使って、画面が大きい場合に `display: flex;`などのスタイルを追加して横並びにする
- 余白は共通して使うなら、ベースの方の要素にスタイルを設定すれば、メディアクエリの有無に関わらず余白を当てられる

```css
.container {
  /* ベースの方に余白を設定して共通化する  */
  padding-top: 80px;
  padding-bottom: 20px;
}

@media (min-width: 768px) {
  .container {
    display: flex;
  }
}
```

### flex itemの横幅の比率を等分割にする
- `flex: 1;`を指定する

### 横幅が大きくなった時に間延びしないようにする
- コンテナにしている要素に`max-width`と`margin: 0 auto;`を指定する

```css
.container {
  display: flex;
  max-width: 1000px;  /* 横幅の最大値を設定する */
  margin-left: auto;
  margin-right: auto;
}
````
