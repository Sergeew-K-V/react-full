import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Navbar } from './componets/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Routes>
          <Route path={'/'} exact element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
