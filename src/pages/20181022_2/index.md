---
title: ６ステップでマスターする　「最新標準」HTML+CSSデザイン_ch3-6
date: "2018-10-22"
---

[６ステップでマスターする　「最新標準」HTML+CSSデザイン | マイナビブックス](https://book.mynavi.jp/supportsite/detail/9784839960223.html)のメモです。

---

### 要素を左右両端揃えにする
- 要素が2つの場合

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

- 3つ以上の場合
  - [Flexboxレイアウトまとめ - Qiita](https://qiita.com/takanorip/items/a51989312160530d89a1#%E5%8F%B3%E5%AF%84%E3%81%9B%E3%83%AD%E3%82%B4%E3%81%A0%E3%81%91%E5%B7%A6%E5%AF%84%E3%81%9B)

```css
.container {
  display: flex;
}

.container 左に残したい要素 {
  margin-right: auto;
}
```


### 要素の上下方向を中央揃えにする

```css
.container {
  display: flex;
  align-items: center;
}
```

