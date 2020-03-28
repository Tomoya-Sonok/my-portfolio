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
            <h3>OOTD</h3>
            <a href="http://18.178.222.209:10308/" target="__blank">
              <img src="/ootd-toppage.jpg" alt="portfolio" />
            </a>
            <p>開発ツール: Ruby on Rails/jQuery/..</p>
            <p>撮影したコーディネートを視覚的に整理・分類することで、服選びをより簡単にしてくれるアプリです。</p>
          </li>
          <li className={worksStyles.portfolio}>
            <h3>（作品名）</h3>
            <img src="/300_180.jpg" alt="portfolio" />
            <p>使用言語: </p>
            <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
          </li>
          <li className={worksStyles.portfolio}>
            <h3>（作品名）</h3>
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