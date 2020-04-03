---
title: iOSアプリ設計パターン入門をTypeScriptで実装する (MVP - simple version)
date: "2020-04-03"
---

[前回](https://yinm.info/20200320/)の続きで、MVPをTypeScriptで書き直してみました。simple versionとなっているのは、原著より実装するページを減らしたためです(原著のサンプルコードだと検索ページと詳細ページが実装されているのですが、今回は検索ページのみ実装しました)。

コードはこちら: [yinm/typescript-architecture_samplecode](https://github.com/yinm/typescript-architecture_samplecode)

モジュールごとの概要を書きます。

### [Model](https://github.com/yinm/typescript-architecture_samplecode/blob/master/03_MVPSample-simple-version/src/Model.ts)
- Presenter, Viewのことを知らない (役割としては、MVCのModelと変わらない)
- 今回のコードだと、APIリクエストを担当する

### [Presenter](https://github.com/yinm/typescript-architecture_samplecode/blob/master/03_MVPSample-simple-version/src/Presenter.ts)
- Model, Viewのことを知っている
- Viewから受けたユーザーの入力を元に、Modelへの処理の依頼を行い、その結果をViewに描画するよう依頼する
  - 今回の例だとプレゼンテーションロジックはなさそうだが、ある場合はPresenterが行う

### [View](https://github.com/yinm/typescript-architecture_samplecode/blob/master/03_MVPSample-simple-version/src/View.ts)
- Presenterのことを知っており、Modelのことは知らない
- 画面の描画とユーザー入力の受付を担当し、ユーザーの入力に対する処理をPresenterに依頼する
- Presenterからの依頼を受けて描画を行う (Passive Viewの場合はこのパターンしかない)
  - Supervising Controllerの場合は、Modelの変更をObserverパターンで監視して、Modelの変更したタイミングで描画することもある

### 感想
Swiftの読解力の低さなどから、コードをうまく書けてる感じがしません... (端折ったり、雰囲気で書いた部分が多い)

ひとまず以下の役割がわかってればよいのかなあと思ってます。

- View
  - 画面表示
  - ユーザー操作の受付
- Presenter
  - Modelへの処理要求
  - プレゼンテーションロジック
- Model
  - ドメインロジック