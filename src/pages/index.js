import React from 'react'

import Layout from '../components/layout'
import Home from '../pages/home'
import About from '../pages/about'
import Works from '../pages/works'
import Contact from '../pages/contact'

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