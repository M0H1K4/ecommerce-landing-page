import React from "react";
import iconIus from "../../assets/sneakers_logo.svg";
import cartIcon from "../../assets/black_cart.svg";
import guyIcon from "../../assets/guy-img.png";

export default function HeaderD() {
  return (
    <div className="header2">
        <div className="header2_div_1">
          <img src={iconIus} alt="" />
          <ul className="header2_ul">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="header2_div_2">
          <img src={cartIcon} alt="" className="cartImage" />
          <img  src={guyIcon} alt="" className="guyImage" />
        </div>
    </div>
  );
}
