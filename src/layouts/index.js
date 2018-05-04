import React from "react"
import Helmet from 'react-helmet'

import Header from '../components/header'
import Biography from "../components/biography"

import 'normalize.css';

export default ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'programming blog' },
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
