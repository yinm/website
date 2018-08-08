---
title: ESLintのカスタムルールの作り方を学ぶ
date: "2018-08-08"
---

[ESLint のカスタムルールを作ろう! (その1) - Qiita](https://qiita.com/mysticatea/items/cc3f648e11368799e66c) を見ながら写経してみました。合わせてメモも取っていたので、それをぺたり。

---

### Ruleとは
- 1つ以上のメソッドを持つオブジェクト
- メソッド名は、抽象構文木(AST)のノードの種類になる
- コードに該当するメソッド名のノードが現れたら、メソッドが呼び出される

### 抽象構文木(AST)とは
- 文字列データであるソースコードを解析して、オブジェクトにしたもの
- ESLint は事前にソースコードを解析してオブジェクト(JSON)にしてから、それを各ルールに渡す
- JavaScriptの抽象構文木(AST)の仕様は、[estree/estree: The ESTree Spec](https://github.com/estree/estree)  で管理
- 実際のコードのASTを確認したい時は、[AST explorer](http://astexplorer.net/#/VeRiaJxlcX)を使うといい


