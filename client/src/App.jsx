import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Result from './Pages/Result.jsx'
import BuyCredit from './Pages/BuyCredit.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>

      <ToastContainer  position='bottom-right'/>
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
