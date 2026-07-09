import { useState } from 'react'
import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom'

// NAVBAR AND FOOTER
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// PAGES
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

// SCROLL TO TOP
import ScrollToTop from './components/Scrolltotop'

function App() {
  const location = useLocation()

  return(
    <div 
      className="
        bg-black
        text-white
        min-h-screen
    ">
      <ScrollToTop />
      <NavBar />
      <main
        key={location.pathname}
        className="
          grow
          animate-fade-in
        ">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
