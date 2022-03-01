import React from 'react'


import './App.css'
import { Navbar } from './components'
import { About, Blogs, Contact, Footer, Hero, Menu } from './containers'
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App