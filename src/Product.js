import React from "react";

function Product({ imgSrc, name, description, link, price, color = "black" }) {
  return (
    <figure className={color !== "black" ? `${color} product` : `product`}>
      <img src={imgSrc} alt={name} />
      <div className="price">{price}</div>
      <figcaption>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <a href={link}>View Product</a>
      </figcaption>
    </figure>
  );
}

export default Product;
