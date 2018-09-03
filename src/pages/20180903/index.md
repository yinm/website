---
title: HTML&CSSでつくる登録フローのメモ
date: "2018-09-03"
---

[CODEPREP | HTML&CSSでつくる登録フロー](https://codeprep.jp/books/47)のメモです。

`list-style`がshorthund propertiesだということ知らなかったです。(`list-style: none`をよく書いていたのですが、`list-style-type`の設定をしてたのですね)

---

### リスト項目の点を消す
- `list-style-type: none`を指定する
- [list-style-type - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/list-style-type)
- `list-style`はshorthand properties(一括設定プロパティ)

### ある要素のうち、奇数番目のものを指定する
- `要素:nth-child(odd)`を指定する
- [:nth-child() - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/:nth-child)

### ある要素のうち、偶数番目のものを指定する
- `要素:nth-child(even)`を指定する
