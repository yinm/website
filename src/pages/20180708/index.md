---
title: Atomic Designを部分的に取り入れてみる
date: "2018-07-08"
---

以前にも書いていたのですが、 [Atomic Design ～堅牢で使いやすいUIを効率良く設計する](http://gihyo.jp/book/2018/978-4-7741-9705-0) を読んでAtomic Designを勉強したので、このサイトに取り入れてみます。このくらいの規模ならAtomic Designにしなくてもよい気はするのですが、勉強も兼ねてやっています。ひとまず次のPRでテキストのコンポートネント化をしてみました。

[Add txt component by yinm · Pull Request #16 · yinm/website](https://github.com/yinm/website/pull/16)

まだAtomsを1個だけ実装しただけなので、いまいち効果もわかりません。
ただ、実装の中でGatsbyでCSS Modulesの使うには、ファイル名を `~.module.css` にすればよいことがわかるという収穫がありました。(最初からこれで実装すればよかった...。よくわかってなかったから仕方ないけれど。)
詳しくは次のリンク先に書いてあります。

[Introduction to Using CSS in Gatsby | GatsbyJS](https://www.gatsbyjs.org/tutorial/part-two/#css-modules)

