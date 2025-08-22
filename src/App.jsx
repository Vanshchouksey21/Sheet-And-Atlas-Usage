import React from 'react'
import InsertData from './InsertData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Display from './Display'
import Update from './Update'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/insert' element={<InsertData/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/update' element={<Update/>}/>

      

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App