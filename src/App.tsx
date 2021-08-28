import React from 'react'
import Header from './components/Header'
import './scss/app.scss'
import Home from './components/pages/Home'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App
