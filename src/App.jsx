import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section4 from './components/Section4'

function App() {


  return (
    <>
        {/* NAVBAR */}
       <Navbar />

      <main>
        {/* SECTION 1: Hero */}
        <Section1 />

        {/* SECTION 2: Skills */}
       <Section2 />
       
        {/* SECTION 4: Contact */}
        <Section4 />

      </main>
    </>
  )
}

export default App
