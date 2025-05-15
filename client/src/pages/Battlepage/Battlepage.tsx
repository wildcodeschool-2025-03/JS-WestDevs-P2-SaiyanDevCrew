import "./Battlepage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Fighter from "../../components/Figther/Figther";
import type { CharacterProps } from "../HomePage/HomePage";

function Battlepage() {
  const params = useParams();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<[] | CharacterProps[]>([]);
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const characterApi = data.items;
        const battleCharactersId = Object.values(params);
        const battleCharacters = battleCharactersId
          .map((id) =>
            characterApi.find((char: CharacterProps) => String(char.id) === id),
          )
          .filter((char): char is CharacterProps => char !== undefined);
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
        <button
          className="fight"
          type="button"
          onClick={() => {
            navigate("/animation", { state: { winners: characters } });
          }}
        >
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
