---
title: OpenAPI Generatorへのcontribute
date: "2018-08-10"
---

同じチームで仕事しており、OpenAPI Generatorのcore teamの1人でもある[ackintosh (Akihito Nakano)](https://github.com/ackintosh)さんに、「サポートするので、PR出してみませんか？」とご提案をいただいたので、やりましょうということでお昼休みを使ってペアプロしました。

対応したPRはこちら(先ほど確認したら、マージされてた！)

[[Ruby] Fix method split by yinm · Pull Request #780 · OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator/pull/780)

きっかけは以前に仕事でOpenAPI Generatorを使った時に、RubyのAPIクライアント生成をしたのですが、メソッドごとの区切りがありませんでした。メソッド単位の改行がある方がコード読みやすくなるよねーということでやってみた感じです。この対応で仕事で使ったコードもきれいにできるので、OSS万歳ですね。

それと、OpenAPI Generatorのプロジェクトの構造とかも説明してもらったので、そちらもまとめて後日公開します。
