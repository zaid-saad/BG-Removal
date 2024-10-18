import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Result from './Pages/Result.jsx'
import BuyCredit from './Pages/BuyCredit.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/result' element={<Result />}></Route>
        <Route path='/buy' element={<BuyCredit />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
