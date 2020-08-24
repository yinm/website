import React from "react"
import Helmet from 'react-helmet'

import Header from '../components/header/index'
import Biography from "../components/Biography/biography"

import '../css/normalize.css';
import '../css/base.css'
import '../css/prism-solarizeddark.css'

export default ({ children, data }) => (
  <div className="container">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Frontend Engineerのyinmのブログです' },
        { name: 'keywords', content: 'blog' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Biography/>
    <p>
      このサイトではGoogle Analyticsを利用しています。詳細は、
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
  </div>
);

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
