---
title: zemirco/json2csvで、ヘッダーのカラム名を変更する方法
date: "2020-11-02"
---

[zemirco/json2csv: Convert json to csv with column titles](https://github.com/zemirco/json2csv)をヘッダーのカラム名を変更しようと思った時に、やり方を探すのに手間取ったのでメモです。

動作は、json2csvのversionは`5.0.3`で、JavaScript moduleとして利用して確認しました。

## やり方
オプションの`fields`で、`label`に指定したものがカラム名になります。ドキュメントだと、[example3](https://mircozeiss.com/json2csv/#example-3)が該当します。

README.mdには載っておらず、ドキュメントでも`header`などで検索しても見つからずに、手間取ってしまったのでした...。
