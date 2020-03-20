---
title: iOSアプリ設計パターン入門をTypeScriptで実装する (Cocoa MVC)
date: "2020-03-20"
---

[前回](https://yinm.info/20200314/)の続きで、Cocoa MVCをTypeScriptで書き直してみました。

コードはこちら: [yinm/typescript-architecture_samplecode](https://github.com/yinm/typescript-architecture_samplecode)

モジュールごとの概要を書きます。

### EventEmitter / Model
- 原初MVCと全く同じ (ControllerやViewのことは知らず、自身の状態に変化があった時にEventEmitterを使って通知する)

### [Controller](https://github.com/yinm/typescript-architecture_samplecode/blob/master/02_CocoaMVCSample/src/Controller.ts)
- Model, Viewのことを知っており、ユーザーの入力に応じた処理をModelに依頼、Model・Viewのイベントハンドラの設定、Viewの生成を行う

### [View](https://github.com/yinm/typescript-architecture_samplecode/blob/master/02_CocoaMVCSample/src/View.ts)
- ModelやControllerのことは知らず、画面の描画を担当する
- ([原初MVCの実装](https://github.com/yinm/typescript-architecture_samplecode/blob/master/01_OriginalMVCSample/src/View.ts)のままだと何もやることがないクラスになりそうだったので、HTMLをJSで生成する仕事を与えて、それっぽくしてます)

### おまけ
コードを書いてる途中で、unmount時のイベントリスナーの解除をしてないことに気付いたのですが実装してません(原初MVCとの差分がわかりにくくなるかなと思いまして...)。

Cocoa MVCのWebフロントエンド版の実装でいうと、[Todoアプリ · JavaScript Primer #jsprimer](https://jsprimer.net/use-case/todoapp/)も参考になるのかなと思います。iOSアプリ設計パターン入門との違いは、Viewのイベントリスナーの追加をView側で行っていることでしょうか(Controllerからは、Callback関数を渡す)。リッスンしたいイベントをController側で変更したいなどの要件がないなら、View側でイベントリスナーを追加する方がすっきりするのかなあと思いながら、コードを読んでました。
