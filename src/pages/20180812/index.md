---
title: 週間レビュー (2018-08-06~)
date: "2018-08-12"
---

前回: [週間レビュー (2018-07-30~) | 楽しいだけで十分です](https://yinm.info/20180805/)

## 今週やったこと

- コマンドラインツールの開発・公開
  - [Trelloのラベルに書いた時間を集計してくれるクライアントの作成 | 楽しいだけで十分です](https://yinm.info/20180806/)
  - Jestのテストも書いてみました (テスト書きやすいようにちょっと強引にメソッド抽出したりしましたが...)
  - ついでに、コードの中で使った`module.exports`がふと気になって調べたりました [Node.jsのmoduleの読み込みについて調べたこと | 楽しいだけで十分です](https://yinm.info/20180811/)

- ESLintの設定を書けるようにする
  - カスタムルールの作り方を勉強しました [ESLintのカスタムルールの作り方を学ぶ | 楽しいだけで十分です](https://yinm.info/20180808/)
  - あとはPluginの仕組みを学ぶために、実装がシンプルなパッケージを写経したりしました。 [yinm/clone-eslint-plugin-if-in-test](https://github.com/yinm/clone-eslint-plugin-if-in-test)
  - Keymapperにはちゃんと適用できてないので、引き続き対応します

- Macの新調
  - 1週間新しいMacをメインで使ってみましたが、特に困らなかったのでだいたい大丈夫かなと思ってます

## 来週やること

- CSSの勉強
  - Chrome拡張を実装した時にCSSが書けなすぎてかなしくなったので、次のことをやってみようかと思います
  - 基礎をもう一度復習: [HTML&CSS入門：イチからWebデザインを習得する講座](https://saruwakakun.com/html-css/basic)
  - セレクタをどう指定するのがいいのか、いつも迷うので勉強: [Web制作者のためのCSS設計の教科書 モダンWeb開発に欠かせない「修正しやすいCSS」の設計手法 - インプレスブックス](https://book.impress.co.jp/books/1113101128)

- TypeScriptの素振り
  - これから実装しようと思ってるプロジェクトで使おうかなあと思ってるので、TypeScriptを勉強します
  - 以前にも読んだ、 [速習 TypeScript - WINGS](https://wings.msn.to/index.php/-/A-03/WGS-JSF-002/)を読んでみようかと思います

- UIライブラリの調査
  - TSと同じく使おうかなと思ってるので、試してみます
  - Vue.jsを使うので、[Quick Start — Vuetify.js](https://vuetifyjs.com/ja/getting-started/quick-start)あたりをやる予定です
  - 合わせて、実装を読んだり、写経したりしてみようかと思います(UIライブラリを使わない場合は、自前で似たものを用意することになるので、実装の参考にしたいので)

## 雑感

今週はESLintやJestなど、フロントエンド開発で使われるエコシステムの使い方が勉強できてよかったなと思ってます。来週はまとまった休みを利用して、前から勉強しようと思ってたCSSなどの理解が深めようと思ってます。