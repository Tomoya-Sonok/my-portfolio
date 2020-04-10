import React from 'react'

import worksStyles from '../styles/works.module.scss'

const worksPage = () => {
  return (
    <div name="works" className={worksStyles.content}>
      <h1 className={worksStyles.works}>Works</h1>
      <p>これまでに開発してきた制作物です。</p>
      <div>
        <ul className={worksStyles.portfoliobox}>
          <li className={worksStyles.portfolio}>
            <h3>OOTD</h3>
            <a href="https://www.ootd.me/" target="__blank">
              <img className={worksStyles.portfolioImg} src="/ootd-toppage.jpg" alt="portfolio" />
            </a>
            <p className={worksStyles.devEnvHeader}>開発環境:</p>
            <p className={worksStyles.devEnv}>Ruby / Rails / MySQL / jQuery / Bootstrap / AWS / Nginx / Unicorn</p>
            <p>撮影したコーディネートを視覚的に整理・分類することで、服選びをより簡単にしてくれるアプリです。</p>
          </li>
          <li className={worksStyles.portfolio}>
            <h3>My Portfolio</h3>
            <a href="https://my-portfolio-en.netlify.com" target="__blank">
              <img className={worksStyles.portfolioImg} src="/cara-portfolio.jpg" alt="portfolio" />
            </a>
            <p className={worksStyles.devEnvHeader}>開発環境: </p>
            <p className={worksStyles.devEnv}>React / Node.js / Gatsby.js / Netlify</p>
            <p>Gatsbyのスターターを利用して作成した英語のポートフォリオです。</p>
          </li>
          <li className={worksStyles.portfolio}>
            <h3>Furima App</h3>
            <a href="http://18.178.222.209/" target="__blank">
              <img className={worksStyles.portfolioImg} src="/furima.jpg" alt="portfolio" />
            </a>
            <p className={worksStyles.devEnvHeader}>開発環境:</p>
            <p className={worksStyles.devEnv}>Ruby / Rails / MySQL / jQuery / Bootstrap / AWS / Nginx / Unicorn</p>
            <p>TECH::CAMPの最終課題として、5人チームで開発した某フリマサイトのクローンアプリです。（Basic認証付きなので、一般の方は見ることができません）</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default worksPage