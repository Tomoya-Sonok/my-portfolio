import React from 'react'

import contactStyles from '../styles/contact.module.scss'

const contactPage = () => {
  return (
    <div name="contact" className={contactStyles.content}>
      <h1 className={contactStyles.contact}>Contact</h1>
      <p>The best way to reach me is via <a href="https://twitter.com/@techguy10308" target="__blank">@techguy10308</a> on Twitter</p>
    </div>

  )
}

export default contactPage