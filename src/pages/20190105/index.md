---
title: IntelliJ IDEAで、型定義ファイルを使ってnode_modulesのコード補完を効くようにする
date: "2019-01-05"
---

Node.jsのコアモジュールのコード補完は、 `Preferences | Languages & Frameworks | Node.js and NPM` で、 `Coding assistance for Node.js` を有効にすれば有効になるのですが、外部モジュールを有効にする方法がわからなかったので調べてみました。(参考にしたページに書いてある内容そのままなのですが、日本語で読める情報があってもいいかと思ったので書きます。)

### 方法

- `Preferences | Languages & Frameworks | JavaScript | Libraries`を開く
- `Download...` ボタンを押して、コード補完を有効にしたいパッケージを選択して、 `Download and Install` をクリック

### 参考
- [Enable code completion for node_modules in WebStorm](https://stackoverflow.com/questions/39346505/enable-code-completion-for-node-modules-in-webstorm#answer-39350495)
- [How WebStorm Works: Completion for JavaScript Libraries | WebStorm Blog](https://blog.jetbrains.com/webstorm/2014/07/how-webstorm-works-completion-for-javascript-libraries/#add-ts-def)
