---
title: HTML&CSSでつくるドロップダウンメニューのメモ
date: "2018-09-09"
---

[CODEPREP | HTML&CSSでつくるドロップダウンメニュー](https://codeprep.jp/books/18)のメモです。

---

### display: none以外の非表示の方法
- `max-height: 0`(要素を飛び出させる) と `overflow: hidden`(飛び出した要素の非表示) を組み合わせる

### hover状態の時にスタイルを有効にする
- セレクタ指定で、 `要素:hover > 要素`のように、hoverの擬似要素の後にセレクタを続ければいい
- e.g. `#nav > li:hover > .menu`
