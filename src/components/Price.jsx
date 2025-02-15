import React from "react";
import { useState } from "react";
import AddToCart from "./AddToCart";

export default function Price({price, discount}) {

  return (
    <>
      <section className="price_section">
        <div className="price_section_div">
          <h1 className="price_h1">${price}</h1>
          <h2 className="price_h2">50%</h2>
        </div>
        <h3 className="price_h3">${discount}</h3>
      </section>
    </>
  );
}
