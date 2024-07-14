import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login.jsx'
import Footer from './components/footer.jsx'
import Top from './components/top.jsx'

function App() {
  return (
    <>
      <Top />
      <div>
        <Login />
      </div>
      <Footer />
    </>
  )
}

export default App
