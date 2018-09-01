---
title: displayプロパティの整理
date: "2018-09-01"
---

[CODEPREP | CSS基礎 display編](https://codeprep.jp/books/73)を勉強したのでメモです。

flexboxのプロパティがいつもわからなくなるのですが、[CSS flexible box の利用 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#Flexible_boxes_vocabulary)の用語を頭に入れてからコーディングすると、理解しやすいことがわかりました。最初からこれを読めばよかった...！

---

### list-item
- 要素をリストアイテム(block要素のように振る舞うが、先頭にマーカーが入る)にするには、displayプロパティを利用して値に`list-item`を指定する

### visibility: hidden
- 要素は非表示になるが、要素が占有していた領域はそのまま残る

### display: none
- 要素を非表示にする (領域もなくなる)
- 親要素に指定した場合、子要素も非表示になる

### table
- 要素を`<table>`タグのようにレンダリングするには、displayプロパティを利用して値にtableを指定する

### table-cell
- 要素を`<td>`タグのようにレンダリングするには、displayプロパティを利用して値にtable-cellを指定する
- 要素の幅を指定するには、widthも指定する
- vertical-alignプロパティを利用した縦方向の位置調整が可能
  - vertical-alignプロパティは、インライン要素とテーブルセルにのみ有効

### カラムの幅を固定する
- table要素(`display: table`)に、`table-layout: fixed`を指定する
- テーブル全体の幅を指定しておく必要がある
- 幅を指定するとpadding分の広がりができてしまうため、`box-sizing: border-box`を指定した方がいい

### カラムの中身の折り返しを抑制する
- word-wrapプロパティを使って、値にbreak-wordを指定する
- ただし、テーブル全体の幅を指定して、固定しておく必要がある (単独で、word-wrapを使っても効かない)

### flex
- flexが指定された要素をFlex container(Flexコンテナ) と呼び、その子要素をFlex item(Flexアイテム) と呼ぶ
- Flexコンテナの子要素だけがFlexアイテムとなる。孫要素はflexboxの影響を受けない
- flexbox(Flexible Box)とは、ページレイアウトを様々なスクリーンサイズやディスプレイデバイスに適応しなければならない場合に、ページ上の要素が指定した通りに配置されるレイアウトモード(ボックスの位置やサイズを、兄弟要素や祖先要素のボックスとの相互作用を踏まえて決めるアルゴリズム)
- すべてのflexboxには、Axis(軸)が2つある
  - main axis (主軸。Flexアイテムのいずれに対しても平行な軸)
  - cross axis(交差軸。main axisに対して垂直な軸)
- 参考
  - [CSS flexible box の利用 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes#Flexible_boxes_vocabulary)
  - [Flex コンテナにおけるアイテムの位置合わせ - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)

### flex-wrap
- Flexアイテムを折り返しを制御するプロパティ (Flexコンテナで指定する)
- `flex-wrap: wrap`を指定すると折り返す
- Flexコンテナの幅をwidthで指定すると、任意の幅で折り返しを制御できる

### flex-direction
- Flexアイテムの並び順や主軸を変更するプロパティ (Flexコンテナで指定する)
- 初期値は、row (左から右に配置)
- 他の値
  - row-reverse (右から左に配置。rowと同じだが、逆順になる)
  - column (上から下に配置。主軸を縦方向にする)
- [Flex アイテムの順序を設定する - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)

### justify-content
- Flexアイテムの主軸(デフォルトでは、左右)の配置を制御するプロパティ (Flexコンテナで指定する)
- 初期値は、flex-start (Flexアイテムを始端に集める)
- 他の値
  - center (Flexアイテムを中央に集める)
  - space-between (Flexアイテムを均等に配置する。最初のアイテムは始端、最後のアイテムは終端に配置)
  - space-evenly (space-betweenと同じだが、最初のアイテムの始端との間と最後のアイテムの終端との間のスペースが、各アイテム間のスペースと同じになる)

### align-items
- Flexアイテムの交差軸(デフォルトでは、上下)の配置を制御するプロパティ (Flexコンテナで指定する)
- 初期値は、stretch (Flexアイテムはコンテナいっぱいに広がる)
- 他の値
  - flex-start (Flexアイテムを上部に集める)
  - center (Flexアイテムを中央に集める)

### align-content
- Flexアイテム(複数行)の交差軸(デフォルトでは、上下)の配置を制御するプロパティ (Flexコンテナで指定する)
- 初期値は、stretch (Flexアイテムを均等に配置。最初のアイテムと上部との間と、最後のアイテムと下部との間のスペースが、各アイテム間のスペースと同じなる)
- 他の値
  - flex-start (Flexアイテムを上部に集める)

### order
- Flexアイテム個別に表示される順序を変更するプロパティ (Flexアイテムで指定する)
- orderの初期値は`0`なので、負の数を指定すると先頭に配置できる
  
### flex-grow
- FlexアイテムのFlex伸長係数(Flexコンテナの余白に対する占有率)を指定するプロパティ (Flexアイテムで指定する)
- [flex-grow - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/flex-grow)

### align-self
- Flexコンテナで指定した、align-itemsの値を上書きできるプロパティ (Flexアイテムで指定する)
- 指定できるプロパティは、align-itemsと同じ

