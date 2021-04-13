import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant
  const [inStock, setInStock] = useState(true)

  function handlePurchaseRequest() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => handlePurchaseRequest()}>In Stock</button>
      ) : (
        <button onClick={() => handlePurchaseRequest()}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
