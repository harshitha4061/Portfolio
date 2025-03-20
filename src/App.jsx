import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
       <Navbar />
       <Header />
       <About />
       <Skills />
       <Project />
       {/* <Contact /> */}
    </div>
  )
}

export default App

