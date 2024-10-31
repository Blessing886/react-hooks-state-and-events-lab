import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, SetInCart] = useState(false);

  const handleCartToggle = () => {
    SetInCart((prevInCart) => !prevInCart);
  };

  const itemClass = inCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle} className="add">{inCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
