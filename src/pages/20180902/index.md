---
title: 週間レビュー (2018-08-27~)
date: "2018-09-02"
---

前回: [週間レビュー (2018-08-20~) | 楽しいだけで十分です](https://yinm.info/20180826/)

## 今週やったこと

- Vue + TSの素振り
  - [TypeScriptでVue.jsを書く – Vue CLIを使った開発のポイントを紹介 | maesblog](https://mae.chab.in/archives/60167)でVue + TSでの基本的な書き方を勉強しました
  - Keymapperに導入するためにwebpackでの設定方法を知りたくて、[最新版TypeScript 3.0+Webpack 4の環境構築まとめ(React, Vue.js, Three.jsのサンプル付き) - ICS MEDIA](https://ics.media/entry/16329)をやって基本的な書き方を学びました
  - そのあと、[Microsoft/TypeScript-Vue-Starter: A starter template for TypeScript and Vue with a detailed README describing how to use the two together.](https://github.com/Microsoft/TypeScript-Vue-Starter)を読んで、SFCでTSを使う方法を勉強しました

- webpackでスタイルシートを取り込み形を理解する
  - [最新版で学ぶwebpack 4入門 - スタイルシート(CSSやSass)を取り込む方法 - ICS MEDIA](https://ics.media/entry/17376)をひと通りやりました
  - loaderの読み込み順(記述の逆順に読み込まれる)や、役割がよくわかってなかったもの(style-loaderやextract-text-webpack-plugin)が理解できたのがよかったです

- Keymapperの開発
  - ページを進む・戻る機能は実装しました [Add history back and history forward by yinm · Pull Request #27 · yinm/keymapper](https://github.com/yinm/keymapper/pull/27)
  - TSを導入しました [Add typescript by yinm · Pull Request #23 · yinm/keymapper](https://github.com/yinm/keymapper/pull/23)
  - Sassを導入しました [Use SCSS by yinm · Pull Request #28 · yinm/keymapper](https://github.com/yinm/keymapper/pull/28)
  - LintやCIに関しては着手できず...

- HTML/CSSの素振り
  - [CODEPREP | UIデザイン実践](https://codeprep.jp/tracks/UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E5%AE%9F%E8%B7%B5)を1日1ブック勉強して、このブログで読書メモをつけました
  - もともと30分くらいで終わらせるつもりだったのが、結局1時間以上かかってるのはちょっと問題かもなあと思いつつ、勉強にはなってるのでいいかなと思ってます

## 来週やること

- Keymapperの開発
  - pin機能の追加します
  - タブを閉じる機能の追加します

- Keymapperの開発環境の整備
  - TSの文法で書き直します
  - Lintを動くようにします

- HTML/CSSの素振り
  - [CODEPREP | UIデザイン実践](https://codeprep.jp/tracks/UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E5%AE%9F%E8%B7%B5)を引き続き1日1ブックやります

## 雑感

今週はwebpackの勉強ができたのが大きかったなと思います。人の設定を見て何やってるのかが理解できるようになってきました。何度も環境を作っていく中で理解できたので、よくわからない技術は何度も繰り返してみるのが大事だなあと思いました。

来週以降はKeymapperにTSやSassを導入できたのはいいけれど、全然活用できてないので徐々に書き直していこうと思います。その過程でそれぞれの技術に書き慣れたい...！

そういえば、Keymapperのユーザーが気がついたら7人いてびっくりしました。アナリティクスを見ると海外からのインストールもあったみたいです。自分が使いたい機能が使えればいいくらいのモチベーションで作ってるのですが、使ってもらえるのはうれしいですね。
