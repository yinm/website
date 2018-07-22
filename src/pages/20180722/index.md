---
title: 週間レビュー (2018-07-16~)
date: "2018-07-22"
---

前回: [週間レビュー (2018-07-09~) | 楽しいだけで十分です](https://yinm.info/20180715/)

## 今週やったこと

* [yinm/ruby-on-rails-application-programming](https://github.com/yinm/ruby-on-rails-application-programming)
  * ch4 ~ 6の全体はさらっと斜め読みしつつ、不安のあるところは写経したり、読書メモを取ってみました
    * 不安のあったところは、viewのform関連のヘルパー、modelのvalidation機能、controllerのrequest, response機能、セッション管理の仕組みあたり
    * ふわっと理解していた部分(Strong Parametersなど)が自信を持って書けるようになったのが収穫

* [yinm/nuxt-tech-book](https://github.com/yinm/nuxt-tech-book)
  * Nuxtのmiddlewareの使い方などがわかってよかったです
  * 次のステップは何かアプリ書いてみるといいのかなあと思ってます

* Chrome拡張の作成 ([yinm/keymapper](https://github.com/yinm/keymapper))
  * 実装してみてたのですが、うまくいかないことがわかって一旦全部削除してしまったのがいまここです
  * Chrome拡張を前に作ったのですが、作法を忘れていたのでネットで見たサンプルを写経しながら思い出してました ([yinm/chrome-extensions-sandbox](https://github.com/yinm/chrome-extensions-sandbox))
  * 他には、こんな感じのものが作りたいという元があるので、それを写経しました ([yinm/clone-r7kamura-keyworks](https://github.com/yinm/clone-r7kamura-keyworks))

## 来週やること

* Chrome拡張の作成
  * [r7kamura/keyworks: A web browser extension to customize keyboard shortcuts.](https://github.com/r7kamura/keyworks) の実装を参考にしつつ、URLとタイトルをコピペできるキーバインドの実装ができるところまでいきたいなと思ってます

* webpackの設定を書けるようになる
  * Chfome拡張を作ってる時に必要な気がしたので勉強します (webpackは何度か勉強しているけれど、すぐに忘れてしまう...)
  * チュートリアル的なものを写経しつつ、module bundler自体の勉強になりそうな [ronami/minipack: 📦 A simplified example of a modern module bundler written in JavaScript](https://github.com/ronami/minipack) を写経してみようかなと思ってます

* SSRの仕組み・実装方法の理解
  * Nuxtに頼らずに自分でもSSRのやり方を知っておきたいので勉強します (NuxtのSSRでハマった時でも役立ちそうな気がするので)
  * [Vue SSR ガイド | Vue.js サーバサイドレンダリングガイド](https://ssr.vuejs.org/ja/)を読んだり、写経したりします
