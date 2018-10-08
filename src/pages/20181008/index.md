---
title: FontAwesomeをNuxt.jsで使う (npm経由)
date: "2018-10-08"
---

基本的には、[Using a Package Manager | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)に書かれてることをやればよさそうです。今回は、Free版を入れて試しました。

動作確認したバージョン

```
"nuxt": "^2.0.0"
"@fortawesome/fontawesome-free": "^5.3.1"
```

### 手順

- パッケージをインストール

```sh
npm install --save-dev @fortawesome/fontawesome-free
```

- `/css/all.css`を読み込む

```js
// nuxt.config.js

css: [
  '@fortawesome/fontawesome-free/css/all.css',
],
```

- HTMLで実際に使う

```html

<body>
  <!-- 試しに棒グラフを出してみる -->
  <i class="far fa-chart-bar"/>
</body>
```

ここまでで使えるようになっているはずです。

 #### 手順の補足

もし特定のアイコンの種類しか使わないなら、使うファイルのみを読み込むこともできるようです。その場合、`@fortawesome/fontawesome-free/css/fontawesome.css`も合わせて読み込まないと、アイコンが表示されないようでした。([Getting Started | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css)のCDNの部分で出てくるものに対応するCSSファイルを読み込むようにしてみました。これであっているのかはわからないです...。)

```js
// nuxt.config.js

  css: [
    '@fortawesome/fontawesome-free/css/regular.css',  // 例として regular を読み込む
    '@fortawesome/fontawesome-free/css/fontawesome.css', // これは種類に関わらず読み込む必要があるみたい
  ],
```

### おまけ

FontAwesomeに種類があるの知らなかったので勉強になりました。参考: [Font Awesome 5がリリースされたぞ！ - Qiita](https://qiita.com/tamaina/items/4a0747bf20296e0aab15)
- Solid(塗りつぶし) 
- Regular(線・標準の太さ)
- light(線・細い Proのみ) 
- Brands(ブランド)
