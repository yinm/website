---
title: Ruby on Rails 5アプリケーションプログラミング CHAPTER5-5 (検証機能の実装)
date: "2018-07-16"
---

[Ruby on Rails 5アプリケーションプログラミング | Gihyo Digital Publishing … 技術評論社の電子書籍](https://gihyo.jp/dp/ebook/2017/978-4-7741-8946-8)の読書メモです。Modelのvalidation関連のお話。

---

## 検証の指定の用語

<table>
  <tr>
    <th>名前</th>
    <th>意味</th>
    <th>e.g.</th>
  </tr>
  <tr>
    <td>field</td>
    <td>検証対象のフィールド(DBのカラムなど)。複数指定が可能</td>
    <td>`:email`, `:price`</td>
  </tr>
  <tr>
    <td>name</td>
    <td>検証名</td>
    <td>`presence`, `length`</td>
  </tr>
  <tr>
    <td>params</td>
    <td>検証パラメーター。指定方法は`{パラメーター名: 値}`のハッシュ、または`true`。複数指定が可能</td>
    <td>`{minimum: 1, maximum: 100}`, `true`</td>
  </tr>
</table>

## acceptance検証
* 同意を求めるチェックボックスにチェックが入っていない場合にエラーにしたい時に利用する
* DBに対応する**フィールドを用意する必要がない**

## 空白時にvalidateをスキップする
* 1つのフィールドに対して複数の検証項目がある場合に、空白なら検証したくない場合に利用する
  * e.g. 入力必須と形式指定の検証がある場合で、ユーザーの入力が空白である場合に両方のエラーを出してしまうとユーザーが混乱するかもしれない。その際に1つずつエラーを出したいなどの用途で使う

#### `allow_nil`パラメーター
* nilの場合にvalidateをスキップする

#### `allow_blank`パラメーター
* nilと空文字列の場合ににvalidateをスキップする

## onパラメーター
* 検証のタイミングを制限する
* 以下の設定ができる

<table>
  <tr>
    <th>タイミング</th>
    <th>概要</th>
  </tr>
  <tr>
    <td>create</td>
    <td>新規登録時のみ</td>
  </tr>
  <tr>
    <td>update</td>
    <td>更新時のみ</td>
  </tr>
  <tr>
    <td>save</td>
    <td>新規登録/更新時の両方(デフォルト)</td>
  </tr>
</table>

## 条件付きの検証
* `if`, `unless`パラメーターを使う
* 条件の記述方法は、次の2つがある
  * シンボル(定義したメソッド)による指定
  * Procオブジェクトによる指定

### 条件を満たした場合に複数の検証する
* `with_options`メソッドを使う

## 自作検証クラスの作成
* 標準のvalidate機能ではまかなえない、かつ複数のモデルで利用する検証の場合に利用する
* `/app/models`の配下に作成する (決まっている訳ではない...？)

### パラメーターを持たない検証クラス
* 命名は、 `検証名Validator`
* `ActiveModel::EachValidator`クラスを継承する
* 検証を行うメソッドは、`validate_each`メソッド。引数には次の3つを取る
  * 検証対象のモデルオブジェクト (record)
  * 検証対象のフィールド名 (attribute)
  * 検証対象の値 (value)
* 検証によって発生したエラーは、`errors.add`メソッドを使って、モデルオブジェクトに登録する必要がある (つまり、`record.errors.add(エラー内容)` と記述する)
* モデルで利用する方法
  * nameは、検証クラス名から`Validator`を除いて、アンダースコアケースにしたもの
  * paramsは、パラメーターを持たないので`true`

### パラメーターを持つ検証クラス
* パラメーターには`options[パラメーター名]`でアクセスする (e.g. `options[:allow_old]`)
* モデルで利用する方法
  * paramsは、`{ パラメーター名: 値 }`にする
* 他は、パラメーターを持たない検証クラスと同じ

### 指定したフィールドの値を取得
* `attributes[フィールド名]`メソッドを使う (e.g. `record.attributes[options[:compare_to]].to_i`)

## 検証クラスを使わないカスタム検証
* 特定のモデル固有のvalidateであるため、わざわざ自作検証クラスを定義するほどではない時に利用する
* 実装方法は以下のもの
  * モデル内でプライベートメソッドとして検証ルールを定義する (基本は自作検証クラスと同じだが、モデル配下なので、`record`を介さないでも`errors.add`メソッドなどにアクセスできる)
  * 検証メソッドを呼び出すために、`validate`メソッドを使う (e.g. `validate :isbn_valid?`)

## DBに関連しないモデル定義
* DBのフィールドではないが、フォームからの入力をvalidateしたい場合などに使う

### Active Modelとは
* モデルの基本的な構造や規約を決定するコンポーネント
* Active Modelの機能(`ActiveModel::Model`モジュール)を利用することで、DBと対応関係のないモデルを実装することもできる

### 実装方法
* `ActiveModel::Model`モジュールをincludeする
* モデルとして管理する項目をアクセサ(`attr_accessor`メソッド)で定義
* `validates`などで検証ルールを定義
* あとは、コントローラーで利用する

