import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleAddPlant }) {
  const [filter, setFilter] = useState("")

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(filter.toLowerCase())
  })

  function handleFilterChange(input) {
    setFilter(input)
  }

  return (
    <main>
      <NewPlantForm onPlantAdd={handleAddPlant}/>
      <Search onSearchChange={handleFilterChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
