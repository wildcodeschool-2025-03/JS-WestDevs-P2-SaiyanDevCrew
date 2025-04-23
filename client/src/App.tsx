import { useEffect, useState } from "react";
import "./App.css";
import Battlepage from "./pages/Battlepage/Battlepage";
import React from "react";
import { Outlet } from "react-router";

interface BattlepageData {
  id: number;
  name: string;
  image: string;
}

function App() {
const [BattlepageData, setBattlepageData] = useState<BattlepageData[][]>([]);

function getPair(items:BattlepageData[]) {
  const characters= [];
  for (let i=0; i <items.length; i++) {
  const pair= [];
  pair.push (items[i])
  pair.push (items[i+1])
  characters.push(pair)
  i++
  }
  return characters
} 

useEffect (()=> {
fetch("https://dragonball-api.com/api/characters")
.then ((response) => response.json())
.then ((data) => {
const characters= data.items.slice (0,4) 
console.log (characters);
const pair= getPair (characters);
setBattlepageData(pair)
})
}, []);

  return ( 
  <>
  <main className="app">
    {BattlepageData.map((element) => {

     return   (
      <React.Fragment key={element[0].id}>
      <Battlepage 
         
         name= {element[0].name} 
         image={element[0].image} 
         />
         <Battlepage 
       
         name= {element[1].name} 
         image={element[1].image} 

         />
         <button type="button">Fight</button>
      </React.Fragment>
     )
    
      })}
  </main>
  <Outlet/>
  </>
  );
}

export default App;

