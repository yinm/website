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
        { name: 'description', content: 'Webエンジニアのyinmのブログです' },
        { name: 'keywords', content: 'blog' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Biography/>
  </div>
)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
