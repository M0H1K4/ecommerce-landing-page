import React from "react";
import Logo from "../assets/sneakers_logo.svg";
import cartImg from "../assets/cart-icon.svg";
import burgerMenuImg from '../assets/burger_menu_icon.svg'
import guyImg from "../assets/guy-img.png";

export default function Header() {
  return (
    <header>
      <section className="header_sections">
        <img src={burgerMenuImg} alt="" />
        <img className="logo" src={Logo} alt="" />
      </section>
      <section className="header_sections">
        <img  src={cartImg} alt="" />
        <img className="guy-img" src={guyImg} alt="" />
      </section>
    </header>
  );
}
