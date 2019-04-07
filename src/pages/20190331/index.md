---
title: 週間レビュー
date: "2019-03-31"
---

前回: [週間レビュー (2019-03-18~) | 楽しいだけで十分です](https://yinm.info/20190324/)

## 先週やったこと

- [『現場で使える Ruby on Rails 5速習実践ガイド』サポートサイト | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839962227.html)
  - 認証機構の実装
  - セキュリティ機構
  - production環境の設定
  - -> やりました。セッション認証の実装や、Rails自体の機構(Credentials管理など)が学べてよかったです。

- React入門 (基礎、状態管理、ルーティング)
  - [teradonburi/learnReactJS at webpack](https://github.com/teradonburi/learnReactJS/tree/webpack)
  - [teradonburi/learnReactJS at ReactJSBasic](https://github.com/teradonburi/learnReactJS/tree/ReactJSBasic)
  - [teradonburi/learnReactJS at ReactRedux](https://github.com/teradonburi/learnReactJS/tree/ReactRedux)
  - [teradonburi/learnReactJS at ReactRouter](https://github.com/teradonburi/learnReactJS/tree/ReactRouter)
  - ->　やりました。React自体の文法は大丈夫そうですが、Reduxの理解があやしいのでもう少し勉強したほうがよさそうです。

- [エンジニアの知的生産術 ――効率的に学び，整理し，アウトプットする：書籍案内｜技術評論社](https://gihyo.jp/book/2018/978-4-7741-9876-7)
  - 効率のいい勉強方法を考え直したいので読みます
  - -> 読みました。学びのサイクルや本に合わせた読書スピードの話など、自分の中で言語化できてなかったものが言語化されていて、なるほどーという気持ちになりました。

### 追加でやったこと

- [Working With TCP Sockets - A short, concise guide that teaches Rubyists the basics of socket programming, and then some!](https://www.jstorimer.com/products/working-with-tcp-sockets)_最初 ~ Server Lifecycle
  - ネットワークの知識が弱くて、どこから手をつけたらいいの...となったので、勉強してます。
  - HTTP以下のプロトコルで問題があった時に、問題の切り分けができるようになりたいです。

- [Vue.js入門 基礎から実践アプリケーション開発まで：書籍案内｜技術評論社](https://gihyo.jp/book/2018/978-4-297-10091-9)_ch7 ~ 7-4
  - 理解の浅い部分を復習したくて読み直してます。Vuexとアプリ開発のところを読めればいいかなと思ってます。

## 今週やること

- [Working With TCP Sockets - A short, concise guide that teaches Rubyists the basics of socket programming, and then some!](https://www.jstorimer.com/products/working-with-tcp-sockets)_Client Lifecycle ~ 最後
  - ネットワークの知識が弱くて、どこから手をつけたらいいの...となったので、勉強してます。
  - HTTP以下のプロトコルで問題があった時に、問題の切り分けができるようになりたいです。
- -> Network Architecture Patternsより前の章は写経しながら読みました。
  - ソケットのコネクションを貼って読み書きする流れなどがわかってよかったです。
  - Network Architecture Patternsは今読んでもあまり理解できなそうな感じがしたので読みませんでした。

- [Vue.js入門 基礎から実践アプリケーション開発まで：書籍案内｜技術評論社](https://gihyo.jp/book/2018/978-4-297-10091-9)ch7-5 ~ ch10
  - 理解の浅い部分を復習したくて読み直してます。Vuexとアプリ開発のところを読めればいいかなと思ってます。
- -> 写経しながら読みました。
  - 以前読んだ時より理解できることが増えてたと思うので、ひとまず大丈夫かなあという印象。
  - 次にやることは、実際にアプリを書きながら気になったところを復習します。(keymapperの開発もまたやろう)
  - あとは、E2Eテストをあまり書いたことがなくて、WebDriverの使い方などを勉強するとよさそうなのかなと思いました。

- SokusekiのJWT認証の素振り
  - [Rails 5.2でJWTとdeviseを使った認証の仕組みを作る - production.log](http://blog.naoshihoshi.com/entry/2018/05/14/153000)をdeviseなしで実装する
  - omniauth-githubを使った認証を、deviseを使わずに実装する
  - Sokusekiで、omniauth-github + JWTの認証を実装する
- -> 一通りやりました。
  - [[no merge] Add jwt authn by yinm · Pull Request #98 · june29/sokuseki](https://github.com/june29/sokuseki/pull/98)
  - 次にやることとしては、[nsarno/knock: Seamless JWT authentication for Rails API](https://github.com/nsarno/knock)の実装を読んでみます(JWT認証のいい感じの実装方法が知りたい)

### 追加でやったこと
- [なるほどUnixプロセス ― Rubyで学ぶUnixの基礎 - 達人出版会](https://tatsu-zine.com/books/naruhounix)
  - [Working With TCP Sockets - A short, concise guide that teaches Rubyists the basics of socket programming, and then some!](https://www.jstorimer.com/products/working-with-tcp-sockets)の中で出てきたファイルディスクリプタなどの用語の理解がふわっとしてたので読んでみました。
  - ひとまず全体を読むことはしたので、次はコマンドを入力しながら2週目を読むといいかなと思ってます。

## 雑感
今回から予定を日曜始まりにしたので、フォーマットを変更しました。(タイトルの日付変更なども面倒だったので省きました)

Working With TCP Socketsは洋書なので日本語に比べると読むスピードが落ちるのですが、読みやすい英語だと思うので、ソケットプログラミングを勉強したい人にはおすすめできそうです。

フロントエンドのコードを書いてる時に、Visual Stdio Code使った方が、補完が効いたり効率よく書けたりするのかなあという気持ちになったので、今週はお試しで使ってみようかと思います。

---

週間レビューの書き方を変えて、1エントリに今週のことしか書かないようにします。 (先週の内容をあちこちにコピペするのも微妙だなと思ったので)
