import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../components/home'



export default function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  )
}