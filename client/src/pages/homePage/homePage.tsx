import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "../homePage/homePage.css";

function homePage() {
  const [characterData, setCharacterData] = useState ([])
  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
    .then ((response) => response.json())
    .then((data)) => setCharacterData(data.items)
  }, [])
  return <CharacterCard />;
}
export default homePage;
