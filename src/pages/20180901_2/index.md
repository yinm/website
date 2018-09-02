---
title: JavaScript AST入門_chapter1
date: "2018-09-01"
---

[JavaScript AST入門　ソースを解析・加工して生産性に差をつける！ | 電子書籍とプリントオンデマンド（POD） | NextPublishing（ネクストパブリッシング）](https://nextpublishing.jp/book/9728.html)の第1章の読書メモです。

---

- ASTはコンパイラの内部表現のため、言語利用者の大半には縁がない
- ただし、JSは例外
  - ブラウザの互換性を保つため、トランスパイルで変換することが一般的なため
  - Babelが定番
- Babelはトランスパイラだが、同時にASTを使ったエコシステム・ライブラリでもある
  - BabelプラグインはASTの変換を行う小さなプログラム
- JSのASTには、ESTreeという標準仕様がある  
- ASTを扱うツールは3つある
  - parser
  - traverser (あるいは、walker)
  - generator
- parser
  - JSやAltJSのコードを解析して、ASTを作る
  - Babylon(babel-parser)やEsprimaが該当
- traverser
  - AST(ツリー構造)を再帰的に探索するのを楽にするためのツール
  - babel-traverserが該当
  - babel-traverserは、ある程度の静的解析も行ってくれる
- generator
  - ASTからJSのコードを生成するツール
  - babel-generatorが該当
- babel-coreの`transform`関数は、parser, traverser, generatorの工程を一通り面倒見てくれるので、これを使ったBabelプラグインもある






