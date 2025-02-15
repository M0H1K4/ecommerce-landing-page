import React from "react";
import { useState } from "react";
import Logo from "../assets/sneakers_logo.svg";
import cartImg from "../assets/cart-icon.svg";
import burgerMenuImg from "../assets/burger_menu_icon.svg";
import guyImg from "../assets/guy-img.png";
import closeButton from "../assets/close-iocon.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header>
      <section className="header_sections">
        {isOpen ? (
          <img onClick={() => setIsOpen(false)} src={burgerMenuImg} alt="" />
        ) : (
          <div className="burgerMenu">
            <div>
              <img onClick={() => setIsOpen(true)} src={closeButton} alt="" />
            </div>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

        {/* <img src={closeButton} alt="" /> */}
        <img className="logo" src={Logo} alt="" />
      </section>
      <section className="header_sections">
        <img src={cartImg} alt="" />
        <img className="guy-img" src={guyImg} alt="" />
      </section>
    </header>
  );
}

function SideBarComponent() {
  return (
    <>
      <div className="burgerMenu">
        <div>
          <img onClick={() => setIsOpen(true)} src={closeButton} alt="" />
        </div>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
