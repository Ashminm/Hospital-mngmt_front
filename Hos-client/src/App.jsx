import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <>
    <div >
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="*" element={<Landing/>} />
     </Routes>
     <Toaster/>
    </div>
    </>
  )
}

export default App
