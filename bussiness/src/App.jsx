import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './components/Registration'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       
      <h1> WELCOME TO OUR PRODUCTS...... </h1>
      
      <Routes>
        
        <Route path='/lg' element={<Login />} />
        <Route path='/rg' element={<Registration />} />
        <Route path='/home'element={<Home />} />
        <Route path='/cart'element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
