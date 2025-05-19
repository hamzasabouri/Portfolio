import { useState } from 'react'
import "./assets/css/tailwind.css"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Contact from './components/Contact'




function App() {
  return (
    <>
  <div class="absolute inset-0">
    <div >

 
    <Navbar />
    <Home />
    <About />
    <Technologies />
    <Project />
    <Contact />
    </div>
    </div>
  </>
  )
}

export default App
