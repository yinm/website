import React from "react";

import styles from "./styles.module.css";

export default () => (
  <article className={styles.section}>
    <h2 className={styles.title}>プライバシーポリシー</h2>
    <section>
      <h3 className={styles.subtitle}>アクセス解析ツールについて</h3>
      <p className={styles.description}>
        当ブログでは、Googleによるアクセス解析ツール
        <a
          href="https://marketingplatform.google.com/about/analytics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Analytics
        </a>
        を利用しています。Google
        Analyticsはトラフィックデータの収集のためにクッキー（Cookie）を使用します。トラフィックデータは匿名で収集されており、個人を特定するものではありません。ブラウザの設定などによりデータの収集を拒否することも可能です。
        <br />
        詳細は、
        <a
          href="https://policies.google.com/technologies/partner-sites?hl=ja"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google のサービスを使用するサイトやアプリから収集した情報の Google
          による使用 – ポリシーと規約 – Google
        </a>
        をご覧ください。
      </p>
    </section>

    <section>
      <h3 className={styles.subtitle}>免責事項</h3>
      <p className={styles.description}>
        当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
        <br />
        また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </p>
    </section>

    <section>
      <h3 className={styles.subtitle}>著作権について</h3>
      <p className={styles.description}>
        当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
        <br />
        当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、
        <span>
          yinm.cminor9▲gmail.com (※「▲」記号を「@」記号に置き換えて下さい。)
        </span>
        よりご連絡ください。迅速に対応いたします。
      </p>
    </section>
  </article>
);
