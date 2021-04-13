import React, { useState } from "react";

function NewPlantForm({ onPlantAdd }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (name !== "" || price !== "") {    //Plant needs name and price to be added
      const newPlant = {
        name: name,
        image: image,
        price: parseFloat(price)
      }

      onPlantAdd(newPlant)

      setName("")
      setImage("")
      setPrice("")
    }
    // Preferably show error text or sometin'
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={e => {setName(e.target.value)}}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => {setImage(e.target.value)}}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={e => {setPrice(e.target.value)}}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
