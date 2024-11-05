import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate()
    const handleSubmit=()=>{
    navigate('/home')
    } 
  return (
    <div>
       <Button variant='text ' onClick={handleSubmit}>Buy Now</Button>
    </div>
  )
}

export default Cart
