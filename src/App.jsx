import { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'

// NAVBAR
import NavBar from './components/NavBar'

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
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
