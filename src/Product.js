import React from "react";
import { Link } from "react-router-dom";

function Product({ imgSrc, name, description, link, price, color = "black" }) {
  return (
    <figure className={color !== "black" ? `${color} product` : `product`}>
      <img src={imgSrc} alt={name} />
      <div className="price">{price}</div>
      <figcaption>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <Link to={link}>View Product</Link>
      </figcaption>
    </figure>
  );
}

export default Product;
