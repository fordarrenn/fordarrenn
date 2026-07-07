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
      <main className="
        pt-24
        px-6
      ">
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
