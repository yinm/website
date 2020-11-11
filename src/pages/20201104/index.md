---
title: Node.jsのpath指定の方法を整理する
date: "2020-11-04"
tags: ['JavaScript']
---

Node.jsでpath指定する方法をよく忘れるので、path指定する時に使う知識を整理します。

動作確認は、以下の前提で行っています。

```
OS: MacOS
Node.js: 14.15.0
```

## Node.jsで`.`を使用してpath指定した場合の挙動

### 基本
terminalなどで`node`コマンドを実行したディレクトリを示します。

```js
// カレントディレクトリ:  /Users/yourname/misc/node-path
// 実行コマンド: node dot/index.js

path.resolve(".")
// =>  /Users/yourname/misc/node-path
```

```js
// カレントディレクトリ:  /Users/yourname/misc/node-path
// 実行コマンド: node dot/dir1/index.js

path.resolve(".")
// =>  /Users/yourname/misc/node-path
```

### 例外
`require()`の引数に`.`を使用した場合です。この場合は、`require()`を記述したファイルからの相対パスになります。

ディレクトリ構成

```sh
require/
├── index.js
└── log.js
```

log.js

```js
module.exports = () => {
  console.log("hello from log.js");
};
```

index.js

```js
// カレントディレクトリ:  /Users/yourname/misc/node-path
// 実行コマンド: node require/index.js

const log = require("./log");
log();
// => hello from log.js
```


## pathを結合する方法
[path.join()](https://nodejs.org/api/path.html#path_path_join_paths)を使います。

単純な文字列結合ではなく、`path.join()`を使うのは、以下のメリットがあるためです。
- プラットフォーム特有の区切り文字(e.g. Windowsなら`\`, POSIXなら `/`)を使用して結合する
- 区切り文字がダブったり不足したりすることを避ける

## 関連するAPI

### [path.join([...paths])](https://nodejs.org/api/path.html#path_path_join_paths)

引数に渡したpathの構成要素を、プラットフォーム特有の区切り文字で結合し、結果のパスを返します。

引数

- `...paths` [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
    - pathの構成要素 (先頭から順に結合する)

返り値

- [`<string>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
    - pathの構成要素の結合結果

```js
// カレントディレクトリ:  /Users/yourname/misc/node-path
// 実行コマンド: node path-join/index.js

path.join("")
// =>  .

path.join("", "src")
// =>  src

path.join(__dirname)
// =>  /Users/yourname/misc/node-path/path-join

path.join(__dirname, "../src")
// =>  /Users/yourname/misc/node-path/src

```

### [__dirname](https://nodejs.org/api/modules.html#modules_dirname)

現在のモジュール(`__dirname`を記述したファイル)のディレクトリ名を返します。

`path.dirname(__filename)`と同じに結果になります。

返り値

- `<string>`

```js
// カレントディレクトリ:  /Users/yourname/misc/node-path
// 実行コマンド: node dirname/index.js

__dirname
// =>  /Users/yourname/misc/node-path/dirname
```

## 参考
- [What is the difference between __dirname and ./ in node.js? - Stack Overflow](https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)
- [__dirnameを使ったらeslintに怒られたのでpathで書き直す - Qiita](https://qiita.com/tanaka0325/items/60bebc8076289ea07917#comment-6b4b753da6f2be89e297)
