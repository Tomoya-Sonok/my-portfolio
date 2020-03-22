import React from 'react'

import homeStyles from '../styles/home.module.scss'
// import top_page from '../../src/images/top-page.jpg'

// const style = {
//   width: '80rem',
//   height: '64rem',
//   backgroundPosition: 'center',
// 	backgroundRepeat: 'no-repeat',
//   backgroundImage: `url(${top_page})`,
//   backgroundSize: 'cover'
// };

const homePage = () => {
  return (
    <div className={homeStyles.content}>
      <div className={homeStyles.imgbox}>
        <img className={homeStyles.image} src='/top-page8.jpg' alt='site-top-page' />
      </div>
      <div className={homeStyles.messagebox}>
        <div className={homeStyles.message}>Stay aware of what you love,</div>
        <div className={homeStyles.message}>consistant and confident with yourself.</div>
      </div>
      <a href="#about" className={homeStyles.scroll}><span></span><span></span><span></span></a>
    </div>
  )
}

export default homePage