import React from 'react'

import contactStyles from '../styles/contact.module.scss'

const contactPage = () => {
  return (
    <div name="contact" className={contactStyles.content}>
      <h1 className={contactStyles.contact}>Contact</h1>
      <p>The best way to reach me is via <a href="https://twitter.com/@techguy10308" target="__blank">@techguy10308</a> on Twitter</p>
      <div className={contactStyles.form}>
        <div className={contactStyles.topForm}>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>name</div>
            <input type="text" placeholder="Yamada Taro" />
          </div>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>email</div>
            <input type="text" placeholder="example@gmail.com" />
          </div>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>phone</div>
            <input type="text" placeholder="1234567890" />
          </div>
        </div>
        <div className={contactStyles.middleForm}>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>subject</div>
            <input type="text" placeholder="subject" />
          </div>
        </div>
        <div className={contactStyles.bottomForm}>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>your message</div>
            <textarea placeholder="your message"></textarea>
          </div>
        </div>
        <div className={contactStyles.btn}>send form</div>
      </div>
    </div>
  )
}

export default contactPage