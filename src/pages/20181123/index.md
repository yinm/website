---
title: 読書メモ Revised Revised 型の国のTypeScript
date: "2018-11-23"
---

[Revised Revised 型の国のTypeScript | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/index.html)の読書メモです。

---

## [TypeScriptの基本 | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/typescript-basic.html)
- 型注釈 (type annotations)
  - `変数名: 型名`の`: 型名`の部分。どういう型の入れ物になるかを指定できる記法
- 引数プロパティ宣言 (parameter property declaration)
  - コンストラクタの引数にアクセス修飾子を合わせて書くと、インスタンス変数として利用可能になる。TS固有の記法
- モジュール
  - 1ファイル＝1モジュールとしてプロジェクトを構成していく方式
  - e.g. `import * as foo from "./foo"` と書いた場合、`"./foo"`が1つのモジュールとして扱われる
- TSのモジュールは2種類ある
  - 外部モジュール((External Modules)は、ES2015のモジュールのこと
  - 内部モジュール((Internal Modules)は、nameespaceのこと
- namespace
  - モジュールの考え方がまだ発達していなかった時代に、関数を使ってモジュールのようなものを作っていた名残
  - ES2015でモジュールが策定されたので、今後は使わないほうが良い (ただし、型定義ファイルを理解する上で必要になるので、知識としては知っておく)
  - import句と合わせて使うことで他のnamespace内で任意の名前が付けれる (ES2015のimportとは別の使い方なので区別する)
- 動的インポート（Dynamic Import）
  - ECMAScriptの仕様で、動的に必要なモジュールを決定できることで柔軟性を得られる
  - Dynamic Import登場以前のECMAScriptのモジュールの仕様は、モジュールのimport文は参照するモジュールを動的に変える余地がなかった (プログラムを実行しなくてもパースした時点で必要なファイルの全リストを作れるという利点はある)
- enum / const enum
  - TS独自仕様なので、enumはあまり使わず、const enumだけ使うのがよい
  - enumとは、任意の名前と値の集合を作ることができる記法。実行コード(= コンパイル後のJS)では変数に展開される
  - const enumとは、enumから一歩進んで、コンパイル時に全ての値をインライン展開し定数値に置き換える(実行コードではconst enum定義が消える)。`--preserveConstEnums`オプションを渡すとenum相当の実行コードが生成されるようになる

## [型は便利だ楽しいな | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/types-basic.html)
- 型の宣言空間 (type declaration space)と値の宣言空間 (variable declaration space)
  - 別の言い方をすると、型定義と実装の差
  - TSを書く上で意識しなければならない概念 (情報として型が存在していても、値として存在していない。という場面に遭遇することが多いため)

### 3.1　オブジェクト型リテラル
- オブジェクト型リテラルとは
  - JavaScriptのオブジェクトリテラルに似た記法で、匿名の型を作り出す機能
  - 記法としては、値の代わりに型名を、要素の終わりに`,`ではなく`;`を書く
  - オブジェクト型リテラルで使える書き方を5つある
- プロパティシグニチャ（Property Signatures）
  - 1つ目はプロパティを示す記法
- コールシグニチャ（Call Signatures）
  - 2つ目はオブジェクトが関数として呼び出し可能であることを示す記法
  - オーバーロードも表現できる
- コンストラクトシグニチャ（Construct Signatures）
  - 3つ目は対象オブジェクトがコンストラクタとして利用可能であることを示す記法
- インデックスシグニチャ（Index Signatures）
  - 4つ目は添字によるプロパティアクセスに対して、型を当てはめられる記法
  - インデックスの型指定が string の場合 string でも number でもOK
  - オブジェクトリテラルで直接変数に代入する場合、型に存在しない値があるとエラーになる。ただし、直接変数に代入ではない場合(e.g. 別の変数経由で代入)は代入できるので注意
- メソッドシグニチャ（Method Signatures）
  - 5つ目はあるプロパティがメソッドであることを表現できる記法
  - "プロパティシグニチャ + 関数型リテラル"でも表現できるが、メソッドシグニチャのほうがわかりやすい
- 弱い型の検出 (Weak type detection)
  - 別の変数経由で代入した場合でも、特定の条件を満たす場合はコンパイルエラーとして検出できる。条件は以下の3つ
  - 1つ以上プロパティを持っている
  - すべてのプロパティがoptional
  - インデックスシグニチャを持たない
- readonly修飾子
  - TypeScript固有の機能で、readonlyと指定したプロパティは、読み取り専用となり変更を禁止できる
  - ただし、constと違って別の変数経由で代入すると、値を変更できる
  - クラスのプロパティに対して利用すると、コンストラクタでのみ値が変更可能になる (JavaのFinalみたいなイメージ)
  - TypeScript上の制約なのでコンパイル後のJavaScriptでは変更可能なコードになる。TypeScriptコンパイラが身を守るのを助けてくれるヒントくらいに考える

### 3.2　関数型リテラル（Function Type Literals）
- 関数型リテラルとは
  - 関数を型として表現できる記法
  - アロー関数の記法は `(word: string): string => "Hello, " + word;`だが、関数型リテラルの記法は `(word: string) => string` になる。返り値の型を置く位置が`=>`の前後という違いがあるので間違えないように注意
  - 型に対して実装の引数の数が少ない場合でもエラーにならない
  - 型に対して実装の引数の数が多い場合は、省略可能かデフォルト値付きでなければならない

### 3.3　インタフェース（Interfaces）
- インターフェースとは
  - 基本的な使い方は、名前付きオブジェクト型リテラルを作ること
  - インタフェースの中で許される記法は、オブジェクト型リテラルそのままである
  - `extends`を使うことで、別のインターフェースやクラスも拡張できる

### 3.4　構造的部分型（Structural Subtyping）
- 構造的部分型とは
  - 乱暴にいうと、静的型付け用のduck typing (構造が一緒なら、一緒と判断していいよね)
  - プロパティやメソッドなどの構造が一致するかどうかで型の互換性を判定する (クラスを継承しているか、インタフェースを実装しているかという厳密さはTypeScriptでは必要ない)
  - 省略可能なプロパティは存在していなくても型の互換性として問題ないものとして扱われる

###  3.5　型アサーション（Type Assertions） 
- 型アサーションとは
  - 他の言語でいうところのキャスト
  - 当然、互換性のない型に型アサーションで変換しようとするとエラーになる
  - 基本的に、型アサーションはなるべく使わずに済ませる。値の型を明示したい場合、型注釈するほうがコンパイラのサポートの面で優れている
- 型アサーションの書き方は2種類ある
  - `値 as 変換後型名`
  - `<変換後型名>値`

### 3.6　ジェネリクス（Generic Types）
- ジェネリクスの基本
  - TypeScriptで一番よく使うジェネリクスを使ったクラスはArrayで、特別扱いされている
  - `string[]`という型は`Array<string>`と同じ意味。`<string>`という部分がジェネリクスの肝である。`Array<string>`を声に出して読むと、"stringのArray"になる。色々な型に対して、"○○のArray"ということができ、これをプログラム上で表現すると`Array<T>`という表現になる
  - `T`を**型パラメータ(type parameters)**と呼ぶ。Tは何でもよいが、慣習として既存の型とかぶらないようにするためにアルファベット大文字1文字を使う場合が多い。代表的な例ではTypeの頭文字のT、アルファベット的にTの次の文字でのUや、Returnの頭文字のRなどが使われる

### 3.7　オブジェクト限定型（The Object Type）
- `object`型とは
  - プリミティブ型となるnumber、string、boolean、symbol、null、undefined。そしてそれ以外のオブジェクト。この2種類を区別することにより防げる実行時エラーがあるため導入された型

### 3.8　"ありえない"型（The Never Type）
- `never`型とは
  - 到達不可能なコードに使う (e.g. Errorをthrowするため、関数のreturnにたどり着けない場合)

