import React from 'react'

import contactStyles from '../styles/contact.module.scss'

const contactPage = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" className={contactStyles.content}>
      <input type="hidden" name="form-name" value="contact" />
      <h1 className={contactStyles.contact}>Contact</h1>
      <p>ご興味を持たれた企業様、お仕事をくださる方はお気軽に以下のフォームでお問い合わせください。</p>
      <p>TwitterでのDMでも構いません。<a href="https://twitter.com/@techguy10308" target="__blank">@techguy10308</a>までどうぞ。</p>
      <div className={contactStyles.form}>
        <div className={contactStyles.topForm}>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>name</div>
            <input type="text" name="name" placeholder="Yamada Taro" />
          </div>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>email</div>
            <input type="text" name="email" placeholder="example@gmail.com" />
          </div>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>phone</div>
            <input type="text" name="tel" placeholder="1234567890" />
          </div>
        </div>
        <div className={contactStyles.middleForm}>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>subject</div>
            <input type="text" name="subject" placeholder="subject" />
          </div>
        </div>
        <div className={contactStyles.bottomForm}>
          <div className={contactStyles.innerForm}>
            <div className={contactStyles.label}>your message</div>
            <textarea name="message" placeholder="your message" />
          </div>
        </div>
        <button type="submit" className={contactStyles.btn}>send form</button>
      </div>
    </form>
  )
}

export default contactPage