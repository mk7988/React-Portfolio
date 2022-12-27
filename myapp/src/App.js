import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Home } from './components/Home';
import './components/App.css'

const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navbar/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App