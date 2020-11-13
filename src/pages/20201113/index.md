---
title: VSCodeでアクティブなエディタを分割先に移動するショートカット
date: "2020-11-13"
tags: ['VSCode']
---

VSCodeでアクティブなエディタを分割先に移動するショートカットの紹介です。言葉にすると難しいのですが、以下の動画の挙動です。

![VSCodeでのアクティブなファイルの移動ショートカットの紹介。cmd + ctrl + 9で最後のエディタグループヘ移動。cmd + ctrl + 1で最初のエディタグループへ移動。](/vscode.gif)

動画に入力中のキーも出てるのですが、KeybindingとCommandは次のものです。

エディタグループの最初に移動する
```json
{
  "key": "ctrl+cmd+1",
  "command": "workbench.action.moveEditorToFirstGroup"
}
```

エディタグループの最後に移動する
```json
{
  "key": "ctrl+cmd+9",
  "command": "workbench.action.moveEditorToLastGroup"
}
```

ちなみに、動画ではエディタグループが2つなので左右に移動する挙動になってますが、3つ以上の場合は真ん中には移動しないので注意です。次のエディタグループに移動したいなら、`ctrl + cmd + ←`や`ctrl + cmd + →`を使います。

個人的にこれまでも何度かネットで探して見つけられなかったショートカットなのですが、VSCode Keyboard Shortcutsを見てた時に見つけたのでメモです。こういうショートカットを探すのはネットよりも、VSCode Keyboard Shortcutsでそれっぽいキーワードを検索する方が早く見つかるかもなあと思ったりしました。