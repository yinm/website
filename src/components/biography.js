import React from 'react'

import profilePicture from './profile-picture.jpg'

class Biography extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: '50px 0'
        }}
      >
        <img
          src={profilePicture}
          alt={`yinm`}
          style={{
            float: 'left',
            width: '100px',
            height: '100px',
          }}
        />
        <div
          style={{
            float: 'left',
            marginLeft: '20px',
          }}
        >
          <span>CREATED BY</span>
          <h3
            style={{
              margin: '5px 0'
            }}
          >
            yinm
          </h3>
          <span>I'm a software engineer.</span>
        </div>
      </div>
    )
  }
}

export default Biography