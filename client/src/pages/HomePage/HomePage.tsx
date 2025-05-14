import { useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./HomePage.css";
import { useNavigate } from "react-router";
import Fighter from "../../components/Figther/Figther";
import translationFR from "../../locales/FR/fr.json";

export interface CharacterProps {
  id: number;
  image: string;
  name: string;
  race: string;
  gender: string;
  ki: string;
  maxKi: string;
  affiliation: string;
}

function HomePage() {
  const [characterData] = useState<CharacterProps[]>(translationFR.items);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectCharacter, setSelectCharacter] = useState<
    (CharacterProps | null)[]
  >([null, null, null, null]);
  const navigate = useNavigate();

  const handleSelectCharacter = (character: CharacterProps) => {
    setSelectCharacter((prev) => {
      if (prev.some((c) => c !== null && c.id === character.id)) return prev;

      const emptyIndex = prev.findIndex((c) => c === null);
      if (emptyIndex === -1) return prev;

      const newSelection = [...prev];
      newSelection[emptyIndex] = character;
      return newSelection;
    });
  };

  const handleRemoveCharacter = (id: number | undefined) => {
    if (id === undefined) return;

    setSelectCharacter((prev) =>
      prev.map((char) => (char !== null && char.id === id ? null : char)),
    );
  };

  return (
    <main className="home-page">
      <article className="Deck">
        <Fighter
          image={selectCharacter[0]?.image}
          onClick={() => handleRemoveCharacter(selectCharacter[0]?.id)}
        />
        <Fighter
          image={selectCharacter[1]?.image}
          onClick={() => handleRemoveCharacter(selectCharacter[1]?.id)}
        />
        <div className="versus">
          <p>V.S.</p>
        </div>
        <div className="three">
          <button
            className="arene"
            type="button"
            disabled={selectCharacter.some((c) => c === null)}
            onClick={() => {
              navigate(
                `/battle-page/${selectCharacter[0]?.id}/${selectCharacter[1]?.id}/${selectCharacter[2]?.id}/${selectCharacter[3]?.id}`,
              );
            }}
          >
            Arene
          </button>
        </div>
        <Fighter
          image={selectCharacter[2]?.image}
          onClick={() => handleRemoveCharacter(selectCharacter[2]?.id)}
        />
        <Fighter
          image={selectCharacter[3]?.image}
          onClick={() => handleRemoveCharacter(selectCharacter[3]?.id)}
        />
      </article>

      {characterData.map((el) => (
        <CharacterCard
          key={el.id}
          id={el.id}
          image={el.image}
          name={el.name}
          race={el.race}
          gender={el.gender}
          ki={el.ki}
          maxKi={el.maxKi}
          affiliation={el.affiliation}
          activeId={activeId}
          setActiveId={setActiveId}
          handleSelectCharacter={() => handleSelectCharacter(el)}
        />
      ))}
    </main>
  );
}

export default HomePage;
