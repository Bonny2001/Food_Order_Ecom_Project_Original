import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Card from './components/Card'
import Home from './components/Home'
import ProductsCard from './components/ProductsCard'
import Register from './components/Register'
import { cartContext } from './components/cartContext'
function App() {
  // useContex 
  
  // States 
  const [showData , setShowData] = useState([]) 

  const [addCart , setAddCart] = useState([])

  return (
    <div>

      <cartContext.Provider value={{addCart , setAddCart}}>
      <BrowserRouter>
      <Navbar addCart={addCart}/>
      <Routes>
        <Route path='/' element={<Home showData={showData} setShowData={setShowData} />} />
        <Route path='/card' element={<Card />} />
        {/* <Route path='/navbar' element={<Navbar />} /> */}
        <Route path='/register' element={<Register />} />
        

        
        
      </Routes>
      </BrowserRouter>
      </cartContext.Provider>
    </div>
  )
}

export default App
