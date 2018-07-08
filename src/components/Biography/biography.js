import React from 'react'
import Txt from '../atoms/Txt/index'

import styles from './style.css'

import profilePicture from './profile-picture.jpg'

class Biography extends React.Component {
  render() {
    return (
      <section className="biography__container">
        <img
          src={profilePicture}
          alt={`yinm`}
          className="biography__image"
        />
        <div className="biography__text">
          <Txt>WRITTEN BY <strong>yinm</strong></Txt>
          <Txt>I'm a software engineer.</Txt>
          {/* TODO: Use icon fonts */}
          <ul className="biography__links">
            <li>
              <a href="https://github.com/yinm">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Biography
