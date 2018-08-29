---
title: よくわかってなかったinputタグの属性を整理
date: "2018-08-29"
---

昨日に引き続き、[CODEPREP | HTML基礎 フォーム実装編](https://codeprep.jp/books/81)をやったのでメモ。pattern属性で正規表現書けるの初めて知りました。

---

### URLを入力する
- `[<input type="url"> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)`

### カラーピッカーを表示する
- `[<input type="color"> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/color)`

### 日時を入力する
- `[<input type="datetime-local"> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Input/datetime-local)`
- `datetime`は非推奨


### 文字数チェック
- `minlength`属性・`maxlength`属性を使う


### 正規表現を使ったチェック
- `pattern`属性を使う
- [HTML5におけるinput要素のpattern、type属性のおさらい - Qiita](https://qiita.com/ka215/items/795a179041c705bef03b)

### 入力チェック結果をスタイリングする
- 正常時は`:valid`擬似クラス、異常時は`:invalid`擬似クラスを使う

### 入力チェック機能を無効にする
- `<form>`要素に`novalidate`属性を付与する
- HTML5が持つ入力チェック機能のメッセージにはスタイリングができないので、`novalidate`属性で無効化して別途スタイルを当てることが多い

### 名前を入力補助する
- `autocomplete`属性を使う
- 無効にするにはランダムな文字列を入れるといい？
  - [フォームの自動補完を無効にするには - ウェブセキュリティ | MDN](https://developer.mozilla.org/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion)

### 読み取り専用にする
- `readonly`属性を使う
- [disabled属性とreadonly属性の相違点 - Qiita](https://qiita.com/ma_me/items/83b4fa90328e67809507)

### ページ読み込み時にフォーカスを当てる
- `autofocus`属性を使う

### スペルや文法チェックを制御する
- 文字列の下に赤線が引かれるやつの制御
- `spellcheck`属性を使う (falseにするとチェックが無効になる)

