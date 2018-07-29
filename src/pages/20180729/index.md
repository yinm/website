---
title: 週間レビュー (2018-07-23~)
date: "2018-07-29"
---

前回: [週間レビュー (2018-07-16~) | 楽しいだけで十分です](https://yinm.info/20180722/)

## 今週やったこと

* Chrome拡張の作成
  * 素振り用の環境でひとまずURLとタイトルを指定した形式でコピペできるようにしました。
  * オプションページの実装にVue.jsを使ってます (CSPを設定しないと動かなかったりしてハマりました...)
  * [chrome-extensions-sandbox/keyworks at master · yinm/chrome-extensions-sandbox](https://github.com/yinm/chrome-extensions-sandbox/tree/master/keyworks)

* webpackの設定を書けるようになる
  * 上記のchrome拡張の作成の中であれこれ触ったので、いくらか設定の意味を理解できるようになったと思います。
  * あとはmodule bundlerの仕組み理解のために、こちらの写経をしてみました [module bundlerの仕組みをお勉強 | 楽しいだけで十分です](https://yinm.info/20180724/)

* SSRの仕組み・実装方法の理解
  * 他のものに集中しようと思ったので、あまりできてないです

* ESLintの設定を書けるようにする
  * chrome拡張の開発に導入するために勉強してみました
  * JSはうまくできてそうだけれど、Vue.jsの場がうまくできなかったり、prettierとの連携がうまくできてない気がするので、このあたりは引き続き勉強かなと思ってます

## 来週やること

* Chrome拡張の作成
  * ちゃんとした環境で開発して、リリースするところまでやります

* ESLintの設定を書けるようにする
  * Vue.js、prettierとの連携ができるようにします

* コマンドラインツールの開発・公開
  * ローカルで使ってるtrelloのクライアントをGitHubに公開します(ちょっとしたスクリプトなのですが、他の環境でも使えるようにしたいので)
  * Jestの素振りも兼ねて、テストを書いてみようと思います
