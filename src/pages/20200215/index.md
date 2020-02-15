---
title: vue-next(Vue.js 3) + TypeScript環境を、Vue CLIで構築する
date: "2020-02-15"
---

まもなくリリース予定のVue.js 3(以下、Vue3)で、TypeScript(以下、TS)を組み合わせた環境を構築してみました。

## 背景・課題
Vue CLIを使わない方法は、[vue-next（Vue.js 3.0 wip）+ TypeScript + webpackでの開発環境を構築する - Qiita](https://qiita.com/ryo2132/items/2b10f03e3d4ea04be649)に書かれています。

しかし、Vue CLIから構築する方法は日本語の記事が見当たらなかったのでやってみました。

## 構築方法

実際に構築したリポジトリは、[yinm/vue3-typescript-by-vuecli](https://github.com/yinm/vue3-typescript-by-vuecli)です。

まず、Vue CLIで、vue createします。presetに関しては以下の選択をしました(今回の説明に必要なTSのみを有効にして作りました)。

```
Vue CLI v4.2.2
? Please pick a preset: Manually select features
? Check the features needed for your project: TS
? Use class-style component syntax? No
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? No
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```

次は、Vue3化するため、`vue add vue-next`します(このときに利用するPlugin: [vuejs/vue-cli-plugin-vue-next: A Vue CLI plugin for trying out vue-next (experimental)](https://github.com/vuejs/vue-cli-plugin-vue-next))。

ここまでで`npm run serve`してブラウザでアクセスすると、`Uncaught TypeError: Cannot read property 'extend' of undefined`のエラーになってしまいます。対応として、`Vue.extend` -> `defineComponent`に書き換えをします。やっていることとしては、[vuejs/composition-api: Vue2 plugin for the Composition API.](https://github.com/vuejs/composition-api#typescript)にある内容です(なおリンク先では`createComponent`になってますが、[vue-nextでは`defineComponent`にリネームされている](https://github.com/vuejs/vue-next/pull/549)ので、`defineComponent`にします)。

また、`npm run serve`を実行しているコンソールのログを見ると、`vue-template-compiler`に関するエラーが起きてます。対応としては、[vue-template-compiler throws with v3.0.0-alpha.4 · Issue #5 · vuejs/vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/5#issuecomment-579824544)の`postinstall`をnpm scriptsに追加し、`npm i`をして、postinstallを実行します。(同じissueでこのエラーを解消しようと動いている様子も伺えるので、将来はこのWork Aroundも不要になるかもしれません)。

最後に型エラーが複数起きるので、順番に解消します。

- `npm i -D @types/estree`
- `src/shims-tsx.d.ts`, `src/shims-vue.d.ts` を削除

ここまででVue3のTS化ができました。

### Composition APIを使ってみる
上記までで環境構築はできているので、Composition APIを使えるか試す実装もPRで作りました。
[Use Composition API by yinm · Pull Request #1 · yinm/vue3-typescript-by-vuecli](https://github.com/yinm/vue3-typescript-by-vuecli/pull/1)

実装としては、[vuejs/vue-next-webpack-preview](https://github.com/vuejs/vue-next-webpack-preview)と同じことをしています。

## まとめ
まだリリース前なので、自分で必要なパッケージをインストールしたり、Work Aroundが必要だったりしますが、Vue3でTSを利用できる環境を構築する方法を紹介しました。[TypeScript support · Issue #7 · vuejs/vue-cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/7)のようなissueも立っているので、将来はもっと簡単に環境構築できるようになるのかなと思ってます。
