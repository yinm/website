---
title: ボックスモデル, padding, marginの整理
date: "2018-08-30"
---

今日は、[CODEPREP | CSS基礎 margin padding編](https://codeprep.jp/books/49)を勉強したのでメモです。

---

### ボックスモデル
- すべてのHTML要素は「ボックス」と呼ばれる、四角形の領域を生成する
- 各ボックスの中には、4つの領域がある
  - テキストや画像などの内容領域(content area)
  - 要素の内側の余白(padding)
  - 要素の枠線(border)
  - 要素の外側の余白(margin)
- [今更聞けない！エンジニアのための CSS の基礎講座 〜ボックスモデル編〜 | ヌーラボ](https://nulab-inc.com/ja/blog/nulab/css-basics-for-engineer-boxmodel/)

### ボックスモデルの計算ルールを変更する
- `box-sizing: 値;`で指定する
- widthとheightで指定した領域がどこまでを含むかが変更できる
- デフォルト値は`content-box`で、content areaしか含まない
- `border-box`にすると、borderまでを含むようになる (なので、content-boxの時よりも小さくなる)
- [box-sizing - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/box-sizing)

### marginを指定して要素をセンタリングする
- `auto`は、それが設定された要素の間隔を適切な値に置き換える

### marginの相殺を抑制する
- 隣り合う要素の間にborderがある場合 (borderが上下の要素の境界となるため相殺が発生しなくなる)
- padding, height, min-heightが設定されている場合
- インラインコンテンツ(ただのテキストなど)がある場合

### ネガティブmarginを指定する
- 指定された要素は、値が指定された方向に移動する
- widthを設定していない要素の左右にネガティブマージを指定した場合、その要素は左右に広がる
  - widthが指定されている場合は、左寄せになる

