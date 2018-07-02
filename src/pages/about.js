import React from "react"
import Helmet from 'react-helmet'

import styles from '../templates/style.css'

export default ({ data }) =>
  <article className="article__section">
    <Helmet
      title={`About | ${data.site.siteMetadata.title}`}
    />
    <h1 className="article__title">
      About
    </h1>
    <p className="article__content">
      GMOペパボでWebエンジニアをしています。<br />
      UIを作ることに関心があります。
    </p>
  </article>

export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
