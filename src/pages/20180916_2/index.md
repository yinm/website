---
title: HTMLとCSS3で作る通知ベルのメモ
date: "2018-09-16"
---

[CODEPREP | HTMLとCSS3で作る通知ベル](https://codeprep.jp/books/92)のメモです。

---

### アニメーションを設定する
- `animation: [アニメーションの名前] [一回のアニメーション周期]`で指定する
- `@keyframes`で,`animation`プロパティのアニメーションの名前で指定したアニメーションの流れをスタイリングできる

### X, Y, Z方向の大きさを設定する
- `transform: scale3d(x, y, z)`を使用する

```css
// Y方向に2倍
transform: scale3d(1, 2, 1);

// X, Y, Z方向に1.3倍
transform: scale3d(1.3, 1.3, 1.3);
```
