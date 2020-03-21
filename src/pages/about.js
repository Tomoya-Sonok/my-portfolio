import React from 'react'

import aboutStyles from '../pages/about.module.scss'

const aboutPage = () => {
  return (
    <div name="about" className={aboutStyles.content}>
      <h1 className={aboutStyles.aboutme}>About Me</h1>
      <p>I currently study and practice Gatsby.js</p>
    </div>
  )
}

export default aboutPage