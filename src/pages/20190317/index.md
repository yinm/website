---
title: 週間レビュー (2019-03-11~)
date: "2019-03-17"
---

前回: [週間レビュー (2019-03-04~) | 楽しいだけで十分です](https://yinm.info/20190310/)

## 今週やったこと

- JWT認証
  - SPA用の認証機構を作りたいので、JWT認証を作ってみます
- -> やりました。gemなしとありの2パターンを試したので、実装のイメージがつくようになりました
  - [Rails 5.2でJWTとdeviseを使った認証の仕組みを作る - production.log](http://blog.naoshihoshi.com/entry/2018/05/14/153000)
  - [KnockでRails APIモードでJWT認証してみる - Qiita](https://qiita.com/kiyodori/items/3b7817af7d16bcc8f7dd)

- omniauth
- -> strategyの仕組みの理解と、付随してRackの作り方が学べました。
  - このドキュメントがわかりやすかったです [Strategy Contribution Guide · omniauth/omniauth Wiki](https://github.com/omniauth/omniauth/wiki/Strategy-Contribution-Guide)
  - 仕組みを理解したことで、不要になったstrategyに気づけました [👋 使っていないstrategyにお別れする by yinm · Pull Request #88 · june29/sokuseki](https://github.com/june29/sokuseki/pull/88)

## 来週やること

- [フロントエンドと Web API で分離したい！ · Issue #89 · june29/sokuseki](https://github.com/june29/sokuseki/issues/89)で認めたもの素振りをします
    - RailsのJWT認証付きのエンドポイントを、Reactから叩けるようにする
    - Reactの入門
      - [正真正銘のReactだけの不純物なしでReact入門](https://sbfl.net/blog/2019/02/20/react-only-tutorial/)
      - [[DL版] りあクト！ TypeScriptで始めるつらくないReact開発（上下合本） - @oukayuka - BOOTH](https://booth.pm/en/items/1044097)

## 雑感
最近は認証の実装方法を勉強することが多かったですが、仕組みがわかってきたので実際にアプリに取り込む準備を始めます。あとは雰囲気で書いてたReactを再入門します...！
