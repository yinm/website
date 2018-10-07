---
title: 週間レビュー (2018-10-01~)
date: "2018-10-07"
---

前回: [週間レビュー (2018-09-24~) | 楽しいだけで十分です](https://yinm.info/20180930/)

## 今週やったこと

### keymapperのTS化
- クラススタイルVueコンポーネントにする
- パッケージの更新 (Renovateのオートマージの設定も試す)
  - ただ、オートマージはうまく機能せず...CIが必要とかなのかなあ..,

### Vue.jsの勉強
- [Vue.js入門 基礎から実践アプリケーション開発まで | Gihyo Digital Publishing … 技術評論社の電子書籍](https://gihyo.jp/dp/ebook/2018/978-4-297-10092-6)のch4

### DB設計の勉強
- [達人に学ぶDB設計 徹底指南書 ～初級者で終わりたくないあなたへ（ミック）｜翔泳社の本](https://www.shoeisha.co.jp/book/detail/9784798124704)を通読

### HTML/CSS
- [yinm/trace-www.eana.jp](https://github.com/yinm/trace-www.eana.jp)でサイトのコーディングをトレース (仕掛り中)
  - ただ、もう少しシンプルな例から始めた方がよさそう。シンプルなレイアウトを作るところを身につけてからやったほうが学習効果が高そうなので
  - トレースする土台はNuxtを使ってみた。静的サイトだとオーバースペックなところもあると思うけど、Vueでコンポーネントを作ることに慣れることができたり、HMRの仕組みが導入できてコーディングを楽にできるので、そんなに悪い選択肢じゃないのかなと思った

## 来週やること

### TypeScript
- 型定義の勉強 (オブジェクト型の書き方など、さっとわからないものが出てきたので)
  - [TypeScriptの型入門 - Qiita](https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a)を読む

### Vue
- [Vue.js入門 基礎から実践アプリケーション開発まで | Gihyo Digital Publishing … 技術評論社の電子書籍](https://gihyo.jp/dp/ebook/2018/978-4-297-10092-6)のch5

### HTML/CSS
- [６ステップでマスターする　「最新標準」HTML+CSSデザイン | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839960223.html)のch2
  - 一度写経したことある本なのですが、自分の力だけで再現できるように、「デザインだけ見てコードを書く」 -> 「サンプルのコードと答え合わせ」をして見ます

## 雑感
会社で宣伝したこともあり、[keymapperのstar数](https://github.com/yinm/keymapper/stargazers)が10を超えました。star数が増えると、単純なのですがモチベーションが上がりますね！

それと、OpenAPI Generatorのプロジェクト構成などのメモを以前にこのブログで書いたのですが、それがOpenAPI GeneratorのREADMEに載りました！めでたい！ [OpenAPITools/openapi-generator: OpenAPI Generator allows generation of API client libraries (SDK generation), server stubs, documentation and configuration automatically given an OpenAPI Spec (v2, v3)](https://github.com/OpenAPITools/openapi-generator#5---presentationsvideostutorialsbooks)

DB設計の本は一度読んだことがあったけれど、改めて読んでもなるほど〜と思うこと(アンチパターンの章など)が多くて勉強になりました。来週はまたフロントエンドの技術に時間を割きます。HTML/CSSをさっと書けるようになりたい。
