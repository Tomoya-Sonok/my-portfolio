import React from 'react'

import worksStyles from '../styles/works.module.scss'

const worksPage = () => {
  return (
    <div name="works" className={worksStyles.content}>
      <h1 className={worksStyles.works}>Works</h1>
      <p>My works will show up here later on.</p>
      <div>
        <ul className={worksStyles.portfoliobox}>
          <li className={worksStyles.portfolio}>
            <img src="/300_180.jpg" alt="portfolio" />
            <p>使用言語: </p>
            <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          </li>
          <li className={worksStyles.portfolio}>
            <img src="/300_180.jpg" alt="portfolio" />
            <p>使用言語: </p>
            <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          </li>
          <li className={worksStyles.portfolio}>
            <img src="/300_180.jpg" alt="portfolio" />
            <p>使用言語: </p>
            <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default worksPage