import "./Battlepage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Fighter from "../../components/Figther/Figther";
import type { CharacterProps } from "../HomePage/HomePage";

function Battlepage() {
  const params = useParams();
  const [characters, setCharacters] = useState<[] | CharacterProps[]>([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const characterApi = data.items;
        const battleCharactersId = Object.values(params);
        const battleCharacters = characterApi.filter((char: CharacterProps) =>
          battleCharactersId.includes(String(char.id)),
        );
        setCharacters(battleCharacters);
      });
  }, [params]);

  return (
    <>
      <main className="app">
        <div className="deck1">
          <Fighter image={characters[0]?.image} />
          <Fighter image={characters[1]?.image} />
        </div>
        <button className="fight" type="button">
          fight
        </button>
        <div className="deck2">
          <Fighter image={characters[2]?.image} />
          <Fighter image={characters[3]?.image} />
        </div>
      </main>
    </>
  );
}
export default Battlepage;
