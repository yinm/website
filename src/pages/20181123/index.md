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

## [アドバンスド型戦略 | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/types-advanced.html)
- この章で解説するのは、型のうち難しいけど便利な話や、標準の型定義を読むために必要な知識や、あまり関わりたくないけど実用上たまにお世話になる内容
- 本章で書かれた内容を活かさないと上手く扱えないJavaScriptコードは、元々の品質が微妙なコードだと考えてよい

### 4.1　直和型（Union Types）
- 直和型（Union Types）とは
  - `string | null | undefined`という型注釈がある場合、この変数の値はstringか、nullか、undefinedのいずれかを表す
  - 既存のJavaScriptライブラリには返り値の型が複数ある困った関数がかなりある。これらに対して適切なコードを書くことを誘導したい時、anyを指定するよりunion typesを使ったほうがよりよい型定義になる
  - TypeScriptのコード書くときに積極的に使うものではない (--strictNullChecksオプションを使う場合に避けて通れない記法だから覚えるだけ)
- 意図せずunion typesを目にしてしまう機会
  - e.g. || 演算子を使ったとき、条件（三項）演算子を使ったとき、配列リテラルを使ったとき
  - TypeScriptのベストプラクティスとして1つの配列で複数の型の値を扱わないほうが堅牢なコードになるため、きれいなコードを書いている限りはあまり見ないかも
- 型注釈として関数型を与える
  - 型名をカッコでくくる必要がある
  - e.g. `let func: (() => string) | (() => boolean);`

### 4.2　型の番人（Type Guards）
- type guardsとは
  - union typesが導入されたことで変数の型が一意ではなくなってしまったため、それを自然に解決するために導入された仕組み
  - type guardsは"変数Aが○○という条件を満たすとき、変数Aの型は××である"というルールを用いて、ガード（番人となる条件式など）の後の文脈で変数の型を××に狭めることができる
- 処理フローに基づく型の解析（Control Flow Based Type Analysis）
  - JavaScriptとして素直にコードを書き、変数の型が確定するような分岐などがあると書いたとおりに変数の型が絞り込まれるというもの
  - 関数はいつ実行されるかわからないため、変数の再代入が可能な場合、関数の内側で別途絞込みを行う必要がある (関数の内側と外側では、処理フローは別世界のため)。一方、constを使うと変数の値を変えることができないため、この問題を回避できる場合がある
- JavaScriptのtypeofは指定した値がどういう性質のオブジェクトかを調べ、文字列で返す演算子
  - string のときは"string"を返す
  - boolean のときは"boolean"を返す
  - number のときは"number"を返す
  - undefined のときは"undefined"を返す
  - 関数として呼び出し可能な場合は"function"を返す
  - それ以外の場合（nullを含む！）は"object"を返す
- typeofによるType Guards
  - typeofの返り値次第で変数の型を絞り込む
- instanceofによるType Guards
  - typeofでしかtype guardsが使えないと辛いので、instanceofを使ったtype guardsもある
- ユーザ定義のType Guards（User-defined Type Guards）
  - ユーザが定義した関数を使って、値の型をTypeScriptコンパイラに指示する方法
  - 型判別用の関数を作成し、そこで返り値に`仮引数名 is 型名`という形式で判別結果を指定。この書き方をした場合、返り値はbooleanでなければならない
- Type Guardsと論理演算子
  - type guardsは&&とか||とか?とか!とかの論理演算子にも対応
- Type Guardsの弱点
  - type guardsは型システム上の仕組みであり、JavaScriptの実行環境とはまったく関係がない
  - e.g. 構造的部分型の仕組みにより、クラスが要求されている箇所に互換性のある別の値(オブジェクトリテラルなど)を代入できる。しかし、JSになった時、そのコードは動かない
  - 回避するには、ユーザ定義のtype guardsを使う。または、privateな要素をクラスに突っ込んでしまう
  - そもそもunion typesをなるべく使わないのが一番いい方法

### 4.3　交差型（Intersection Types）
- 交差型 (intersection types)とは
  - 2つの型を合成し、1つの型にする
  - union typesと違って利用頻度は低く、TypeScript的に使いたくなるシチュエーションもほとんどない (ユースケースは、型定義ファイルが書きやすくなる場合がある)

### 4.4　型の別名（Type Alias）
- 型の別名 (type alias)とは
  - union typesの扱いを便利にするために導入された機能で、型をひとまとまりにして、それに名前が付けられるだけの機能 (よく使うunion typesに名前をつけて使い回しやすくする)
  - type aliasは型に別名をつけるだけで、コンパイルすると消えてしまう
- type alias と interface
  - type aliasは仕様上、interfaceと同じように利用できる場面もあるが、基本的にはinterfaceを使うべき
  - interfaceは定義の統合ができるので後から自由に拡張することができる

### 4.5　プリミティブ値のリテラル型（String, Number, Boolean and Enum Literal Types）
- プリミティブ値のリテラル型とは
  - 文字列リテラル、数値リテラル、真偽値のリテラルを型として使える機能
  - この機能はTypeScriptがJavaScriptの現実と折り合いをつける上で重要な役割がある (e.g. DOMのaddEventListenerは、指定するイベントによってイベントリスナーの型が変わる)

### 4.6　多態性のあるthis型（Polymorphic 'this' Type）
- 多態性のあるthis型とは
  - thisを型として用いることができる

### 4.7　関数のthisの型の指定（Specifying This Types For Functions）
- 関数のthisの型の指定
  - JavaScriptではFunction.prototype.bindやFunction.prototype.call、Function.prototype.applyなどの関数により、関数呼び出し時のthisの値の型を変更できる。TypeScriptでもこの仕様に対して自然なサポートを与えようというのが、関数のthisの型の指定
  - 記法は、関数の1つ目の仮引数の名前をthisにするだけ

### 4.8　ThisTypeでthisの型を制御する
- ThisTypeとは
  - --noImplicitThisオプションを利用した場合、オブジェクトリテラル中のthisがオブジェクトリテラル自体を指すよう正しく認識される
  - さらにオブジェクトリテラル中でのthisの型を強力にコントロールしたい場合、`ThisType<T>`を利用できる

### 4.9　ローカル型（Local Types）
- ローカル型
  - 通常より小さい範囲で、クラスやインタフェースやenumやtype aliasを定義できる
  - 記法は、ブロックスコープ`{}`の中で定義するだけ

### 4.10　型クエリ（Type Queries）
- 型クエリ (Type Queries)とは
  - 指定したクラスや変数などの型をコピーする
  - 記法は、`変数名: typeof コピーしたい型`

### 4.11　タプル型（Tuple Types）
- タプル (tuple)とは
  - 任意の数の要素の組
  - JavaScriptではタプルはサポートされていないため、TypeScriptでのタプルはただのArrayで表現される
  - 既存のJavaScript資産を使おうとしたときに、配列の形で多値を返してくるライブラリがある。タプル型はそういったときに使うためのもので、TypeScriptでコードを書く際に多用するものではない

### 4.12　非null指定演算子（Non-null Assertion Operator）
- 非null指定演算子（!）とは
  - 値がnullやundefinedではないことを人力でコンパイラに教えてやるための方法
  - 記法は、変数やプロパティの末尾に`!`を指定
  - 非null指定演算子をなるべく使わない手段として使う前に初期値を代入する、undefinedやnullを含まない型の値に詰め直すなど

### 4.13　クラスのMixin
- クラスのMixinとは
  - クラスに要素や機能を追加できる
  - 拡張用の関数に対してコンストラクタを渡すと機能拡張する形で継承したものを返す、というだけの関数

### 4.14　keyofと型の写像（keyof and Mapped Types）
- 型のルックアップ（Lookup Types）
  - 任意のプロパティの型を参照できる機能
  - 型の写像処理やジェネリクスと組み合わせると力を発揮
- keyof演算子
  - 全プロパティのキー名を列挙する
  - 型の写像処理やジェネリクスと組み合わせると力を発揮
- 型の写像処理 (Mapped Types)
  - 書き方の基本が4パターン (Kに含まれるPという値の型にあたるTと読めばいい)
  - `{ [ P in K ] : T }`
  - `{ [ P in K ] ? : T }`
  - `{ readonly [ P in K ] : T }`
  - `{ readonly [ P in K ] ? : T }`

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

## [JavaScriptの資産と@types | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/at-types.html)
- 型定義ファイルは、既存のJavaScript用資産を活用するための仕組み
- 型定義ファイルは拡張子を`.d.ts` にする
  - 拡張子を.d.tsとしたファイルに実装を含むコードを書くとtscがエラーにするので、ケアレスミス予防になる
- 型定義ファイルはすでに実装があるJavaScriptに後付かつ手書きで型をつけていくため、ズレる（バグる）可能性が大いにある
  - 既存の型定義ファイルを使う場合も、この可能性を頭の片隅においておき、信じすぎないようにする

### 6.1　@typesを使う
- 既存の型定義ファイルを使う
  - [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)というコミュニティベースの型定義ファイル集積リポジトリを（間接的に）利用することになる
  - TypeScript 2.0.0からは@typesというnpmのscoped packageを使って型定義ファイルを利用できる
  - パッケージの検索は、[TypeScript Types Search](https://microsoft.github.io/TypeSearch/)
  - @typesで導入した型定義ファイルの検索は、モジュールの解決方法（--moduleResolution）がnodeのときのみ行われる
  - npmのscopedパッケージを扱う場合、vvakame/foobarに対する型定義ファイルがほしいケースでは@types/vvakame__foobarパッケージを参照するネーミングルールになっている

- npmのscoped package
  - @xxx/ から始まる名前空間が区切られたnpm packageのこと
  - https://docs.npmjs.com/misc/scope
  - [npmで名前空間を持ったモジュールを公開する方法(scoped modules) | Web Scratch](https://efcl.info/2015/04/30/npm-namespace/)

### 6.2　型定義ファイルを参照してみよう
- 型定義ファイルを参照する
  - 基本的に、tscコマンドでコンパイル対象に含める必要がある
  - node_modules/@typesにある型定義ファイルは特別扱いされ、モジュールをimportした時や、tsconfig.jsonのtypesに記述したモジュールの解決時に自動的に走査される
- 型定義ファイル参照のデバッグ方法
  - コンパイルに利用したファイルをリスト表示する--listFilesオプション
  - 型定義ファイル探索の様子を表示する--traceResolutionオプション
- DefinitelyTypedのバージョン規約
  - 実装本体のパッケージと型定義ファイルのバージョンのmajorとminorが一致する
  - ただし、ずれているものもある (e.g. mochaの実装と型定義)

## [型定義ファイルを作成する | Revised Revised TypeScript in Definitelyland](http://typescript.ninja/typescript-in-definitelyland/definition-file.html)

### 7.1　型、実体、そして42。
- TypeScriptはJavaScriptに対して後付で型による制約を付け足した言語
  - そのため、JavaやC#のような最初から型ありきの言語と違って、型と実体（値）というものが分かれてしまうことがある (すでにあるJSに後付けで型をつけた場合)

### 7.2　良い型定義ファイル、悪い型定義ファイル
- 型定義ファイルにも良し悪しの基準
  - 正しいライブラリの使い方を導くこと (間違った使い方ができないようにする)
  - 他のコードや型定義ファイルに意図せぬ干渉を引き起こさないこと (意図せぬインタフェースの統合などが起こらないこと。このためには汎用的な名前を使うのを避け、可読性が高く理解しやすい型定義を作り、干渉した場合に容易に判断できるようにすることも含まれる)
  - IDE上で使いやすいこと (Visual Studio Codeなどでコードを書く上で入力補完の候補が不用意に出過ぎないようにして見通しのよい開発を助けることなど)

### 7.3　型定義ファイルを書くための心得
- 雑な型定義でやりすごす
  - モジュールの型定義を簡略表記する方法 (`declare module モジュール名`と書くことで、anyとして使える)
- インタフェースを活用する
  - 定義を分割して書く
  - インタフェースには後から定義を拡張できるという特性(同名のインターフェースを定義すると、合成される)があり、使いやすい
- 幽霊namespace (ghost module)とは
  - namespaceを作ったとしても、即座に実体が生成されるとは限らない。namespaceが抱えるものがインタフェースのみの場合、実体がある扱いにはならない
  - これを活用して大量のインタフェースをもつようなライブラリの定義をひとまとまりにできる
- 関数 + namespace
  - e.g. 関数としても呼べれるし、namespaceのように振る舞うオブジェクトの型定義
  - 関数とnamespaceをどちらもアンビエント宣言する (メリットは階層構造を素直に表現できる)
  - [power-assertの型定義もこのパターンになっている](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/b24419795db48447632332332ccebbd085ba4fcb/types/power-assert/index.d.ts#L16-L17)
- クラスはクラスとして定義する
  - クラス定義は、Open-ended
  - 歴史的経緯により、クラスの型定義を行う時に2つの方法が存在する
  - 1.クラスを定義する (こちらを使っていればいい)
  - 2.クラスの分解定義 変数 + インタフェース2つ
- オーバーロードをうまく使おう！
  - JavaScriptのライブラリは1つの関数にさまざまな使い方をさせようとする場合には、使い方ごとに型定義を割り振ってやるテクニック(オーバーロード)を使うとわかりやすい
  - また、union typesを使ったほうがいい場面もある (e.g. union typesとしてTSコードで使いたい場合。シンプルに書ける簡単な定義の場合)
  - なお、新しいコードを書くときはオーバーロードをあまり使わないほうがいい (実装が煩雑になってしまいまうから、そもそもメソッドを分けたほうがいいため)
- モジュールの定義を統合する
  - モジュールの定義は、Open-ended (interfaceと同じように、モジュール定義を後から拡張できる)
- どれ使う？anyと{}とObject
  - 型定義ファイルを書いていて具体的な型がわからないとき、頭を使わずにとりあえずコンパイルを通したいときは、素直にanyを使う。
  - Objectを指定するのは悪手。関数の返り値にObjectや{}を指定しても有用なプロパティが存在しないため型アサーションでもって適切な型にキャストするしかない。これはanyを指定するのと同程度に危険で、なおかつanyより検出しにくい
- ドキュメントから書き起こす
  - ライブラリにしっかりしたドキュメントがあるのであれば、実装コードから型定義ファイルを起こすのではなく、ドキュメントをベースに作成する
  - サンプルをテスト用コードとしてTypeScriptコードに移植し、ドキュメントどおりの記述が可能かも確かめるとよい (型定義ファイルは書き起こしたけれどもドキュメント中に書かれている利用例のコードをコンパイルしてみて失敗するようであれば、それは悪い型定義)
  - 型定義を起こしつつ、あわせてJSDocを記述していくとよい (Visual StudioなどのIDEでは、型定義ファイル上に書かれたJSDocコメントも利用時に表示してくれる場合があるため)
- コールバック関数の引数を無闇に省略可能（optional）にしない
  - optionalとは、値が渡されるかどうかの指標であって、コールバックを受け取った側が使うかどうかではない
- ECMAScriptモジュールとCommonJSモジュールの互換性について
  - 元のJavaScriptコード中にdefaultの文字がないならimportのdefaultは使うな。

#### アンビエント宣言 (Ambient Declarations)
- 他のコンポーネント（例えば Web ブラウザや既存の JavaScript ライブラリ）から変数や関数などが提供されることを TypeScript コンパイラに伝える。既存の JavaScript ライブラリに静的型付けし、TypeScript で利用可能になることを意味する
- 記法は、`declare ~~~`
- ref: [TypeScript プログラミング - アンビエント宣言 - 宣言](https://docs.solab.jp/typescript/ambient/declaration/)

#### Open-ended
- 同じ装飾名の宣言があった時、自動的にマージされる性質のこと
- interface宣言などが該当する
- ref: [TypeScript の型定義ファイルと仲良くなろう - Hatena Developer Blog](http://developer.hatenastaff.com/entry/2016/06/27/140931#Open-ended)

