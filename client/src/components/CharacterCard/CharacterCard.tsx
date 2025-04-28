import "../CharacterCard/CharacterCard.css";

interface CardProps {
  id: number;
  image: string;
  name: string;
  race: string;
  gender: string;
  description: string;
  ki: string;
  maxKi: string;
  affiliation: string;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
  setSelectCharacter: () => ;
}

function CharacterCard({
  image,
  id,
  name,
  race,
  gender,
  ki,
  maxKi,
  affiliation,
  activeId,
  setActiveId,
}: CardProps) {
  const isActive = activeId === id;
  const toggleCard = () => {
    setActiveId(isActive ? null : id);
  };
  
  const selected = () => {
    setSelectCharacter()
  };
  return (
    <div className="character">
      <button
        type="button"
        className={`character-card ${isActive ? "active" : ""}`}
        onClick={toggleCard}
      >
        <img src={image} alt={name} />
        {isActive && (
          <article className="character-data">
            <h2>{name}</h2>
            <p>
              {race} {gender}
            </p>
            <p>
              Base ki <br />
              {ki} <br />
              Maxi Ki <br /> {maxKi}
            </p>
            <p>
              Affiliation <br />
              {affiliation}
            </p>
            <button type="button" className="select-button" onClick={selected}>
              Select
            </button>
          </article>
        )}
      </button>
    </div>
  );
}

export default CharacterCard;
