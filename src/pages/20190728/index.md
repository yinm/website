---
title: 週間レビュー
date: "2019-07-28"
---

前回: [週間レビュー | 楽しいだけで十分です](https://yinm.info/20190721/)

## 今週やること
- [この書籍について · JavaScriptの入門書 #jsprimer](https://jsprimer.net/)_ユースケース: Ajax通信~ (1日30分) 
  - JSの基礎の復習をします
  - 1章がそこそこ長くて1日で終わらせるのが難しいので、1日30分のみ勉強する方針にします
- -> やりました。(Todoアプリ_エントリポイントまで)
  - fetch APIの使い方やシンプルなCLIツールの作り方を学べてよかったです。

- [JavaScript AST入門　ソースを解析・加工して生産性に差をつける！](https://nextpublishing.jp/book/9728.html)_最初 ~ 最後
  - Babelの勉強してた時に、ASTがわかればもっと仕組みがわかるようになっていいんじゃない？という気持ちになったので読みます
- -> 途中までやりました。 (ch4まで)
  - ASTを扱うツール(parser -> traverser -> generator)を理解できました。
  - 再帰処理が苦手で、頭の中でうまくパースできないことがわかったので、アルゴリズムの勉強したほうがよさそうと思いました。

- [OAuth徹底入門 セキュアな認可システムを適用するための原則と実践（Justin Richer Antonio Sanso 須田智之 Authlete, Inc.）](https://www.shoeisha.co.jp/book/detail/9784798159294)_ch1 ~ 2
  - SPAの認証を考える時に、OAuthを使った認証についての知識が怪しいなと感じたので勉強します
- -> やりました。
  - OAuthが必要になった背景(クレデンシャルをクライアントに直接渡すなどの認証方法からの脱却)を理解しました。
  - OAuth2.0の構成要素(Resource Owner, Client, Authorization Server, Protected Resource Server)と、要素間のやりとりには、フロントチャネル(Resource Ownerを介する通信)とバックチャネル(Resource Ownerを介さない通信)があることを理解しました。

## 後日譚
JSのASTは、[O'Reilly Japan - Go言語でつくるインタプリタ](https://www.oreilly.co.jp/books/9784873118222/)を読んだ(途中までですが)ことで、以前に読んだ時より理解できるようになってるなあと感じました。
