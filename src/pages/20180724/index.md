---
title: module bundlerの仕組みをお勉強
date: "2018-07-24"
---

[ronami/minipack: 📦 A simplified example of a modern module bundler written in JavaScript](https://github.com/ronami/minipack)を写経してみました。

リポジトリ内の構成はシンプルで、srcディレクトリにmodule bundlerの処理が実装されたJSファイルが1つあるのみ。しかもほとんどが処理の説明をしたコメントなので、写経しても1時間足らずでひと通りみれました。コメントがよくできていて、ソースコードの上から順に読んで行くとチュートリアルのような感じでmodule bundlerの仕組みが理解できます。

ASTなどは馴染みがあまりないのでふんわりとしかわかってないですが、ざっくりとwebpackなどでこんなことしてるんだなあを知るにはよいサンプルでは〜と思いました。

写経したのはこちら: [yinm/clone-ronami-minipack](https://github.com/yinm/clone-ronami-minipack)
