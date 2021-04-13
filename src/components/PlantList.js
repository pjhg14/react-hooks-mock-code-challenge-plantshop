import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDeletePlant, handlePricePatch }) {
  const plantCards = plants.map(plant => {
    return(
      <PlantCard key={plant.id} plant={plant} onPlantDelete={handleDeletePlant} onPlantUpdate={handlePricePatch}/>
    )
  })

  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
