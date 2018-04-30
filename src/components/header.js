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
        textShadow: 'none',
        backgroundImage: 'none',
        color: '#fff',
        textDecoration: 'none',
      }}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#000',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1
        style={{
          margin: 0,
          display: 'inline',
        }}
      >
        <Link
          to="/"
          style={{
            color: '#fff',
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
    </div>
  </div>
)

export default Header