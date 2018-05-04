import React from 'react'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <article
      style={{
        marginBottom: '50px',
      }}
    >
      <h1
        style={{
          marginBottom: '50px',
        }}
      >
        {post.frontmatter.title}
        </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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