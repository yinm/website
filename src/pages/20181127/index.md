---
title: 読書メモ TypeScript の型定義ファイルと仲良くなろう
date: "2018-11-27"
---

[TypeScript の型定義ファイルと仲良くなろう - Hatena Developer Blog](http://developer.hatenastaff.com/entry/2016/06/27/140931)の読書メモです。


---

### Declaration space
- TSに存在する概念で、同一の declaration space 上で同じ名前の entity (宣言した変数や型など)があった場合、コンパイルエラーになる
  - 例外もある (e.g. open-ended)
- deeclaration spaceには3種類ある
  - Value
  - Type
  - Namespace
- このうち実際の JS のコードになるのは Value と Namespace 
  - Type は生成された JS のファイルには影響せず、TS の世界でしか影響ない
  - Namespace もNamespace内にValueがないとJSのファイルに影響しない

### Open-ended
- open-ended とは同じ装飾名の宣言があった時、自動的にマージされる性質のこと
  - open-ended な宣言がマージされる条件に root container が共通であることが必要である

#### TSのmoduleとは
- TS では Top-Level に import や export があるファイルがのこと

#### containerとは
- ある entity が宣言された時、自動的に決定するもの
- 具体的には以下の4つ
  - ある namespace 内で宣言された entity の container はその namespace
  - ある module 内で宣言された entity の container はその module
  - global namespace 内で宣言された entity の container は global namespace
  - module 自体の container は global namespace
- root container は、宣言が export されているかで変わる (一番外側の module か namespace が root container になる)
  - export されていない entity の場合 root container はその entity の container
  - export されている entity の場合の root container はその entity の container の root container
- root container を共通にする方法
  - 別ファイル( module になっていない = import や export が書かれていない)に宣言を移す
  - `declare global { }` を使う

### declare キーワード (ambient declarations)
- 既存の JavaScript の型情報が表現できる
  - TS では declaration space に該当する関数などがないと、コンパイルエラーになる
  - declaration space に定義するために、 `declare` キーワードを使う
- `declare` はJSとして出力されない
  - 既存の変数・関数のコードを上書きすることなく 変数・関数を宣言することができるため、ブラウザや既存の JS によって提供される変数・関数を宣言することができる。これが、ambient(包囲した) declarationsの由来
  - ambient 宣言を集めたファイル（ .d.ts ）は型定義ファイルと呼ばれる


### 既存のオブジェクトの型定義を拡張する (e.g. Window)
- 既に定義されているオブジェクトに対して新しい定義をマージすることで対処 (interfaceを使う)

### グローバルなオブジェクトに対する宣言 (e.g. jQuery)
- namespace で対処する
  - `declare namespace` 内では定義された entity はデフォルトで ambient 宣言になるため `declare` は必要ない

### module
- npm module を使いたいとき、単に npm i lodash しただけでは TS の世界では import できない
  - module の場合は別ファイルにそれ用の宣言が必要
  - `declare module 'lodash' {}` が必要 (`module` の後が文字列なのがポイント。識別子だと namespace になる)
- module は open-ended

### Export Assignments (`export =`)
- 現在の TS では ES2015 形式のモジュールシステムが使えるため、Export Assignmentsで書く必要がない場合もある
  - しかし、 `export =` と `export default` に互換性がないこともあり、既存の定義ファイルの大多数は Export Assignments で書かれている

### Relative or Non-relative module imports
- relative module importとは
  - importを相対パスで指定する場合。自前の module はこちらになるはず
  - e.g. `import Entry from "./components/Entry"`
  - 既存の（自前の） JS を .d.ts ファイルとともに使用する場合は .js ファイルと .d.ts ファイルは同じディレクトリに入れておく
- non-relative module importとは
  - `require(xxx)` や `from xxx` の `xxx` をmodule名で指定する場合。npmのmoduleを利用する場合はこちらになるはず
  - e.g. `import $ = require('jquery')` or `import * as $ from 'jquery'`

### ES2015形式
- `declare` キーワードが付いてても `export` が書ける
  - `namespace` でまとめてから `export =` みたいなことはせずに済む

### declare global { } について
- この記法により module 内でも global namespace に型を定義を宣言できる
