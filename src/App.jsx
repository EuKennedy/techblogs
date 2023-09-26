import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Posts from './components/Post'


function App() {
  
  return (
    <>
      <div className="container-main">
        <Header />
      </div>
      <div className="container-mid">
        <Posts />
      </div>
      <div className="container-footer">

      </div>
    </>
  )
}

export default App
