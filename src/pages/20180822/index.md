---
title: OpenAPI Generatorのプロジェクト構成などのメモ
date: "2018-08-22"
---

[OpenAPI Generatorへのcontribute | 楽しいだけで十分です](https://yinm.info/20180810/)で書いていた、プロジェクト構成などのメモです。

---

## 開発準備
- JDK (Oracleのページなどでインストール。`java -version`で確認)
- maven (Homebrewなどでインストール。`mvn -v`で確認)
- セットアップ ( `mvn clean package -DskipTests=false` )

## openapi-generatorの構造
- コード生成の仕組み
  - OpenAPIの定義をコードに変換(Javaで実装されている)した結果を、mustacheのテンプレートエンジンにバインドする形になっている
  - 各言語のテンプレートは、 https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources

- [/samples/](https://github.com/OpenAPITools/openapi-generator/tree/master/samples)
  - 実際にOpenAPIの定義を使ってコード生成するとどうなるかのサンプルが置かれている
  - [/bin/](https://github.com/OpenAPITools/openapi-generator/tree/master/bin)のシェルスクリプトで生成できる
  - PRを出すときは、binのシェルスクリプトを使ってsampleを再生成して、意図した通りの変更になっているかを確認する

- OpenAPIの定義を使った生成ツールはCLI以外にも、ビルドツール経由などがある
  - コードは、 https://github.com/OpenAPITools/openapi-generator/tree/master/modules
  - 全ての生成ツールで使う、コアの機能を実装はこちら https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator
  - 他のディレクトリで、生成ツールごとの機能を実装している
