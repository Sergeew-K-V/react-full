import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Navbar } from './componets/Navbar'
import { Alert } from './componets/Alert'
import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className='container pt-4'>
            <Alert />
            <Routes>
              <Route path={'/'} exact element={<Home />}></Route>
              <Route path={'/about'} element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  )
}

export default App
