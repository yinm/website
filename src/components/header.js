import React from 'react'
import Link from 'gatsby-link'

const ListLink = props => (
  <li
    style={{
      display: 'inline-block',
      marginRight: '1rem'
    }}
  >
    <Link
      to={props.to}
      style={{
      }}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <ul
      style={{
        listStyle: 'none',
        float: 'right',
      }}
    >
      <ListLink to="/about/">About</ListLink>
    </ul>
  </header>
)

export default Header
