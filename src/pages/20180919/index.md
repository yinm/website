---
title: 動画を使って夏らしいWebページを作ろう！のメモ
date: "2018-09-19"
---

[CODEPREP | 動画を使って夏らしいWebページを作ろう！](https://codeprep.jp/books/112)のメモです。

---

### 動画を読み込む
- `video`タグの中で動画の配置場所であるメディアリソースを指定する
  - メディアリソースの指定には、`source`タグを利用して、`src`属性にメディアリソースを書く
  - `type`属性で形式を指定することで、ブラウザが動画を読み込むことなく、対応しているメディア形式のメディアファイルを知ることができるため、ブラウザ処理やネットワーク負荷を軽減することができる

### 動画を画面全体に表示する
- `object-fit: cover;`を指定する
  - `object-fit`プロパティは、置換要素(e.g. `<img>`, `<video>`)の中身を、コンテナーにどのようにはめ込むかを指定できる
- [object-fit - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/object-fit)

### 動画の中心位置を調整する
- `object-position: center;`を指定する
- [object-position - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/object-position)

### 文字色を動画の色に重ね合わせる
- `mix-blend-mode: overlay;`を指定する
- `mix-blend-mode`プロパティは、要素が重なるときに上の要素の色を下の要素にどのように重ねて表示するかを指定するプロパティ

### 動画にぼかしを入れる
- `filter: blur(ぼかし幅);`を指定する
- `filter`プロパティを設定することで、要素にどのような効果をかけるかを指定できる
  - `blur()`関数を値に指定することでぼかすことができる
