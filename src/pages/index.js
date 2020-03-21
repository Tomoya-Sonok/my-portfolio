import React from 'react'

import Layout from '../layout/layout'
import Home from './home'
import About from './about'
import Works from './works'
import Contact from './contact'

const indexPage = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Works />
      <Contact />
    </Layout>
  )
}

export default indexPage