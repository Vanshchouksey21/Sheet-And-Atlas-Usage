import React from 'react'
import InsertData from './InsertData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Display from './Display'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/insert' element={<InsertData/>}/>
      <Route path='/display' element={<Display/>}/>

      

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App