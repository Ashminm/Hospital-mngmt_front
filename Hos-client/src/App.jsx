import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <div className="">
     <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="*" element={<Landing/>} />
     </Routes>
    </div>
    </>
  )
}

export default App
