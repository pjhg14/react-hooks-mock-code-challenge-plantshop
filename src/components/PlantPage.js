import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const url = "http://localhost:6001/plants/"

function PlantPage() {
  //Create state for listing plants
  const [plants, setPlants] = useState([])
  //Create state for filtering plants
  const [filter, setFilter] = useState("")

  //Query server and set plant list to queried items
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(plantArray => {
        setPlants(plantArray)
      })
  },[])

  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(filter.toLowerCase())
  })

  //When prompted(executed in NewPlantForm) add new plant to server, on success add new plant to list
  function handleAddPlant(newPlant) {
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(resp => resp.json())
      .then(postedPlant => {
        setPlants([...plants, postedPlant])
      })
    
  }

  //When prompted(executed in Search) filter current list with matching plants
  function handleFilterChange(input) {
    setFilter(input)
  }

  return (
    <main>
      <NewPlantForm onPlantAdd={handleAddPlant}/>
      <Search filter={filter} onSearchChange={handleFilterChange}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
