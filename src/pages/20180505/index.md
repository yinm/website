---
title: Syntax Highlightingを追加しました。
date: "2018-05-05"
---

一応技術ブログのつもりなので、コードを書くときにSyntax Highlightingは効いてほしいのです。

Syntax Higlightingの例

```js
function logging() {
  const message = 'いい感じにシンタックスをハイライトしている！'
  console.log(`log: ${message}`)
}

logging() // いい感じにシンタックスをハイライトしている！
```
対応したPR: [Add syntax highlighting by yinm · Pull Request #4 · yinm/website](https://github.com/yinm/website/pull/4)

## 導入方法
1. [Gatsbyのドキュメント](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)を参考に、Prism.jsのインストールとgatsby-config.jsの設定をします。
1. [同じくCSSの読み込み](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#include-css)を参考にthemeを設定します。

以上で終わりです！かんたん！

ただ、僕が好きなSolarized DarkがPrism.jsのデフォルトにはなかったので、ネットで探して、 [michaeljdeeb/prism-solarized-dark: Solarized Dark theme for Prism](https://github.com/michaeljdeeb/prism-solarized-dark) を設定しました。作ってくれている人がいてありがたいですね。
