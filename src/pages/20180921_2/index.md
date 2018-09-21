---
title: JavaScript AST入門_chapter2
date: "2018-09-21"
---

[JavaScript AST入門　ソースを解析・加工して生産性に差をつける！ | 電子書籍とプリントオンデマンド（POD） | NextPublishing（ネクストパブリッシング）](https://nextpublishing.jp/book/9728.html)の第2章の読書メモです。

---

### ASTとは
- ノードが集まってできあがったツリー
- https://astexplorer.net/ でツリーを確認できる
- File - Programは、コードの全体を表すノード
- JSのソースコードは何らかのStatement(ExpressionStatement)の集まりで、ASTだとbodyの配列に格納される
- BinaryExpression(二項演算子)には、重要なプロパティが3つある
  - operator (演算子)
  - left (演算子の左側のリテラル)
  - right (演算子の右側のリテラル)

### JSのASTの種類
- `Esprima`系と`Babel/Babylon(Acorn)`系がある
- どちらも大まかな構造はESTreeで共有されているが、細かな違いがある

### Babylon
- 使い方は、引数にソースコードを入れて関数呼び出しすればASTが返ってくる
  - e.g. `const ast = babylon.parse('1 + 2 * (3 + 4)')`
- 返ってくるASTはツリー構造のNode型オブジェクト
  - プロパティ保存用のオブジェクトであり、メソッドは持っていない
  - Node型は必ずtypeプロパティを持っており、`File`, `BinaryExpression`などの文字列が入る
  - locはソースコードの表示上の位置情報
  - start, endは渡したソースコードのバイト数での位置情報
    - lineは行番号で、1から始まる(オリジン1)
    - columnは列で、0から始まる(オリジン0)





