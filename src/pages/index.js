import React from "react";
import Link from "gatsby-link";

import styles from "./style.css";

export default ({ data }) => {
  return (
    <main>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section key={node.id} className="articles__container">
          <Link to={node.fields.slug}>
            <time className="articles__time">{node.frontmatter.date}</time>
            <h3 className="articles__title">{node.frontmatter.title}</h3>
            {/* <Tags tags={node.frontmatter.tags} /> */}
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
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

// function Tags({ tags }) {
//   if (!Array.isArray(tags)) {
//     return <div></div>;
//   }

//   return (
//     <ul>
//       {tags.map((tag, i) => (
//         <li key={i}>{tag}</li>
//       ))}
//     </ul>
//   );
// }
