import { useEffect, useState } from "react";
import "./Battlepage.css";
import Fighter from "../../components/Figther/Figther";

interface BattlepageData {
  id: number;
  name: string;
  image: string;
}

function Battlepage() {
  const [BattlepageData, setBattlepageData] = useState<BattlepageData[]>([]);

  /*useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setBattlepageData(data.items);
      });
  }, []);*/

  return (
    <>
      <main className="app">
        <div className="deck1">
          {BattlepageData.slice(0, 2).map((element) => {
            return (
              <Fighter
                key={element.id}
                name={element.name}
                image={element.image}
              />
            );
          })}
        </div>
        <button className="fight" type="button">
          fight
        </button>
        <div className="deck2">
          {BattlepageData.slice(3, 5).map((element) => {
            return (
              <Fighter
                key={element.id}
                name={element.name}
                image={element.image}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
export default Battlepage;
