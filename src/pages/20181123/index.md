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

## [オプションを知り己のコードを知れば百戦危うからず | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/tsc-options.html)

### 5.1　--init
- tsconfig.jsonに記述可能なプロパティ
  - extends
  - compilerOptions
  - files
  - include
  - exclude
- files, include, exclude
  - コンパイル対象ファイルを指定するためのプロパティ
  - 3つすべてに共通の挙動として、コンパイル対象に明示的に含めない場合は、TypeScriptコンパイラは処理中のディレクトリやサブディレクトリ配下を調べ、すべての.tsファイルや.tsxファイルをコンパイルしようとする (node_modulesなども含めてしまうため、大抵は不都合)
  - include と exclude を使って指定することが多い (filesは一番最初にできた機能で、面倒なので現状ではあまり使わない)

### 5.2　--project
- --projectオプション (-pオプション)
  - 引数無しでtscコマンドを実行するとカレントディレクトリかそれより上にあるtsconfig.jsonを探して実行する
  - その挙動だと困る場合にこのオプションを使う。オプションの値としてtsconfig.jsonがあるディレクトリか、tsconfig.jsonのパスを指定する (e.g. `tsc -p ./` または `tsc -p ./tsconfig.json`)

### 5.3　--noImplicitAny
- --noImplicitAnyオプション
  - 型推論の結果、暗黙的に変数の型がanyになった場合、エラーにしてくれる
  - e.g. 返り値の型を書いていなかった、関数の仮引数の型が指定されていなかった

### 5.4　--strict
- --strictオプションで有効になるオプション (4つ)
  - --strictNullChecks
  - --noImplicitAny
  - --noImplicitThis
  - --alwaysStrict

### 5.5　--strictNullChecks
- --strictNullChecksオプション
  - nullやundefinedの扱いについてより厳格にし、変数の中身についての曖昧さを積極的に排除するよう振る舞う
  - nullやundefinedを許容したい場合、union typesや省略可能引数を使って明示的にnullやundefinedとなる可能性を示さなければならない

### 5.6　--noUnusedLocals
- --noUnusedLocalsオプション
  - 使っていないローカル変数があればエラーにしてくれる

### 5.7　--noUnusedParameters
- --noUnusedParametersオプション
  - 関数やメソッドの引数に使っていないものがあるとエラーにしてくれる
  - エラーにせず残しておきたい場合、変数名の頭に`_`（アンダースコア）をつけることでエラーを抑制できる

### 5.8　--noImplicitReturns
- --noImplicitReturnsオプション
  - 関数やメソッドの返り値について、returnで値を返す場合とreturnしない場合が混在したとき、エラーになる
  - プログラミングのスタイルとして、elseの漏れや値の返し忘れがあるコードはミスがある可能性が高いので、それ検知できる

### 5.9　--noImplicitThis
- --noImplicitThisオプション
  - thisの型が不明瞭な関数内でthisへアクセスするとエラーになる

### 5.10　--alwaysStrict
- --alwaysStrictオプション
  - "use strict";ディレクティブを常時出力する

### 5.11　--target
- --targetオプション (-tオプション)
  - TypeScriptのコンパイルを行う際、どのバージョンのECMAScriptをターゲットとするかを指定
  - TypeScriptでは基本的に最新の記法で書き、ダウンパイル（古い書き方へ変換）する
  - GeneratorやIteratorをes5のコードにダウンパイルしたい場合は --downlevelIteration を併せて指定
  - 利用可能なオプション (基本的に、IE11などの少し古いブラウザのサポートを切らないのであれば es5 を選択)
  - es3
  - es5
  - es6 / es2015
  - es2016
  - es2017
  - esnext

### 5.12　--module、--moduleResolution
- --moduleオプション (-mオプション)
  - TypeScriptはモジュールをコンパイルする際に、どの形式に変換するかを指定
  - 利用可能なオプション (基本的に、 commonjs を選択)
  - none
  - commonjs
  - system（SystemJS）
  - umd
  - es6 / es2015
  - esnext
- --moduleResolutionオプション
  - モジュールの名前解決の方法について指定
  - 利用可能なオプション (基本的には node を選択)
  - node
  - classic（TypeScript 1.6以前の形式）

### 5.13　--lib
- --libオプション
  - TypeScriptのコンパイルを行う際、標準の型定義として何を使うかを個別に指定できる
  - e.g. --target es5としてダウンパイルする場合でも、--lib es2015オプションで使用する型定義をes2015にできる
  - 利用可能なオプション (複数指定したい場合は、配列にする)
  - es5
  - es6 / es2015
  - es7 / es2016
  - es2017
  - esnext
  - dom
  - dom.iterable
  - webworker
  - scripthost
  - es2015.core
  - es2015.collection
  - es2015.generator
  - es2015.iterable
  - es2015.promise
  - es2015.proxy
  - es2015.reflect
  - es2015.symbol
  - es2015.symbol.wellknown
  - es2016.array.include
  - es2017.object
  - es2017.sharedmemory
  - es2017.string
  - es2017.intl
  - esnext.asynciterable
  - e.g. Node.jsプロジェクトであればHTMLElementなどは不要のためdomはなくていい。多くのプロジェクトではes2017か、＋domの指定があれば十分

### 5.14　--types
- --typesオプション
  - TypeScriptのコンパイルを行う際、参照するべき型定義ファイルを明示的に指定
  - 通常、ソースコード中でimportしたモジュールのための型定義ファイルはルールにしたがって発見されるため、この設定は不要
  - しかし、Node.jsやテスティングフレームワークのmochaなど、実行環境に初めからセットアップされているものはimportの機会がない。この時にコンパイラに環境の情報を伝える方法として、--typesオプションがある
  - 用する型定義ファイルは@typesからnpmで引っ張ってくるのがいい

### 5.15　--forceConsistentCasingInFileNames
- --forceConsistentCasingInFileNamesオプション
  - ファイル名の参照について大文字小文字の食い違いがあるとエラーにする
  - 常にONにする
  - e.g. macOSのような非ケースセンシティブな環境と、Linuxのようなケースセンシティブな環境が混在しているとき、macOSではエラーにならないけどLinuxではエラーになる…のようなシチュエーションを防止

### 5.16　--noEmitOnError、--noEmit
- コンパイルの出力となる.jsファイル、.js.mapファイル、.d.tsファイルを生成するか否かを制御
- --noEmitOnErrorオプション
  - コンパイルが成功した時のみファイルを生成
  - e.g. ビルドのパイプラインを組む時の「コンパイル成功したつもりだが実は失敗してた。後続のタスクが続いてしまい失敗を見逃した」というパターンに有効
  - 常にONにする
- --noEmitオプション
  - コンパイルが成功しようが失敗しようが、常に成果物を何も生成しない
  - `tsc --noEmit`とすることでTypeScriptのコンパイルエラーのみをチェックできる
  - tscでファイルを生成する場合と違う手順でのみビルドするときに有効 (e.g. webpackでts-loaderを使っているプロジェクト)

### 5.17　--importHelpersと--noEmitHelpers
- TypeScriptで--target es5などでダウンパイルした場合、ヘルパ関数が自動生成される (e.g. クラスの継承を行ったときは__extends関数が生成される)
- --importHelpersや--noEmitHelpersを併用すると、ヘルパ関数がファイル毎に生成されるのを抑制し、1つにまとめることができる
- どちらか片方のオプションだけを利用するほうが安全
- --importHelpersオプション
  - 利用する場合、npm install --save tslibが必要。ヘルパ関数を生成する代わりにtslibパッケージ内のヘルパ関数を使うようにする構造
- --noEmitHelpersオプション
  - 単純にヘルパ関数が出力されなくなる。ヘルパ関数がグローバルな空間に定義された状態を作り、生成されたJSコードから参照できるようにしてやる必要がある

### 5.18　pluginsの設定
- 効果を及ぼすことができる対象はエディタやIDE上のみ。コンパイル時の動作には影響を及ぼすことができない
- エディタでTypeScriptの入力補完やコンパイルエラーの表示動作を拡張できる


