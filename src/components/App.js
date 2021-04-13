import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const url = "http://localhost:6001/plants/"

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(plantArray => {
        setPlants(plantArray)
      })
  },[])

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleAddPlant={handleAddPlant}/>
    </div>
  );
}

export default App;
