import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "../homePage/homePage.css";
import { data } from "react-router";

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  race: string;
  gender: string;
  description: string;
}

function HomePage() {
  const [characterData, setCharacterData] = useState<CharacterProps[]>([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacterData(data.items));
  }, []);
  return (
    <main className="homepage">
      {characterData.map((el) => (
        <CharacterCard
          key={el.id}
          id={el.id}
          image={el.image}
          name={el.name}
          race={el.race}
          gender={el.gender}
          description={el.description}
        />
      ))}
    </main>
  );
}

export default HomePage;
