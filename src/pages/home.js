import React from 'react'

import homeStyles from './home.module.scss'
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
        <img className={homeStyles.image} src='/top-page.jpg' />
      </div>
      <div className={homeStyles.message}>
        <h1>Stay aware of what you love,</h1>
        <h1>consistant and confident with yourself.</h1>
      </div>
      <a className={homeStyles.scroll}><span></span><span></span><span></span></a>
    </div>
  )
}

export default homePage