---
title: JSでページの最上部・最下部に移動する
date: "2018-08-25"
---

開発しているChrome拡張でページの最上部・最下部に移動するコードを書いて勉強になったのでメモしておきます。PRはこちら [Add scrolling to top and bottom by yinm · Pull Request #9 · yinm/keymapper](https://github.com/yinm/keymapper/pull/9)

## 最上部に移動する
`window.pageYOffset` ([window.scrollY - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Window/scrollY)のエイリアス)を使って、現在のページ上部の座標(数値)を取得できます。そのあとに、[window.scrollTo - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Window/scrollTo)を使って上へ移動するという動作を、ページの最上部(= 座標が0になる)まで繰り返します。

ちなみに、ページの最上部に移動するだけなら、いきなり最上部に移動する `window.scrollTo(0, 0)` でもよさそうなのですが、段階的に移動する方がよさそうでした。理由としては次の2つがあります。

- 最上部に移動するイベントを起こした時に、スクロールダウンの操作が起こっているとぴったり最上部まで移動してくれない
- 使い手に段階的に移動していくアニメーションがある方が、「上に登っていってるんだな」というのが伝わってよさそう

そんな訳で、段階的に上げる方法を今回は採用しました。

## 最下部に移動する

まず、ページの最下部に移動するための座標を知る必要があるので、root element(= `<html>`要素)を取得して高さを計算します。計算は、[Element.scrollHeight - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)を使って、ページの一番下の座標から、[element.clientHeight - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Element/clientHeight)でページの表示できるページの高さを引いて求めます。そして、[window.scrollTo - Web API インターフェイス | MDN](https://developer.mozilla.org/ja/docs/Web/API/Window/scrollTo)を使って移動すれば完了です。

