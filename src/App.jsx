import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Txts from "./components/Txts";
import Price from "./components/Price";
import AddToCart from "./components/AddToCart";
import AddButton from "./components/AddButton";
import HeaderD from "./components/desktop/HeaderD";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Product />
        <Txts />
        {/* <Price/> */}
        <AddToCart />
        <AddButton />
      </div>
      <div className="main-container-desktop">
        <HeaderD />
      </div>
    </>
  );
}

export default App;
