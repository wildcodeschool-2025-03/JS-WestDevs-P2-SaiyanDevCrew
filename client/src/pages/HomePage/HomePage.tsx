import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "../homePage/homePage.css";

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  race: string;
  gender: string;
  description: string;
  ki: string;
  maxKi: string;
  affiliation: string;
}

function HomePage() {
  const [characterData, setCharacterData] = useState<CharacterProps[]>([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => response.json())
      .then((data) => setCharacterData(data.items));
  }, []);
  return (
    <main className="home-page">
      {characterData.map((el) => (
        <CharacterCard
          key={el.id}
          id={el.id}
          image={el.image}
          name={el.name}
          race={el.race}
          gender={el.gender}
          description={el.description}
          ki={el.ki}
          maxKi={el.maxKi}
          affiliation={el.affiliation}
        />
      ))}
    </main>
  );
}

export default HomePage;
