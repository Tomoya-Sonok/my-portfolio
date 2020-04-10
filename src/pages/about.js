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
          <h4>学習中: HTML/CSS, JavaScript, Ruby, Ruby on Rails, MySQL, React, Gatsby.js, GraphQL</h4>
          <p className={aboutStyles.paragraph}>
            広島県出身の駆け出しWebエンジニア。13歳からずっと英語オタクで、洋画や洋楽をこよなく愛する。
            大学3年次にロサンゼルスの日系コンサル企業にてインターンシップを経験し、ビジネスにも興味をもつ（主にマーケティング）。
            大好きな英語を使いながら0から1を創り出せるプログラミングに魅力を感じ、2020年1月からTECH::CAMPにて学習開始。
            スクールではサーバーサイドとしてRuby on Railsを用いた個人・チーム開発、独学では主にフロントサイドとしてReact/Gatsby.jsのようなモダンなJavaScriptライブラリを学習。
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutPage