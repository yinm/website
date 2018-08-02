---
title: hotkeyを設定できるChrome拡張を公開しました。
date: "2018-08-02"
---

[yinm/keymapper: Chrome Extension for hotkeys](https://github.com/yinm/keymapper)

任意のキーに指定した形式でタイトルとURLをコピーできます。Markdown形式でリンクを書きたい時などに便利な子です。初めてChrome拡張を公開したので、開発の経緯や今後の予定を書いておきます。

## 開発の経緯
もともと、[r7kamura/keyworks: A web browser extension to customize keyboard shortcuts.](https://github.com/r7kamura/keyworks)を使っていて特に不満があった訳でもないのですが、「こういうの自分で作れると楽しそうだなあ。カスタマイズしたくなったら自分でやればいいし。」と思ったのがきっかけでした。加えて、最近Vue.jsを勉強していたので、それを使える場所としてよさそうだったからというのもあります。

実際にやって見て、「webpackがわからない！」や「CSSってなんでこんなに難しいの！」など色々困ったりはしたのですが、なんとか形になったのがいまここです。

## 今後の予定
いくらかあるので箇条書きに。

* 機能拡張したい...！(Vimっぽいキーバインドでスクロールできるようにするなど)
* 開発環境をよくしたい(ESLintとPrettierを入れたけどうまく使えていない...)
* コンポーネントの設計を綺麗にしたい (適当に分けただけになってるので...)
* スタイルをちゃんと当てたい (CSS勉強します...)

## なにはともあれ
これからも引き続き開発していこうと思ってます。興味のある方は使っていただいたり、感想をいただけると幸いです！

インストールはこちらから 
https://chrome.google.com/webstore/detail/keymapper/gddmjjinakgblokjagbcehkccngffpdj
