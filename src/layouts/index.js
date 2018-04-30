import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ textShadow: `none`, backgroundImage: `none` }}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: `650px` }}>
    <header>
      <Link to="/">
        <h1 style={{ display: `inline` }}>楽しいだけで十分です</h1>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </header>
    {children()}
  </div>