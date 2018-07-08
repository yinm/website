import React from "react"
import Helmet from 'react-helmet'
import Txt from '../../components/atoms/Txt/index'

import styles from './styles.module.css'

export default ({ data }) =>
  <article className="article__section">
    <Helmet
      title={`About | ${data.site.siteMetadata.title}`}
    />
    <h1 className="article__title">
      About
    </h1>
    <Txt size="l" className="article__content">
      GMOペパボでWebエンジニアをしています。<br />
      UIを作ることに関心があります。
    </Txt>
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
