---
title: デザインパターン Iterator
date: "2019-02-02"
---

Iteratorパターンの勉強メモです。TypeScriptで実装したコード [yinm/design-patterns-in-typescript](https://github.com/yinm/design-patterns-in-typescript)

```
# Iteratorパターンとは
- 何かがたくさん集まっているときに、それを順番に指し示してスキャンしていく処理を行うためのもの

# 登場人物
- Iterator
  - 要素を順番にスキャンしていくインターフェース(API)を定める役
- ConcreteIterator
  - Iteratorが定めたインターフェース(API)を実装する役
  - スキャンするために必要な情報(ConcreteAggregateのインスタンスなど)を持っている必要がある
- Aggregate (集合体)
  - Iteratorを作り出すインターフェース(API)を定める役 (自分が持っている要素を順番にスキャンしてくる人」を作り出すメソッド)
- ConcreteAggregate
  - Aggregateが定めたインターフェース(API)を実装する役

# ポイント
- 実装と切り離して、数え上げを行える
  - ループ処理がConcreteAggregate役の実装に依存しないため
- AggregateとIteratorは対応関係になる (Concreteの同士も)
- 1つのConcreteAggregate役に対して、複数のConcreteIterator役を作ることができる (数え上げのバリエーションが作れる)
  - 数え上げの仕組みが、Aggregate役の外に置かれているため
```

### 参考
- [増補改訂版Java言語で学ぶデザインパターン入門](http://www.hyuki.com/dp/)
- [design-patterns-in-typescript/iterator at master · gztchan/design-patterns-in-typescript](https://github.com/gztchan/design-patterns-in-typescript/tree/master/iterator)
- [typescript-design-pattern/iterator at master · te-nu/typescript-design-pattern](https://github.com/te-nu/typescript-design-pattern/tree/master/iterator)
