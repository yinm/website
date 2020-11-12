---
title: cacjs/cacで、コマンドのusageを変更する方法
date: "2020-11-12"
tags: ['JavaScript']
---

Node.jsでCLIが作りたくて、[cacjs/cac: Simple yet powerful framework for building command-line apps.](https://github.com/cacjs/cac)を使っていたのですが、コマンドのusageを変更する方法がドキュメントになさそうだったので、メモです。

なお、動作確認は[現時点のmasterの最新コミット](https://github.com/cacjs/cac/tree/d2c6b8a169359d0a5f17f0e3aa30e9c0e0a920ad)で行っています。

### usageの変更方法
グローバルコマンドなら`cli.usage(text)`、サブコマンドなら`command.usage(text)`を使うと変更できます。

コードでusageの変更前後を見てみます。

#### usage変更前

```js
const cli = require("cac")();

cli.command("subcommand");

cli.help();
cli.version("0.0.0");

cli.parse();
```

helpの表示結果

```sh
# グローバルコマンドの確認
$ node help.js -h
help.js v0.0.0

Usage:
  $ help.js <command> [options]

Commands:
  subcommand

For more info, run any command with the `--help` flag:
  $ help.js subcommand --help

Options:
  -h, --help     Display this message
  -v, --version  Display version number

# サブコマンドの確認
$ node help.js subcommand -h
help.js v0.0.0

Usage:
  $ help.js subcommand

Options:
  -h, --help     Display this message
  -v, --version  Display version number

```


#### usage変更後

```js
const cli = require("cac")();

cli.command("subcommand").usage("SubCommand Usage");

cli.usage("GlobalCommand Usage");
cli.help();
cli.version("0.0.0");

cli.parse();
```

helpの表示結果

```sh
# グローバルコマンドの確認
$ node help.js -h
help.js v0.0.0

Usage:
  $ help.js GlobalCommand Usage # ここが変更できている

Commands:
  subcommand

For more info, run any command with the `--help` flag:
  $ help.js subcommand --help

Options:
  -h, --help     Display this message
  -v, --version  Display version number

# サブコマンドの確認
$ node help.js subcommand -h
help.js v0.0.0

Usage:
  $ help.js SubCommand Usage # ここが変更できている

Options:
  -h, --help     Display this message
  -v, --version  Display version number
```

### おまけ
README.mdに書かれている方が便利だろうと思ったので、PRを出しておきました。マージされるといいなあ。

[docs: add usage api by yinm · Pull Request #93 · cacjs/cac](https://github.com/cacjs/cac/pull/93)
