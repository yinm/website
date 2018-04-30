import React from "react"

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650 }}>
    <header>
      <h1>楽しいだけで十分です</h1>
    </header>
    {children()}
  </div>