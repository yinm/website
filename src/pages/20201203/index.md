---
title: MDNで英語・日本語のページの切り替えをhotkeyで行える、mdn-language-changerを作った
date: "2020-12-03"
tags: ['TypeScript', 'OSS']
---

[MDN](https://developer.mozilla.org/ja/)で英語・日本語のページの切り替えをhotkeyで行える、[mdn-language-changer](https://github.com/yinm/mdn-language-changer)を作りました。[Tampermonkey](https://www.Tampermonkey.net/)を使って実行できるuserscriptです。

### なぜ作ったのか
ドキュメントを快適に閲覧したかったからです。

Webフロントエンドの開発をしていると、MDNのドキュメントを見ることが多いのですが、次のような状況がままあります。

- アクセスした先が英語ページだったので、日本語があるならそちらで読みたい (英語 -> 日本語の切り替え)
- 気になる部分があるので、原文にあたりたい (日本語 -> 英語の切り替え)

今まではセレクトボックスから切り替えてたのですが、キーボードで切り替えできたら便利だよなあと思って作ってみました。

### どんなことができるのか

- 日本語への切り替えは、日本語以外のページ(e.g. https://developer.mozilla.org/en-US/docs/Web/JavaScript )で、`j`・`a`の順でキー入力してもらえば切り替えられます。
- 英語への切り替えは、英語以外のページ(e.g. https://developer.mozilla.org/ja/docs/Web/JavaScript )で、`e`・`n`の順でキーを入力してもらえば切り替えられます。
- 対応言語が存在しないページ(e.g. 現時点で日本語ページが存在しない、[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController))には、アクセス時にSnackbarで対応言語が存在しない旨を表示します。

### 利用した技術
使う分には関係ないですが、せっかくなので。

#### [github/hotkey: Trigger an action on an element with a keyboard shortcut.](https://github.com/github/hotkey)
GitHub製のhotkeyを登録できるライブラリです。このライブラリを選んだのは、キーの順番入力に対応していて、コードも読みやすい(シンプルな構造で、TSで書かれている)からです。このライブラリの入力されたキーの探索にTrieを使っていて、データ構造を適切に使えばわかりやすい実装ができるのかあと勉強になりました。

#### [esbuild - An extremely fast JavaScript bundler](https://esbuild.github.io/)
Goで実装されていて、高速と噂のbundlerです。もともとはbundlerを使う気はなかった(GistにJSで書いてしまおうと思ってた)のですが、github/hotkeyがESM形式でしか配布されておらず、TampermonkeyでESMを読み込む機構が見つけられなかったので、bundlerでTampermonkeyで実行できる形式にしました。esbuildを選んだ理由としては、使ったことがなかったので試してみたかったのと、組み込みでTSをサポートしているので開発環境を作るのが楽そうだと思ったからです。

使ってみた印象ですが、今回の用途だと問題なく使えててよかったです。Tampermonkeyに実行させるスクリプトは、userscriptのheaderが必要なのですが、組み込みのAPIで対応できました(Transform APIで`Banner`)。今回みたいなちょっとしたツールを作る時はまた使ってみようと思います。