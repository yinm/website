---
title: HTMLとCSS3で作るサイドメニューのメモ
date: "2018-09-21"
---

[CODEPREP | HTMLとCSS3で作るサイドメニュー](https://codeprep.jp/books/97)のメモです。

---

### 画像の表示位置を調整
- `background-position`プロパティを使う
- [background-position - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/background-position)

### メニューが閉じた状態のスタイルを調整する
- `white-space: nowrap;`を使って折り返さないようにし、`overflow: hidden;`で溢れた要素を非表示にすると綺麗に収まる

### アニメーションの開始を遅延させる
- `transition-delay: 遅らせる秒;`を使う
