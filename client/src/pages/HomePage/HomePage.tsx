import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./HomePage.css";
import Fighter from "../../components/Figther/Figther";

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
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectCharacter, setSelectCharacter] = useState<CharacterProps[]>([]);
  console.warn(selectCharacter);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => response.json())
      .then((data) => setCharacterData(data.items));
  }, []);

  const handleSelectCharacter = (character: CharacterProps) => {
    setSelectCharacter((prev) => {
      return [...prev, character];
    });
  };
  return (
    <main className="home-page">
      <article className="Deck">
        <Fighter image={selectCharacter[0]?.image} />
        <Fighter image={selectCharacter[1]?.image} />
        <button className="arene" type="button">
          Arene
        </button>
        <Fighter image={selectCharacter[2]?.image} />
        <Fighter image={selectCharacter[3]?.image} />
      </article>
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
          setSelectCharacter={() => handleSelectCharacter(el)}
        />
      ))}
    </main>
  );
}

export default HomePage;
