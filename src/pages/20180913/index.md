---
title: HTMLとCSS3でつくるクルクル回転するローディングのメモ
date: "2018-09-13"
---

[CODEPREP | HTMLとCSS3でつくるクルクル回転するローディング](https://codeprep.jp/books/63)のメモです。

---

### 背景を全画面にする
- positionプロパティにfixedを指定し、上下左右の相対位置を使って要素を全画面に広げる

```css
selector {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

### keyframeアニメーションをつくる 導入
- `@keyframes アニメーション名 { 実際のkeyframe }`
- keyframeとは、一連のアニメーションの中のとある通過点のこと 
- keyframeを利用することで、アニメーションの中間地点を自由に制御し、アニメーションに変化をつけることができる (パラパラ漫画のようなもの)

### keyframeアニメーションをつくる 設定
- パーセンテージでそのキーフレームが発生する時間を定義する (開始と終了のパーセンテージは、from, toで設定することも可能)
- keyframeアニメーションには、必ず0％(もしくはfrom)と100％(もしくはto)のタイミングを含める必要がある
- 回転は、`transform: rotate()`を使う

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
```

### アニメーションさせる対象への指定方法
- アニメーション名を指定するには`animation-name`を指定する
- 1周期が完了するまでの時間を指定するためには`animation-duration`を指定する

### 連続してアニメーションさせる
- アニメーションを何回実行するか指定するには`animation-iteration-count`を指定する
  - 値には、繰り返し実行する回数または、無限を意味する`infinite`を指定する

### アニメーションの速度を変える
- どのようなアニメーションを実行するかを指定するためには`animation-timing-function`を指定する
  - 初期値は`ease`
  - 一定のスピードで実行するなら、`linear`
