import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar.js'
import { About } from './Components/About.js'
import { Front } from './Components/Front.js'

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about"  element={<About/>} />
          <Route path="/"  element={<Front/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App