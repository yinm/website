import React from "react"
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3>{node.frontmatter.title}</h3>
            <time>{node.frontmatter.date}</time>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
