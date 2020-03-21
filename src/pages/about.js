import React from 'react'

import aboutStyles from '../styles/about.module.scss'

const aboutPage = () => {
  return (
    <div name="about" className={aboutStyles.content}>
      <h1 className={aboutStyles.aboutme}>About Me</h1>
      <div className={aboutStyles.container}>
        <img className={aboutStyles.image} src='/about.jpg' alt='profile-img' />
        <div className={aboutStyles.description}>
          <h2>Tomoya Sonokui / Web Developer</h2>
          <p>
            学習中の言語/フレームワーク: Ruby, Ruby on Rails, MySQL, React, Gatsby.js, GraphQl<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutPage