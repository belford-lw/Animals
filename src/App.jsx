import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Navbar from './components/ResponsiveAppBar'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App