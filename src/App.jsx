import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Mid from './components/Post'

function App() {
  
  return (
    <>
      <div className="container-main">
        <Header />
      </div>
      <div className="container-mid">
        <Mid />
      </div>
    </>
  )
}

export default App
