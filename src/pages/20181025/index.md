---
title: ６ステップでマスターする　「最新標準」HTML+CSSデザイン_ch4-1
date: "2018-10-25"
---

[６ステップでマスターする　「最新標準」HTML+CSSデザイン | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839960223.html)のメモです。

---

### ルート要素(`<html>`)を表すセレクタ
- `:root`
- e.g. ルート要素のフォントサイズを18pxに変更
  - フォントサイズが未設定の項目にも影響を与えてしまうので、`<body>`にブラウザ標準のフォントサイズ(16px)も合わせてセットする方がいい

```css
:root {
  font-size: 18px;
}

body {
  font-size: 16px;
}
```

- ルート要素のフォントサイズを基準に設定できる`rem`を合わせて使うと便利

### 画像のサイズを親要素に合わせる
- `max-width; 100%;`を使うと、親要素の横幅に合わせて縮尺率が調整される

```html
<img src="photo.png">

<style>
  img {
    max-width: 100%;
  }
</style>
```

