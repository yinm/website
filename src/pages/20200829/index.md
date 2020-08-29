---
title: calc()は型チェックで宣言が無効になる場合がある
date: "2020-08-29"
---

[Every Layout](https://every-layout.dev/layouts/sidebar/#unitless-zero-and-lesscodegreatercalc()lesscodegreater)で出てきた、CSSネタです。

表題の現象が起きるのは、以下のようなコードです。

```css
.some-class {
  font-size: calc(1rem + 0);
}
```

上記の場合に`font-size`の宣言が無効になります。

## なぜ起きるか？

[CSS Values and Units Module Level 3 日本語訳](https://momdo.github.io/css3-values/#calc-type-checking)
の以下の部分が該当します。

> 注：`<number-token>`は常に`<number>`または`<integer>`として解釈されるため、"単位なし0"`<length>`はcalc()でサポートされない。つまり、width: 0;とwidth: 5px;の両方は有効であるが、width: calc(0 + 5px);は無効である。

先ほどのコードだと、以下の型と解釈されるので型チェックで無効になるのですね。
- `1rem`: `<length>`
- `0`: `<number>` または `<integer>`

### おまけ
"単位なし0"が`<length>`として有効なのは、[CSS Values and Units Module Level 3 日本語訳](https://momdo.github.io/css3-values/#lengths)に書かれてます。
