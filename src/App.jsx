import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'
import { db } from './firebase/config'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Navbar/>}/>
      </Routes>


    </Router>
    
  )
}

export default App