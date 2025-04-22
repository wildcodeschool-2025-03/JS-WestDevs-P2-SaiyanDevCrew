import { useEffect, useState } from "react";
import "./App.css";
import Battlepage from "./pages/Battlepage/Battlepage";

const arrayOfDragonball= [
  {
  name: "Goku",
  image: "https://dragonball-api.com/characters/goku_normal.webp"
  },
  {
   name: "Vegeta",
   image: "https://dragonball-api.com/characters/vegeta_normal.webp"
  },
  {
    name: "Celula",
    image: "https://dragonball-api.com/characters/celula.webp"
  },
  {
    name: "Freezer",
    image:  "https://dragonball-api.com/characters/Freezer.webp"
  },
]

interface BattleData

function App() {
const [DragonballData, setDragonballData] = useState ([]);

useEffect (()=> {
fetch("https://dragonball-api.com/api/characters")
.then ((response) => response.json())
.then ((data) => setDragonballData (data.results))
}, []);

  return ( 
  <>
  <main className="app">
    {arrayOfDragonball.map((element) => {
      return (
        <Battlepage 
         key={element.id} 
         name= {element.name} 
         image={element.image} 
         />
      )
      })}
  </main>
  </>
  );
}

export default App;
