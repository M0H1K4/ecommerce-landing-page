import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'
import Txts from './components/Txts'
import Price from './components/Price'
import AddToCart from './components/AddToCart'
import AddButton from './components/AddButton'

function App() {


  return (
    <>
      <Header/>
      <Product/>
      <Txts/>
      {/* <Price/> */}
      <AddToCart/>
      <AddButton/>
    </>
  )
}

export default App
