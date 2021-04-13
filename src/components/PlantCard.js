import React, { useState } from "react";

function PlantCard({ plant, onPlantDelete, onPlantUpdate }) {
  const { id, name, image, price } = plant
  const [inStock, setInStock] = useState(true)
  const [updatedPrice, setUpdatedPrice] = useState(plant.price)

  function handlePurchaseRequest() {
    setInStock(!inStock)
  }

  function handlePriceSubmit(event) {
    event.preventDefault()

    onPlantUpdate(id, updatedPrice)
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
      <button onClick={() => onPlantDelete(plant)}></button>
      <form onSubmit={handlePriceSubmit}>
        <input type="text" placeholder="New price..." value={price} onChange={e => setUpdatedPrice(e.target.value)}/>
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
