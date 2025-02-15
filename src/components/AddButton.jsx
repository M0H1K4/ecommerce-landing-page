import React from "react";
import blackButton from "../assets/black_cart.svg";

export default function AddButton() {
  return (
    <div className="button_div">
      <button className="Add_button">
        <img src={blackButton} alt="" />
        <h3 className="button_txt">Add to cart</h3>
      </button>
    </div>
  );
}
