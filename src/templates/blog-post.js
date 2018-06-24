import React from 'react'

import styles from './style.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <article className="article__section">
      <h1 className="article__title">
        {post.frontmatter.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="article__content"
      />
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
