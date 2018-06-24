import React from 'react'

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
          <p>WRITTEN BY <strong>yinm</strong></p>
          <p>I'm a software engineer.</p>
        </div>
      </section>
    )
  }
}

export default Biography
