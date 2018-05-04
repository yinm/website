import React from "react"
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          style={{
            margin: '50px 0',
          }}
        >
          <Link
            to={node.fields.slug}
            css={{ textDecoration: 'none', color: 'inherit' }}
          >
            <time>{node.frontmatter.date}</time>
            <h3
              style={{
                fontSize: '1.5rem',
                margin: '10px 0',
              }}
            >
              {node.frontmatter.title}
            </h3>
            <p
              style={{
                margin: '10px 0',
              }}
            >
            </p>
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
