---
title: iOSアプリ設計パターン入門をTypeScriptで実装する (原初MVC)
date: "2020-03-14"
---

最近、[PEAKS（ピークス）｜iOSアプリ設計パターン入門](https://peaks.cc/books/iOS_architecture)を読んでいます。GUIアーキテクチャの変遷やそれぞれの特徴などが詳しく説明されているので、普段Webフロントエンドの開発をしている自分にとっても勉強になります。ただ、タイトルの通りiOSアプリ向けの本なので、コードサンプルがSwiftで書かれてます。自分はSwiftの経験がほぼないので、なんとなくで読み進めていたのですが、普段書いている言語で書き直してみたら勉強になるかなあと思い、TypeScriptで書き直してみました。

コードはこちら: [yinm/typescript-architecture_samplecode](https://github.com/yinm/typescript-architecture_samplecode)

せっかくなので、モジュールごとの概要を書きます。

### [EventEmitter](https://github.com/yinm/typescript-architecture_samplecode/blob/master/01_OriginalMVCSample/src/EventEmitter.ts)
- Observerパターンを実現するために用意したクラス
- ほぼ、[js-primer/EventEmitter.js at master · asciidwango/js-primer](https://github.com/asciidwango/js-primer/blob/master/source/use-case/todoapp/final/final/src/EventEmitter.js)の実装をお借りして、型定義をつけただけ

### [Model](https://github.com/yinm/typescript-architecture_samplecode/blob/master/01_OriginalMVCSample/src/Model.ts)
- ControllerやViewのことは知らず、自身の状態に変化があった時にEventEmitterを使って通知する

### [Controller](https://github.com/yinm/typescript-architecture_samplecode/blob/master/01_OriginalMVCSample/src/Controller.ts)
- Modelのことを知っており、ユーザーの入力に応じた処理をModelに依頼する

### [View](https://github.com/yinm/typescript-architecture_samplecode/blob/master/01_OriginalMVCSample/src/View.ts)
- ModelやControllerのことを知っており、ユーザーの入力とControllerを繋げたり、Modelからの通知を受け取って表示の更新をする
