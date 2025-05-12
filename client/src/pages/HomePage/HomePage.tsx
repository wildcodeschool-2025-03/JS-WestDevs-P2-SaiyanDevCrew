import { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./HomePage.css";
import translationFR from "../../locales/FR/fr.json";

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
  const [characterData] = useState<CharacterProps[]>(translationFR.items);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectCharacter, setSelectCharacter] = useState<string>("");
  console.warn(selectCharacter);
  
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
          activeId={activeId}
          setActiveId={setActiveId}
          setSelectCharacter={setSelectCharacter}
        />
      ))}
    </main>
  );
}

export default HomePage;
