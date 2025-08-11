import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
