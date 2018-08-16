---
title: CSS Tips
date: "2018-08-16"
---

[HTML&CSS入門：イチからWebデザインを習得する講座](https://saruwakakun.com/html-css/basic)をひと通り読んだので、読書メモです。

---

## widthの設定方法
- `width: auto;` 
  - 初期値
  - 値を自動的に決める (要素の幅と同じなる。ただし、親要素以上に大きくなることはない)
- `width: XXpx`
  - pxによる絶対値の指定
  - 画像に指定すると、画像の幅を調整することができる (画像の高さも初期値がautoなので、widthに合わせて縦横比を保ってくれる)
  - `親要素の幅 > 子要素の幅` にしてはいけない (子要素がはみ出た見た目になってしまう)

- `width: XX%`
  - 要素の幅が可変になる (親要素の幅に対する比率で決まる)
  - 親要素の幅が指定されていない場合は親を遡っていく
    - body要素まで指定されていない場合は、ブラウザの幅になる

### `width: auto;`と`width: 100%;`の違い
- autoは、widthの中にpaddingとborderが含まれるようになる (`box-sizing: border-box;`の状態)
- 100%は、paddingとborderを含まない
  - 100%の要素に、paddingやborderが含まれていると親要素からはみ出してしまう
  - 対策として、`box-sizing: border-box;`を指定するなどがある

### inline-blockの場合に横いっぱいに広げる
- width: 100%に指定する必要がある
- inline-blockの要素の幅の初期値は、要素の中身の幅になる。横いっぱいにするには明示的に100%と書かなければならない

## heightの設定方法
- `height: auto;`
  - 初期値
  - 要素(文字・画像・子要素など)の中身の分だけの高さになる


- `height: XXpx`
  - pxによる絶対値の指定
  - `親要素の高さ > 子要素の高さ` にしてはいけない (子要素がはみ出た見た目になってしまう)

- `height: XX%`
  - 要素の高さが可変になる (親要素の高さに対する比率で決まる)
  - widthと違って、親要素のheightが指定されていない(= autoの状態である)と、%指定はできない (親要素と重なった状態で表示されるため)
    - 実際に高さを%で指定することはほとんどない

### 画面全体の高さに対して、比率で高さを指定する
- htmlとbodyタグ、親要素に対してheight:100%と指定した上で、該当の要素に%指定する

## min-width
- widthの取ることのできる最小値を指定する (要素がこれ以上小さくならない幅を指定できる)
- widthを%で指定した時に合わせて使うといい

## max-width
- widthの取ることのできる最大値を指定する (要素がこれ以上は大きくならない幅を指定できる)
- widthを%で指定した時に合わせて使うといい
- 画像に`max-width: 100%;`で指定すると、画面サイズより画像が大きく表示されることがなくなる
  - 縦横比が崩れてしまった時には、`height: auto;`を指定する

## margin, padding
- %指定は基本的に左右の余白を指定するときに使い、上下の余白を決めるときにはほとんど使わない
- %指定をするときは、合計が100%になるように指定する (そうしないとはみ出る)
  - paddingを%指定したい場合は、margin, widthも%指定する必要がある

- autoを指定すると、状況に応じて自動で値を調整してくれる
  - `display: block;`の要素で、`margin: 0 auto;`を指定すると、中央配置ができる (左右のmarginを等しくしてくれるため)

## display
- 要素の表示形式を決めるプロパティ
- displayプロパティを設定しないでも、タグごとにdisplayプロパティの初期値が決まっている (ほとんどは、`block` or `inline`)
- https://saruwakakun.com/html-css/basic/display の表を見るとわかりやすい

### displayの値 (基本的なもの)
- block
  - 要素が横いっぱいに広がって、縦に並ぶ
  - text-align, vertical-alignで要素の位置を変更することはできない (要素の中身のテキストは位置だけは変更できる)

- inline
  - 要素が平べったく横に並ぶ
  - 指定できる余白は左右だけ (paddingは上下にも適用できるが、行に被るだけなので実際に使うことはない)
  - text-alignが指定できるが、**親要素に指定しないと効かない**
  - vertical-alignは自分に指定すれば効く

- inline-block
  - blockとinlineの中間 (並び方はinline的、要素の中身はblock的)
  - ユースケースは、横に並べたいが、幅・高さ・余白を指定したい時など (e.g. メニューバー)

- none
  - 非表示になる

## beforeとafter
- 擬似要素と呼ばれるもので、HTMLには書かれていない要素もどきをCSSで作ることができる
- 検索エンジンはCSSである擬似要素をコンテンツの中身として見ない (SEOを気にせずに表現できる)
- contentの指定を忘れると、疑似要素が全く表示されなくなるので注意

### Font Awesomeを擬似要素で使う
- [【保存版】Font Awesomeの使い方：Webアイコンフォントを使おう](https://saruwakakun.com/html-css/basic/font-awesome#section4)

### borderで作る三角形
- [CSSだけで三角形を作ろう！その1：borderプロパティの仕組みをマスター | 株式会社グランフェアズ](https://www.granfairs.com/blog/staff/make-triangle-with-css)

## 横方向のセンタリング
- 文章は、親要素に`text-align: center;`
- 画像も、親要素に`text-align: center;` (not imgタグ自身)
- inline-block要素も、親要素に`text-align: center;`
- block要素は、`margin-left: auto; margin-right: auto;`
  - 親要素の中で中央寄せになるだけなので、親要素が左に寄っている場合や、幅が小さい場合などは、その中で中央寄せになるだけ

## 縦方向のセンタリング
- 1行の文章の場合は、`行の高さ(line-height) = ボックスの高さ(height)`にして、`vertical-align: middle;`
  - 親要素の上下中央に配置する場合も、行の高さ = 親要素の高さにする
  - vertical-alignは、配置を変えたい要素自身に指定する (not 親要素)
- それ以外のものは、`position: absolute` と `top: 50%` と `transform: translateY(-50%)`
  - 親要素を `position: relative;`にするのも忘れない
- Flexboxを使うと楽 [テキストの縦方向の中央揃えについて - Qiita](https://qiita.com/Shinji-m/items/69a392685699f3ba95fb)

## 横・縦の中央配置
- absolute + top: 50% + left: 50% + transform: translate(-50%, -50%)で親要素の真ん中に配置できる

## position
- 要素の位置を決めるプロパティ
- 指定方法は次の2つの流れで行う
  1. positionプロパティで、位置の基準を決める
  2. top, bottom, left, rightで具体的な位置を数字で調整する

### positionの指定
- static
  - 初期値
  - topなどで動かすことができない
  - z-indexを指定できない

- relative
  - 現在の位置を基準に相対的な位置を決める

- absolute
  - 親要素を基準に絶対的な位置を決める
  - 親要素が、`relative`, `fixed`になっている必要がある

- fixed
  - 画面の決まった位置に固定する

### top, bottom, left, right
- 基本的には、上下方向・左右方向の1つずつの値を組み合わせて指定する (e.g. `top: 10px; left: 5px;`)

## z-index
- 要素の重なり順を指定するプロパティ
- 指定した数値が大きい方が上に来る
- `position`がrelative, absolute, fixedのどれかの場合に使える

## overflow
- 要素のボックスからはみ出た部分をどう扱うかを指定するプロパティ
- 指定できる値
  - visible: 初期値。はみ出た部分がそのまま表示される
  - hidden: はみ出た部分が隠れる
  - scroll: はみ出た部分が隠れてスクロールできる
  - auto: ブラウザにより表示が変わる (基本的にはスクロールできる)
- 横スクロールにしたい場合

```css
.foo {
  white-space:nowrap;
  overflow:scroll;
}
```

### overflow-x, overflow-y
- 横方向、縦方向のはみ出た部分の扱いを指定できるプロパティ
- 指定できる値はoverflowと同じ

## white-space
- HTMLコード内の半角スペース、タブ、改行をブラウザでどのように表示させるかを指定するプロパティ
- また、要素の右端で行を折り返すかどうかも指定できる
- ここの表を見るとわかりやすい [CSSのwhite-spaceの使い方：pre、wrap、nowrapなどの違いは？](https://saruwakakun.com/html-css/basic/white-space#section1)
- 指摘できる値
  - normal: 初期値。HTML内で半角スペースなどを連続入力しても、ブラウザ上では1つの空白文字としてまとめる。要素の右端で自動折り返し
  - nowrap: normalと同じくブラウザ上では1つの空白文字としてまとめる。`<br>`を使わない限り、行は折り返されない
  - pre-line: HTML内で連続した半角スペースやタブは、ブラウザ上では1つの空白にまとめるが、改行は反映する。要素の右端で自動折り返し
  - pre: HTML内での半角スペースなどの入力をそのままブラウザに反映する。要素の右端でも行を折り返さない
  - pre-wrap: preと同じ。ただし、要素の右端で自動折り返し

## box-shadow
- 何かの要素に影をつけたい時に使う
- 指定方法は、`box-shadow: 左右の向きpx 上下の向きpx ぼかしpx 広がりpx 色 内側指定;`
  - `左右の向きpx 上下の向きpx`は必須
  - 正の数だと、右方向・下方向に伸びる (左方向・上方向に伸ばしたい場合は負の数を指定する)
  - 0を指定すると、全体に広がる感じになる

### box-shadowのオプション
- 左右の向き 上下の向きを指定した後に、スペースを入れて入力する
  - 色を指定すれば、影の色を指定できる (ぼかしpxなどは必要ない。e.g. `box-shadow: 6px 6px #668ad8;`)
  - 全体をぼかすには、向きの指定に0を使う (e.g. `box-shadow: 0 0 8px gray;`)
  - 広がりpxを指定することで作った影を縮小・拡大できる (e.g. `box-shadow: 10px 10px 15px -10px;`)
  - 内側に影を付ける場合は、`inset`を指定する (e.g. `box-shadow: 2px 2px inset;`)
  - 複数の影を指定するには`,`で区切る (e.g. `box-shadow: 3px 3px 6px -2px #555, 3px 3px 8px rgba(255, 255, 255, 0.8) inset;`)

### テクニック
- 影の色を薄くするために、 `rgba()`を使ってalpha値を小さい値(0.2とか)にするといい感じになる

## letter-spacing
- 文字同士の間隔(字間)を指定するプロパティ
- emを使って指定するのがいい (文字の高さに対する比率で指定できる)
- 0.05〜0.1em くらいで指定するのがおすすめ

## text-align
- 文字の位置を変えるプロパティ

### 指定できる値
- left
  - 初期値
  - 左寄せ

- center
  - 中央寄せ

- right
  - 右寄せ

## writing-mode
- テキストの行のレイアウトを水平または垂直に、ブロックのフロー方向を左向きまたは右向きにするかを定義 (文字を縦書きなどにできる)
- レイアウトが崩れないようにするために幅と高さ（widthとheight）を指定しておくことをおすすめ

## text-shadow
- 文字に影を付けることができる
- 指定方法は、`text-shadow: 影の右への長さ 影の下への長さ 影のぼけ具合 影の色`

## font-family
- フォントの種類を決定するプロパティ
- body要素に対して指定することが多い (ページ全体に適用するため)
- 基本的に複数のフォントを指定する (端末によって使用できるフォントが異なることをカバーするため)
  - 端末ごとの対応フォントを確認できるアプリ: [Font-familyメーカー：標準フォント一覧からサクッと指定](https://saruwakakun.com/font-family)
- 使用されるフォントは先に書かれたものが優先される
- フォントの週類には、英語フォント(英語のみ表示)と日本語フォント(英語 + 日本語を表示)がある
  - 基本的には、英語のフォントを先に書く方がいい (英語は英語フォントで、日本語は日本語フォントで表示できるようになるため)
- フォント名に半角スペースが入る場合は、クォーテーションで挟む (シングルクォート・ダブルクォートはどちらでもいい)
- 総称フォントファミリーは最後に書く

### 総称フォントファミリー
- 指定したフォントが全く入っていない時に、「こういう系統のフォントで表示して欲しい」とブラウザに伝えるためのフォント
- あくまで系統を指定するだけなので、実際にどのフォントを使うかはブラウザによる
- 5種類ある
  - sans-serif: ゴシック体フォント
  - serif: 明朝体フォント
  - monospace: 等幅系フォント
  - cursive: 筆記体系フォント
  - fantasy: 装飾系フォント

### おすすめ設定

```css
body {
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic'  
}
```

## table
- 余白を設定するときは、`tr`, `td`タグにpaddingを指定する
- borderの引き方は2種類ある
  - border属性を使う (スタイルはCSSにまとめた方がいいので、おすすめはしない)
  - CSSでborderを引く

```css
table {
  /* 線の間の隙間をなくす  */
  border-collapse: collapse;
}
table th, table td {
  /* borderを引く */
  border: solid 1px black;
}
```

### セルの結合
- `rowspan="つなげるセル数"`で、**縦**方向に並ぶ複数のセルを繋げられる
- `colspan="つなげるセル数"`で、**横**方向に並ぶ複数のセルを繋げられる

## linear-gradient
- `background:◯◯-gradient（色指定）`で指定する
- 通常の書き方とベンダープレフィックス付きの書き方が微妙に異なる

```css
background: -moz-linear-gradient(開始位置, 開始色, 終了色); 
background: -webkit-linear-gradient(開始位置, 開始色, 終了色); 
background: linear-gradient(to 方向, 開始色, 終了色); 
```

- 色の変わる位置を変える場合は、カラーコードの後に半角スペースで区切って%指定する

### 3色以上のグラデーション
- カンマで色指定と位置(%)を加える

```css
background: -moz-linear-gradient(top, #fff, #ffc778 30%, #f89174); 
background: -webkit-linear-gradient(top, #fff, #ffc778 30%, #f89174); 
background: linear-gradient(to bottom, #fff, #ffc778 30%, #f89174); 
```

### 斜めに指定する
- 2種類ある
  - 方向や開始位置を指定する時に2種類の方向を指定する (角度は45度で固定される)
  - グラデーションの角度を`deg`で指定する (方向や開始位置は指定しない)

- 0degだと下から上、値が大きくなると時計回りに方向が変わる、というイメージ

## radial-gradient
- 考え方はlinear-gradientと同じ
- 通常の書き方とベンダープレフィックス付きの書き方に違いはない

```css
background: -moz-radial-gradient(中央の色, 外側の色); 
background: -webkit-radial-gradient(中央の色, 外側の色); 
background: radial-gradient(中央の色, 外側の色); 
```

## その他のtips
- グラデーションを透過させたい場合には、透明（transparent）や半透明（rgba(5,5,5,0.1)など）を指定する
- 画像にオーバーレイする場合は、gradient()の後にカンマ区切りでurl(画像のパス)を指定する
  - 背景画像が見えるように、グラデーションは半透明にする

## 円の書き方
- block要素の場合は、`border-radius: 50%; background: 背景色;` 
- inline要素の場合は、`display: inline-block;`などにしてから、block要素と同じことをする
