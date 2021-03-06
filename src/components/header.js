import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.title}>
        <Link className={headerStyles.title} to='/'>
          Tomoya's Portfolio
        </Link>
      </div>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} to="#">Home</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} to="#about">About</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} to="#works">Works</Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header