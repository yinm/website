import React from "react";
import Link from "gatsby-link";

import "./style.css";

const ListLink = (props) => (
  <li>
    <Link to={props.to} className="header__link">
      {props.children}
    </Link>
  </li>
);

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="header__title">
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <nav className="header__nav">
      <ul>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/privacy-policy/">Privacy Policy</ListLink>
        <ListLink to="/rss.xml">RSS</ListLink>
      </ul>
    </nav>
  </header>
);

export default Header;
