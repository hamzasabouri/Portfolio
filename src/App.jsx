import React, { useState, useEffect } from 'react';
import "./assets/css/tailwind.css"
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Contact from './components/Contact'
import AnimatedCircle from './components/AnimatedCircle';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div class="absolute inset-0">
      <AnimatedCircle />
      </div>
    );
  }
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


