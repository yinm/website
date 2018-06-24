import React from "react"
import Link from 'gatsby-link'

import styles from './style.css'

export default ({ data }) => {
  return (
    <main>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section
          key={node.id}
          className="articles__container"
        >
          <Link to={node.fields.slug}>
            <time className="articles__time">{node.frontmatter.date}</time>
            <h3 className="articles__title">
              {node.frontmatter.title}
            </h3>
          </Link>
        </section>
      ))}
    </main>
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
