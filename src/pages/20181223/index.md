---
title: 週間レビュー (2018-12-17~)
date: "2018-12-23"
---

前回: [週間レビュー (2018-12-10~) | 楽しいだけで十分です](https://yinm.info/20181216/)

## 今週やったこと

### Node.jsのFW・ライブラリの素振り
- [yinm/express-sandbox](https://github.com/yinm/express-sandbox)
- [yinm/sequelize-sandbox](https://github.com/yinm/sequelize-sandbox)
  - こちらも仕事で初めて使ったので勉強
  - Expressの簡単なmiddlewareの写経をして理解を深めます
  - https://github.com/RobinBuschmann/sequelize-typescript/tree/master/example をして、Sequelize + TSの理解を深めます
- -> 全部やりました。ひとまずどんな感じに書けばいいかわかるくらいにはなったはず。
  - [express-sandbox/middleware at master · yinm/express-sandbox](https://github.com/yinm/express-sandbox/tree/master/middleware)
  - [yinm/clone-expressjs-api-error-handler](https://github.com/yinm/clone-expressjs-api-error-handler)
  - [sequelize-sandbox/06_sequelize-typescript-example at master · yinm/sequelize-sandbox](https://github.com/yinm/sequelize-sandbox/tree/master/06_sequelize-typescript-example)

### Vault
- [やわらかVault - ペパボテックブログ](https://tech.pepabo.com/2018/09/06/vault-workshop/)
  - これも仕事で使ってるけれど初めて使うので勉強します。
  - Consulも使ったことなかった合わせて勉強します
- -> こちらは完了できず...代わりにConsul動かすときにDockerをわかってる方があれこれ試せて理解が深められそうと思ってそちらの勉強をしてました。

### Docker
- [ITエンジニアになる！ チャレンジDockerによる仮想化環境構築入門 - 秀和システム あなたの学びをサポート](https://www.shuwasystem.co.jp/book/9784798054520.html)のch1 ~ 9
  - ざっくりDockerの概要を掴むために読んでみました
  - ただ、Swarmがよくわかってないです...
- [yinm/gihyodocker](https://github.com/yinm/gihyodocker)
  - 上記の本より踏み込んだ内容かなと思ってて、解説も丁寧なのでこちらでもう一度Dockerを勉強し直してます。

### DNS
- [【ダウンロード版】DNSをはじめよう　～基礎からトラブルシューティングまで～ - mochikoAsTech - BOOTH](https://mochikoastech.booth.pm/items/812516)のch1 ~ 2
  - DNSの仕組みをもう一度見直したいなあと思って読んでます。
  - ページ数がそこまで多くない本なのでサクッと終わらせればよかったのですが、ドメイン買ったり、AWSでドメイン設定したりするところに腰が少し重くなってしまって中途半端に...来週あたりにやり切ります。

### SPA
- [yinm/SinglePageWebApplications](https://github.com/yinm/SinglePageWebApplications)のch1 ~ 3
  - SPAの構築に必要な技術要素を理解したいなあと思って読んでます。
  - ちょっと内容が古い(ES2015以前の本)ですが、勉強になりそうなので一通り読んでみます。

## 来週やること

### Docker
- [yinm/gihyodocker](https://github.com/yinm/gihyodocker)のch2 ~ 4
  - Dockerの使い方を一通り理解できるようにします。

### DNS
- [【ダウンロード版】DNSをはじめよう　～基礎からトラブルシューティングまで～ - mochikoAsTech - BOOTH](https://mochikoastech.booth.pm/items/812516)のch3 ~ 5
  - DNSの仕組みをもう一度見直したいなあと思って読んでます。

### SPA
- [yinm/SinglePageWebApplications](https://github.com/yinm/SinglePageWebApplications)のch4 ~ 6
  - SPAの構築に必要な技術要素を理解したいなあと思って読んでます。

## 雑感
今週はわりと雑多に勉強してます。Dockerは年末の休みに勉強しようかなあと思ってたのですが、いい機会かなと思って勉強を初めてみました。一通り理解できたらConsulのクラスタ組んでみたりしようと思ってます。

来週は今週の続きで、仕掛かり中のものを一段落させていく週になりそうです。

仕事やプライベートでJavaScriptを書いてて、もっと自由にJavaScriptが書けるようになりたいなあと思うことが増えたのでがんばります。
