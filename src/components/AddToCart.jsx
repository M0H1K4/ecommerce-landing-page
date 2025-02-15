import React from "react";
import { useState } from "react";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import Price from "./Price";

export default function AddToCart() {
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(125);
  const [discount, setDiscount] = useState(250);

  // if(number < 0){
  //   setDiscount(0)
  //   setPrice(0)
  // }

  const handleDiscount = () =>{
    // setDiscount(price);
    setDiscount(discount +  250)
    // console.log(setDiscount())
  }
  const handleDiscount2 = () =>{
    // setDiscount(price);
    setDiscount(discount -  250)
    // console.log(setDiscount())
  }

  const handleMultiple = () => {
    setPrice(price + 125);
  };
  const handleMultiple2 = () => {
    setPrice(price - 125);
  };

  
  return (
    <>
      <Price price={price} discount={discount} />
      <div className="addToCart_div">
        <button
          className="addToCart_img"
          onClick={() => {
            setNumber(number - 1);
            handleMultiple2()
            handleDiscount2()

          }}
        >
          <img className="plusButton_minus" src={minus} alt="" />
        </button>
        <h3>{number}</h3>
        <button
          className="addToCart_img"
          onClick={() => {
            setNumber(number + 1);
            handleDiscount();
            handleMultiple();
          }}
        >
          <img className="plusButton_minus" src={plus} alt="" />
        </button>
      </div>
    </>
  );
}
