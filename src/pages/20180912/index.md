---
title: HTMLとCSSで作るWeb名刺のメモ
date: "2018-09-12"
---

[CODEPREP | HTMLとCSSで作るWeb名刺](https://codeprep.jp/books/50)のメモです。

---

### `rel="noopener"`
- リンク先のページから、`window.opener`を通じたアクセスできなようにする
  - セキュリティとパフォーマンスの面でうれしい
  - [target="_blank" で開くリンクには rel="noopener" をつける - Qiita](https://qiita.com/memolog/items/9913b0067e4e6883ed17)

### `rel="noreferrer"`
- リンク先のページに対して、HTTPヘッダを通じてリンク元のページの情報を送信しないようにする

### 背景に画像を設定する
- background-colorはbackground-imageより下に描画される
  - 画像を背景に設定する場合は、画像ファイルが読み込まれなかった場合の代替え手段となる、background-colorを必ず指定する

### 背景画像の位置を変更する
- `background-position`を使う

### 画像の描画サイズを調整する
- `background-size`を使う
- `background-size: contain`は、指定領域内に画像がすべて収まるよう描画するようにするために利用する値

### リンクの疑似クラスの設定する
- リンクの疑似クラスは他の疑似クラスによって上書きされる可能性があるため、それぞれに異なるスタイリングを行う場合は、次の順序で書く必要がある

```
:link
:visited
:hover
:active
```

### Webフォントを適用する
- `@import` と `url()`関数を利用して、Webフォントをロードする
