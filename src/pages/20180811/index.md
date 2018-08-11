---
title: Node.jsのmoduleの読み込みについて調べたこと
date: "2018-08-11"
---

なんとなくの雰囲気で使っていたのですが、改めて調べてみたのでメモです。

### `exports`と`module.exports`の関係
- 初期状態では、`exports`は`module.exports`を参照しており、両者は同じものを指している (`exports = module.exports = {}`)
- `exports === module.exports`の関係が途切れるケース
  - module.exportsに代入した場合
  - exportsに代入した場合 (e.g. `exports = 'foo'`)
    - ただし、exportsのプロパティに代入した場合は関係は途切れない (e.g. `exports.foo = 'foo'`)
- `require()`によって最終的に評価されるのは、`module.exports`
  - そのため、常に`module.exports`を使うようにすれば混乱が少ない

### `require()`の挙動
  - **ファイルの中身を実行**して、`module.exports`を返す
  - 同一ファイルに対しては一度しか実行しない
  - 引数にディレクトリを渡すと、そのディレクトリの`index.js`を実行する
    - そのため、index.jsをエントリポイントにして、複数ファイルを簡単に読み込める

### 参考
- [Node.jsのexportsについて - 30歳からのプログラミング](https://numb86-tech.hatenablog.com/entry/2016/07/20/202744)
- [exports と module.exports の違い - Qiita](https://qiita.com/kuboon/items/cb1b532ac8a8959973b2)

