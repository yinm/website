---
title: よくわかってなかったHTMLのタグを整理
date: "2018-08-28"
---

毎日何かしらCSSを書いてみよう週間の一環で、[CODEPREP | HTML入門 HTML5編](https://codeprep.jp/books/75)をやってみたのでメモ(CSSは全然出てこないでHTMLですが...！)。meterなど、初めてみたなあみたいなタグもあって思ったより勉強になりました。

---

### 参照や記述の目的で強調を表現する
- `[<mark>: 文字列マーク要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/mark)`

### 省略語を表現する
- `[<abbr>: 省略語要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/abbr)`
- abbreviation の略

### ルビを表現する
- `[<ruby> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ruby)`

### 日時を表現する
- `[<time> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/time)`
- 時刻だけを扱う場合は、datetime属性は必要ない

### 図形を表現する
- `[<figure> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/figure)`
- figureタグには、メインコンテンツなどから参考文献として参照される図表を含める

### 図形の説明を表現する
- `[<figcaption> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/figcaption)`
- `figure`タグの子要素にする必要がある

### 数値を入力する
- `input`タグの`type`属性に`number`を設定する
- 次の属性を指定できる
  - min="最小値"
  - max="最大値"
  - step="数値や日時の増加量"

### 電話番号を入力する
- `input`タグの`type`属性に`tel`を設定する

### 日付を入力する
- `input`タグの`type`属性に`date`を設定する

### 時刻を入力する
- `input`タグの`type`属性に`time`を設定する

### 進捗状況を表現する
- `[<progress>: 進捗表示要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/progress)`
- 次の要素を指定できる
  - max="最大値"
  - value="現在の進捗"

### 範囲内の値を表現する
- `[<meter> - HTML リダイレクト 1 | MDN](https://developer.mozilla.org/ja/docs/HTML/Element/meter)`
- 次の要素を指定できる
  - value="現在の値"
  - min="範囲全体の下限"
  - max="範囲全体の上限"
  - low+"「低」と判定される値の上限"
  - high="「高」と判定される値の下限"

### 動画を再生する
- `[<video>: 動画埋め込み要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/video)`
- 再生コントローラーを表示するには、`controls`属性を設定する
- 複数のビデオコーデックに対応するために、`source`タグを使って動画のURLを指定する

### 動画を読み込み中の画像を設定する
- `video`タグの`poster`属性を指定する

### 動画を自動再生する
- `video`タグの`autoplay`属性を指定する

### 音声を再生する
- `[<audio>: 埋め込み音声要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/audio)`
- 再生コントローラーを表示するには、`controls`属性を設定する
- 複数のオーディオコーデックに対応するために、`source`タグを使って動画のURLを指定する

