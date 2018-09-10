---
title: はじめてのSassのメモ
date: "2018-09-10"
---

[CODEPREP | はじめてのSass](https://codeprep.jp/books/93)のメモです。

---

### 変数の使い方
- `$`をつけることで宣言できる

```scss
$color: #fff;
color: $color; // => #fff
```

### 変数のスコープ
- CSSセレクタの外側に定義された変数は、**グローバル変数**
- CSSセレクタの内側に定義された変数は、**ローカル変数** (スコープは、セレクタの内側だけ)


### 演算子
- 四則演算ができる 
  - e.g. heightを計算して指定する

### 変数を式の中で使う
- `#{}`を使って変数を式の中に埋め込むことができる
  - e.g. `line-height: calc(#{$height} * 1.1618)`
- プロパティ名を補完する用途でも使える

```scss
$test: foo;

.container {
  #{test}-color: #fff; // => foo-color
}
```

### defaultフラグ
- 変数を定義した後に、`!default`を指定する
- defaultフラグが指定された変数は、変数スコープの中でこの変数に値の割り当てがない場合、このデフォルト値を適用する (ユースケースは、ベースのスタイルに対して使用することで容易に上書きできるようになり、スタイルの再利用をしやすくする)

### 変数の存在チェックを行う
- 条件文は、`@`をつけたif文を使う

```scss
@if 条件 {

} @else if 条件 {

} @else {

}
```

- 変数の存在チェックには、ビルトイン関数の`variable-exists`を利用する 
  - e.g. `variable-exists(color)`

### 変数内容を確認する
- `@debug 変数`にすると、開発者ツールに表示される

### &セレクタの使い方
- `&`セレクタは、ネストしている親のセレクタの参照を返す (ネストの最初の親まで返す。直近の親だけじゃない)
- BEMのルールに従う時に便利 
  - e.g. `&__icon`, `&--disabled`

### mixinを定義する
- `@mixin mixin名 { }`で定義する
- 引数を定義する場合は、`@mixin mixin名(引数名) { }`

```scss
@mixin border-radius($radius) {

}
```

- プログラミング言語の関数と同じように、何度も利用するスタイルの場合に定義しておくと便利

### mixinで変数を使う
- `@include`の後ろにmixin名を指定する
  - e.g. `@include cool-mixin((a, b, c))`

### mixinの変数に初期値を適用する
- `引数名: 初期値`
  - e.g. `@mixin border-radius($radius: 30px) { }`

### スタイルの継承
- `@extend セレクタ`
  - e.g. `@extend .text-bold`

### スタイルを出力させないままで再利用可能する
- `%`セレクタ(placeholderセレクタ)を使うことで、スタイルに出力せずにスタイルを再利用できる

```scss
%text-bold {
  font-weight: bold;
}

.header {
  @extend %text-bold;
}
```

