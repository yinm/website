---
title: Nuxt.js v2.0 + TypeScriptで環境構築
date: "2018-09-24"
---

実際に環境構築をしたPRはこちら [Try Nuxt.js v2.0 and TS by yinm · Pull Request #1 · yinm/nuxtjs-sandbox](https://github.com/yinm/nuxtjs-sandbox/pull/1)

Nuxt.js v2.0での環境構築の方法などは、[Nuxt.js v2.0.0がリリースされたので触ってみた【変更点まとめ】 - Studio Andy](http://studio-andy.hatenablog.com/entry/nuxt-v2)を参考にしました。

Nuxt.js + TypeScriptの環境構築は、[Nuxt.js+ExpressのプロジェクトをTypeScript化する - Crieit](https://crieit.net/posts/Nuxt-js-Express-TypeScript#%E8%A8%AD%E5%AE%9A%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E6%BA%96%E5%82%99)を参考にしました。ただ、こちらの記事はNuxt.js1系になっているため、そのままでは動かないようでした。Nuxt.js v2.0がwebpack4に対応していることが原因なので、TypeScript moduleを[Nuxt Edge - Issue when running/building the project · Issue #48 · nuxt-community/typescript-template](https://github.com/nuxt-community/typescript-template/issues/48#issuecomment-396437560)の内容で書き直して、webpack4対応すると動きました。

ここまでで環境ができるはずです。

PRでは、ESLintを使ってTypeScriptのLintもしてみました。やり方は[Vue + TypeScriptなプロジェクトにESLintを導入する - Please Drive Faster](https://joe-re.hatenablog.com/entry/2018/01/02/230806)を参考にしました。

---

以下は、何をしてるんだろうな？と気になって調べたもののメモです。

`vue-shims.d.ts`のような型定義ファイルは、単一ファイルコンポーネント(`*.vue`)の場合にVueの型定義を自動でimportして、TypeScriptに型情報を伝える。ref: [Single File Components - Microsoft/TypeScript-Vue-Starter](https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components)

ts-loaderの`appendTsSuffixTo`の設定は、単一ファイルコンポーネント(`*.vue`)内のTypeScriptコードを認識できるようにするために必要。ref: [TypeStrong/ts-loader: TypeScript loader for webpack](https://github.com/TypeStrong/ts-loader#appendtsxsuffixto-regexp-default)

