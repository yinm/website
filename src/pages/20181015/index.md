---
title: ６ステップでマスターする　「最新標準」HTML+CSSデザイン_ch2-4
date: "2018-10-15"
---

[６ステップでマスターする　「最新標準」HTML+CSSデザイン | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839960223.html)のメモです。

---

### borderの外に線を引く
- `box-shadow: 0 0 0 線のpx 色`を使用する
- e.g. 1pxのグレー(#888)の線を引く場合 `box-shadow: 0 0 0 1px #888`

### flexプロパティを使ったサイズ固定
- `flex 0 0 固定したいpx`を使用する
- flexはショートハンドプロパティである (`flex: flex-grow flex-shrink flex-basis;`)
- [flex - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/flex)

### flexboxを使った要素の並び替え
- flexコンテナで、`flex-direction: row-reverse`を使用する
