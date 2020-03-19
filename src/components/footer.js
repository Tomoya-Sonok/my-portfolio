import React from 'react'
import footerStyles from '../components/footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.content}>
        Created by Tomoya Sonokui, 
        <span 
          role = "img"
          aria-label = "emoji">
          ©️
        </span>
        2020
      </p>
    </footer>
  )
}

export default Footer