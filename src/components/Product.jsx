import React from "react";
import { useState } from "react";
import Sneakers_1 from "../assets/sneakers_1.png";
import Sneakers_2 from "../assets/sneakers-2.png";
import Sneakers_3 from "../assets/sneakers-3.png";
import Sneakers_4 from "../assets/sneakers-4.png";
import left from "../assets/to_left.svg";
import right from "../assets/to_right.svg";

const images = [Sneakers_1, Sneakers_2, Sneakers_3, Sneakers_4];

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="product_container">
      <img className="sneakers_image" src={images[currentIndex]} alt="" />
      <div className="buttons_siv">
        <button className="move_buttons" onClick={prevSlide}>
          <img src={left} alt="" />
        </button>
        <button className="move_buttons" onClick={nextSlide}>
          <img src={right} alt="" />
        </button>
      </div>
    </div>
  );
}
