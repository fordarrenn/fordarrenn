import { useState } from 'react'
import './index.css'

// NAVBAR
import Navbar from './components/Navbar'

// PAGES
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return(
    <div className="
      bg-black
      text-white
      min-h-screen
    ">
      // TBA
      <Navbar />
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
