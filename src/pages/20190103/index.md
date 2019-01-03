---
title: Vanilla JS で書かれたSPAの実装を読む
date: "2019-01-03"
---

[rishavs/vanillajs-spa: a simple SPA in vanilla js](https://github.com/rishavs/vanillajs-spa) を読んでみたので、復習も兼ねてどうやって動いているのかを整理します。

### https://github.com/rishavs/vanillajs-spa/blob/master/src/index.html
SPAの土台になるHTML。エントリポイントになるJS(app.js)の読み込みをしている。JSからコンテンツを制御するコンテナは3箇所(header, page, footer)ある。JSのコンテンツ制御が完了するまでは、読み込み中であることを表示している(`<article> Loading....</article>`)

### https://github.com/rishavs/vanillajs-spa/blob/master/src/app.js
JSのエントリポイント。ルーティング処理(どのコンポーネントも`render()`と`after_render()`を持つようにしてる。`innerHTML`を使って、`render()`のHTMLで上書きしている)と、ルーティング処理のイベントハンドラ(パス変更制御としてのhashchange、読み込み後のページ処理としてload)を設定している。

### https://github.com/rishavs/vanillajs-spa/tree/master/src/views/pages
メインコンテンツのコンポーネント(pageのコンテナに入れるもの)。`render()`にレンダリングしたいHTMLが入る。`after_render()`はレンダリング後のフック処理(イベントハンドラの設定などを行うのによさそう。 e.g. https://github.com/rishavs/vanillajs-spa/blob/master/src/views/pages/Register.js )

### https://github.com/rishavs/vanillajs-spa/tree/master/src/views/components
メインコンテンツ以外のコンポーネント。

### https://github.com/rishavs/vanillajs-spa/blob/master/src/services/Utils.js
便利メソッドをまとめたモジュール。リクエストのパスを分解して、ルーティングの判断などで使っている。

### 所感
シンプルなSPAですが、Vanilla JSだけで特にパッケージを使わずにSPAが作れるのは面白いですね。SPAを構築するための便利なフレームワークはいっぱいありますが、それらを使いこなすためにも土台になるJSの設計を学ぶのはいいことかなあと思うので、今後も色々読んでみようと思いました。
