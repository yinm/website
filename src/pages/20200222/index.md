---
title: TypeScriptのInstanceTypeの使い方
date: "2020-02-22"
---

## 背景
[Vuetifyのコードを読んでたときに`InstanceType`が出てきた](https://github.com/vuetifyjs/vuetify/blob/263d4645a99b08982bc2b6c1fbe5926cc840fd74/packages/vuetify/types/services/index.d.ts#L15)のですが、あまり見かけない型だったので調べてみました。

## InstanceTypeとは
TypeScriptが提供してくれているUtility Typesのひとつで、[公式](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypet)によると、コンストラクター関数型のインスタンス型を取得できます。

型定義としては、以下のもの (TypeScript3.7.5で確認)

```ts
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any
```

確かにコストラクター関数型からインスタンス型を取得してるのですが、ここまでだと何がうれしいのかがいまいちわからなかったので、ユースケースを調べてみました。

### ユースケース
[Need documentation for InstanceType · Issue #25998 · microsoft/TypeScript](https://github.com/Microsoft/TypeScript/issues/25998#issuecomment-471367329)のコメントがわかりやすいかったです。 (説明用のコードもあります。)

意訳すると
- 普段使いする型ではない (通常のクラス定義なら、クラス名からインスタンス型を取得できる)
- InstanceTypeが役立つのは、クラス定義にアクセスできない場合・不明(ジェネリクスを使う)な場合などがある

他の例として、Vue.jsの型定義に利用するというものもありました(`$refs`や`mixin`に使ってます)。 [デコレータ使わない Vue.js + TypeScript で進んだ「LINEのお年玉」キャンペーン - LINE ENGINEERING](https://engineering.linecorp.com/ja/blog/vue-js-typescript-otoshidama/)

## まとめ
InstanceTypeは、
- Utility Typesのひとつで、コンストラクター関数型のインスタンス型を取得できる
- ユースケースは、クラス定義にアクセスできない場合・不明(ジェネリクスを使う)な場合などがある
