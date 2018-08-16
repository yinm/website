---
title: 速習 TypeScriptの読書メモ
date: "2018-08-17"
---

[速習 TypeScript - WINGS](https://wings.msn.to/index.php/-/A-03/WGS-JSF-002/)を読んだので、読書メモです。

---

## Ch2 変数/データ型

### 変数の宣言

```ts
let name: type = initial

name: 変数名
type: データ型
initial: 初期値
```

- typeを省略した場合は、型推論が行われる (初期値から型を類推する。以後の代入で、類推した以外の型は代入しようとするとエラーになる)
- どの型でも入れられるようにする場合は、any型を指定する
  - ただし、`noImplicitAny`オプション(tsconfig.jsonなどで設定)が有効な場合は、値が代入された時に対象の型になる

- その他のany型が割り当てられるケース
  - 当然だが、型・初期値の両方を省略した場合も、any型が割り当てられる
  - `undefined`, `null`を代入した場合も、any型が割り当てられる

### 型の種類
- 基本型(Primitive Type)、オブジェクト型、TS特有の型の3種類がある

- 基本型
  - number
  - string
  - boolean
  - symbol

- オブジェクト型
  - 配列型
  - タブル型
  - クラス型
  - インターフェース型
  - 関数型

- TS特有の型
  - 共用型
  - 型エイリアス
  - 文字列リテラル型
  - null非許容型


### 型アサーション
- 他の言語でいう、キャスト
- 書き方は2種類
  - `<型名> 変数|リテラル`
  - `変数|リテラル as 型名`

### 定数の宣言

```ts
const name: type = initial

name: 定数の名前
type: データ型
initial: 値
```

### 配列型の宣言

```ts
let name: type[] = initial

name: 配列名
type: 要素のデータ型
initial: 初期値(配列リテラル)
```

- 多次元配列の場合は、次元の数だけ[]を増やせばいい

```ts
let data: number[][] = [[10, 20], [30, 40], [50, 60]]
```

### 連想配列(ハッシュ)の宣言

```ts
let name: {[index: i_type]: v_type} = initial

name: 配列名
i_type: インデックス型のデータ型
v_type: 値のデータ型
initial: 初期値(オブジェクトリテラル)
```

- `{[index: i_type]: v_type}`の記法を、インデックスシグネチャという
  - indexの部分は好きな名前にしていい (e.g. `{[key: string]: string}`)
  - interfaceキーワードを利用すると、名前つきの型として用意できる。使い回す場合はこちらを利用する方が便利

### 列挙型の宣言

```ts
enum ename {name, ...}

ename: 列挙型の名前
name: 定数
```

- 列挙型に属する定数を、列挙子と呼ぶ
- 列挙子のインデックス(列挙値)には、`列挙型.列挙子`でアクセスできる
- 列挙子の値には、`列挙型[列挙値]`でアクセスできる

### タプル型
- 複数の異なる型の集合を表現するためのデータ型
- 自分が書くコードでタプルはあまり利用しない方がいい (普通はクラスやオブジェクトとして定義した方が自然であるため)


### 共用型 (Union Types)
- 複数の型の中のどれかを表す型
- ユースケースとしては、関数や式の結果が複数の型を返す可能性がある場合に使う
- 型をパイプで区切ることで表現する

```ts
let name: type1 | type2 = initial

// 配列の場合
let name: (type1 | type2)[] = initial
```

### 型エイリアス (Type Alias)
- 特定の型に対して別名を設定する
- ユースケースとしては、共用型、タプル型に短い名前をつけるために使う
- ただし、インターフェースで実現できるなら、インターフェースを使う方がベター
  - インターフェースとして定義した名前はどこからでも参照できるが、型エイリアスはそうではない (e.g. エラーメッセージに別名は表示されない)
  - 型エイリアスは、継承/実装の用途で使えない

```ts
// 共用型の場合
type aliasName = type1 | type2
let name: aliasName = inital

// タプル型の場合
type aliasName = [type1, type2]
let name: aliasName = initial
```

### 文字列リテラル型
- 文字列リテラル(特定の文字列)をそのまま型として利用できる

```ts
// e.g.
type Season = 'spring' | 'summer' | 'autumn' | 'winter'

function getScene(s: Season) {
  console.log(s)
}

getScene('spring') // OK
getScene('fall') // Error
```

### null非許容型
- 前提として、TSではデフォルトですべての型に対して`null`/`undefined`が代入可能 (この挙動がバグの温床になりがち)
- tsconfig.jsonで、`"strictNullChecks": true`にすると、すべての型で`null`/`undefined`を禁止できる
  - `null`/`undefined`を禁止された型のことをnull非許容型と呼ぶ
- strictNullChecksオプションが有効な状態で`null`/`undefined`を許可するには、共用型を使う

```ts
// e.g.
let data1: string | undefined = undefined
let data2: string | null = null
```

### 型定義ファイル
- 前提として、JSのライブラリを使いたい時に、型情報がないため正しくコンパイルできない場合がある
- その時にTSとJSの橋渡しをするのが、型定義ファイルの役割
- 型定義ファイルは、型情報だけを定義したファイルになっている

#### 型定義ファイルの利用方法
- TS2系以降なら、`@types`を利用すれば、npm installで型定義ファイルを管理できる
  - 型定義ファイルを探すには、[TypeScript Types Search](https://microsoft.github.io/TypeSearch/)が便利

```sh
npm i -D @types/型定義ファイル
```

- installが終わったら、型定義ファイルを実際に使うTSのコードを書いて、コンパイルが正しく行えるはず

## Ch3 関数

### TSの関数の記法
- function命令
- 関数リテラル
- アロー関数

### function命令の宣言

```ts
function name(param: ptype, ...): rtype { statements... }

name: 関数名
param: 仮引数
ptype: 引数のデータ型
rtype: 戻り値のデータ型
statements: 関数の処理
```

### 関数リテラルの宣言
- 明示的に書かないでも関数型と型推論されるが、あえて書くなら次の感じになる

```ts
let name: (param: ptype, ...) => rtype = function(param: ptype, ...): rtype { statements... }

param: 仮引数
ptype: 引数のデータ型
rtype: 戻り値のデータ型
```

###  アロー関数

```ts
(param: ptype, ...): rtype => { statements... }

param: 仮引数
ptype: 引数のデータ型
rtype: 戻り値のデータ型
statements: 関数の処理
```

### 省略可能な引数を宣言する
- 前提として、TSでは厳密に型を認識するため、宣言された引数はすべて必須になる (JSはすべての引数は省略可能)
- 省略したい場合は、仮引数名の後ろに`?`をつける
- 一般的に引数を任意にした場合は、
  - デフォルト値をセットする
  - 関数の処理中でも引数が指定されたか(= undefinedではないか)をチェックする

### 引数のデフォルト値
- 仮引数の後ろに`= デフォルト値`を追加する
- 任意引数の後ろに、必須引数は配置できない
- デフォルト値には、リテラルだけでなく、式も指定できる
  - 他の引数をデフォルト値にすることもできるが、参照できるのは自分より前に定義されたものだけである
- 引数にundefinedを指定した場合は、省略したのと同じ意味になる (デフォルト値が適用される)
  - nullを渡した場合は、nullを渡したことになる (デフォルト値は適用されない)

### 関数のオーバーロード
- オーバーロードは同じ関数名でありながら、引数リスト・戻り値の型が異なる関数を定義すること
- 実装方法
  - 最初にシグネチャだけの関数を定義する (e.g. `function name(params: ptype): rtype`)
  - 具体的な実装を直後に実装する。データ型はオーバーロードしたすべての型を受け取れるように定義する (ここでanyを使っても、オーバーロードで定義していない型なら、エラーにできる)

### 型ガード
- 変数の型を判定して、対象となった変数の型を特定する仕組み
- 基本型の判定には`typeof`演算子、オブジェクト型の判定には`instanceof`演算子を使う

```ts
// numberには、toUpperCase()が存在しないので、コンパイルエラーになる

function process(value: string | number) {
  return value.toUpperCase()
}
```

```ts
// 型ガードを使うことで、コンパイルエラーを解消する

function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
}
```

## ch4 オブジェクト指向構文

### class命令
- constructorに戻り値はないので、データ型も定義しない

```ts
class name {
  pname: ptype
  ...

  constructor(param: type, ...) { statements }
  mname(param: type, ...): rtype { statements }
}

name: クラス名
pname: プロパティ名
ptype: プロパティのデータ型
mname: メソッド名
param: コンストラクタ/メソッドの仮引数
type: 引数のデータ型
rtype: 戻り値のデータ型
statements: コンストラクタ/メソッドの処理
```

### アクセス修飾子
- クラスのメンバー(プロパティ, メソッド)へのアクセスの可否レベルを設定する

### コンストラクタとプロパティ設定
- コンストラクタでプロパティの定義と代入を一括で行える記法があるので、そちらを使う方がいい (記述が短くできる)

```ts
// 通常の記法

class Person {
  private name: string
  private sex: string

  constructor(name: string, sex: string) {
    this.name = name
    this.sex = sex
  }
}
```

```ts
// コンストラクタでプロパティの定義と代入を一括で行える記法

class Person {
  constructor(
    private name: string,
    private sex: string
  ) {
  }
}
```

### getter / setter アクセサー
- privateプロパティにアクセスするための特別なメソッド
- ES5の構文を利用するため、tsconfig.jsonで、`"target": "es5"`か、それ以降のバージョンにする必要がある
- メリット
  - 読み書きを制御できる (setを省略すると読み込み専用、getを省略すると書き込み専用のプロパティを定義できる)
  - 戻り値の加工、値のチェックなどが可能 (値の読み込み・書き込みに、任意の処理を差し込める)

```ts
get pname(): type {
  return this.vname
}

set pname(param: type) {
  this.vname = param
}

pname: プロパティ名
type: プロパティのデータ型
vname: プロパティ値を格納するprivate変数
param: 設定値を受け取る仮引数
```

### 静的メンバー
- static修飾子を使うことで定義できる (e.g. `public static Pi: number = 3.14159`)
- 他の言語と異なる特徴として、クラス内で静的メンバーにアクセスするときに、`this`キーワードを使う (e.g. `this.Pi`)

### 名前空間
- 意味的に関連するクラスを束ねる仕組み (Javaでいうpackage)
- 同名のクラスでも名前空間を変えれば、別のクラスとして区別できる
- 定義するには、`namespace`ブロックを使う
  - `export`キーワードで外からのアクセスが可能であることを明示する必要がある
  - 外部からアクセスするには、`名前空間.クラス名()`のように完全修飾名で記述する (MainApp.HogeとHogeは別ものであるため)

```ts
namespace MainApp {
  export class Hoge {}
  export function foo() {}
}

let h = new MainApp.Hoge()
MainApp.foo()
```

#### 階層的な名前空間
- 大規模な開発に備えて、階層的な名前空間も定義できる
- 定義の方法は2種類ある

```ts
// 名前の区切りをドットで表したもの

namespace Wings.MainApp {
  export class Hoge {}
  export function foo() {}
}

let h = new Wings.MainApp.Hoge()
Wings.MainApp.foo()
```

```ts
// namespaceブロックを入れ子にしたもの

namespace Wings {
  // 内側のnamespaceもexportする必要がある
  export namespace MainApp {
    export class Hoge {}
    export function foo() {}
  }
}
```

### 継承
- 継承元になるクラスの呼び方
  - スーパークラス
  - 親クラス
  - 基底クラス
- 継承の結果できたクラスの呼び方
  - サブクラス
  - 子クラス
  - 派生クラス
- extendsキーワードで元となるクラスを示せば使える

```ts
class name extends parent {
  ...
}

name: クラス名
parent: 継承元になるクラス名
```

### メソッドのオーバーライド
- スーパークラスで定義したメソッド(コンストラクタも含む)を、サブクラスで定義し直すこと
- スーパークラスの処理を使い回して、記述を短くできる方法も用意されている
  - スーパークラスのメソッドを呼び出す場合は、`super.メソッド()`
  - コンストラクタを呼び出す場合は、`super()`

### 抽象メソッド・抽象クラス
- 抽象メソッドは、サブクラスでメソッドを定義し直すことを必須にする仕組み (オーバーライドは、定義し直してもいいだけ)
- abstract修飾子を使って定義する
  - abstract修飾子を付与したメソッド(抽象メソッド)は、`{}`のコードブロックを持たない
  - 抽象メソッドを持つclassブロックにも、abstract修飾子をつける必要がある(抽象クラス)

```ts
// abstract修飾子を使わない場合

class Figure {
  constructor(
    protected width: number,
    protected height: number
  ) {
  }

  getArea(): number {
    return 0
  }
}

class Triangle extends Figure {
  getArea(): number {
    return this.width * this.height / 2
  }
}

const t = new Triangle(10, 5)
console.log(t.getArea())
```

```ts
// abstractキーワードで書き換えた場合

abstract class Figure {
  constructor(
    protected width: number,
    protected height: number
  ) {
  }

  abstract getArea(): number
}

class Triangle extends Figure {
  getArea(): number {
    return this.width * this.height / 2
  }
}

const t = new Triangle(10, 5)
console.log(t.getArea())
```

### インターフェース
- ざっくり言うと、すべてのメソッドが抽象メソッドである、特別なクラス
- クラスと違って複数のインターフェースを同時に継承(正確には、実装)することができる
  - 実装したクラスのことを、実装クラスという
- インターフェースの特徴
  - メソッドは自動的に抽象メソッドになる (abstract修飾子を使ってはいけない)
  - アクセス修飾子を指定できない (すべてpublicであることが明らかであるため)
  - staticメンバーを宣言できない
- 実装する際は、`implements`キーワードを使う (not extends)

```ts
interface name {
  ...
}

// 実装
class cname implements name {
  ...
}

name: インターフェース名
cname: クラス名
```

#### インターフェースの継承
- インターフェースを継承して、新たなインターフェースを宣言することもできる
- この場合は、通常のクラスと同じようにextendsを使う
  - ただし、多重継承もできる点は異なる

```ts
interface Foo {
  ...
}

interface Bar {
  ...
}

interface Hoge extends Foo, Bar {
  ...
}
```

- 他のクラスを継承することもできる
  - クラスの実装は無視されて、シグネチャだけが継承される

```ts
class MyClass {
  ...
}

interface Hoge extends MyClass {
  ...
}
```

### 構造的部分型 (Structural Subtyping)
- TSが型の互換性(= 何がサブクラスなのか)を判断する基準として採用している仕組み
- 型の構造にフォーカスして、それが互換性のある型かどうかを判定する方式
  - e.g. 明示的に特定のクラス/インターフェースを継承/実装していなくても、親が持っているメソッドをすべて備えているから型の互換性があると判断する
- C#やJavaでは明示的にクラス/インターフェースを継承/実装することでのみ、型の互換性があると判断するアプローチをとっている
  - 公称的部分型 (Nominal Subtyping)と呼ばれている

### 型注釈としてのインターフェース
- オブジェクト指向構文の用途だけでなく、単純な型注釈として使われることもある

```ts
// Car型を定義
interface Car {
  type: string // プロパティのシグネチャ
  run(): void // メソッドのシグネチャ
}

// Car型の変数を宣言 (型注釈としてinterfaceを使う)
const c: Car = {
  type: 'トラック',
  run() {
    console.log(`${this.type}が走ります。`)
  }
}

c.run()
```

### オブジェクト型リテラル
- インターフェースの型注釈をするほどじゃないが、その場限りの利用で型情報だけ明示したいときに使う
- 不要なメソッドのへのアクセスを制限するなどが簡単にできる

```ts
class MyClass {
  hoge() {}
  foo() {}
}

// オブジェクト型リテラルがなければ、すべてを使える
const y = new MyClass()
y.hoge()
y.foo()

// オブジェクト型リテラルがあれば、不要なメソッドにアクセスできないようにできる
const x: { hoge() } = new MyClass()
x.hoge()  // アクセスできる
x.foo()  // エラー
```

### コールシグネチャ
- 関数型を表すためのシグネチャ

```ts
interface Car2 {
  (type: string): string
}

const c2: Car2 = function(type: string): string {
  return `車種は、${type}`
}


console.log(c2('軽自動車'))
```

### this(現在のインスタンス)の型
- 戻り値をthis型(自分自身)にすることで、メソッドチェーンのようなことができる(メソッドの結果でもって別のメソッドを呼び出す)
- 戻り値にクラス名を書いてもいいが、継承した場合でも指定したクラス名の型にしかならないので、柔軟性がなくなる
  - それに対して、thisを指定すれば呼び出し元のクラスに応じて型が変化する
  - このようなthisの性質は、`Polymorphic this types`(多様性のあるthis型)と呼ばれている

### ジェネリック (総称型)
- 汎用的なクラス/メソッドに対して、特定の型を紐づけるための機能
  - 汎用的なクラス/メソッドに、何でも格納できると使いづらいので、それを制限するために使う
- `<type>`で特定の型と紐づける

```ts
// e.g. 汎用的なクラス(Array)に対して、特定の型(number)を紐づける
let data: Array<number> = [1, 2, 3]
```

#### ジェネリック型の定義
- ジェネリック対応クラス(ジェネリック型)を定義するには、クラス名の後ろに型引数(`<type>`)を付与する
  - 型引数の名前は自由に決められる
  - 慣習的にTypeを表す`T`や、Elementを表す`E`などが使われる
