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
    <>
      <Navbar />
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Hello!</h1>
        <p>This is a test!</p>
      </div>
    </>
  )
}

export default App
