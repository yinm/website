---
title: Node.jsのurlモジュールを使うときは、WHATWG URL APIを使う
date: "2020-11-10"
---

Node.jsのurlモジュールで提供されているAPIには2種類あり、新規でコードを書くならWHATWG URL APIを使う方がブラウザとコードの共有できて良いです。コードとしては、次のように書きます。

```js
const myURL = new URL('https://example.com/')
```

### urlモジュールで提供されているAPI
- WHATWG URL API (新しいAPI。Node.js v7から導入。ブラウザ使用されているのと同じ、WHATWG URL standardに準拠した実装。)
- Node.js固有API (古いAPI。Node.js v11で非推奨に。)

ちなみに、新旧のAPIでURLのパース結果が異なるので、書き換える時などは注意が必要そうです。パース結果の差分は、[URL | Node.js v14.15.0 Documentation](https://nodejs.org/docs/latest-v14.x/api/url.html#url_url_strings_and_url_objects)に載ってます。

### WHATWG URL APIの使用方法
```js
const URL = require('url').URL;
const myURL = new URL('https://example.com/')
```

また、URLクラスはNode.js v10からはGlobal Objectとして利用可能になっています。そのため、上記のコードは、次のように書き換えできます。

```js
const myURL = new URL('https://example.com/')
```

これで、冒頭に載せたコードと同じになりました。

### 参考
- [URL | Node.js v15.1.0 Documentation](https://nodejs.org/api/url.html#url_the_whatwg_url_api)
- [Node v7 で入った WHATWG URL 実装について | blog.jxck.io](https://blog.jxck.io/entries/2016-10-27/whatwg-url.html)
