import React from "react";
import { useState } from "react";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";

export default function AddToCart() {
  const [number, setNumber] = useState(0);

  return (
    <div className="addToCart_div">
      <button className="addToCart_img" onClick={() => setNumber(number - 1)}>
        <img  src={minus} alt="" />
      </button>
      <h3>{number}</h3>
      <button className="addToCart_img" onClick={() => setNumber(number + 1)}>
        <img  src={plus} alt="" />
      </button>
    </div>
  );
}
