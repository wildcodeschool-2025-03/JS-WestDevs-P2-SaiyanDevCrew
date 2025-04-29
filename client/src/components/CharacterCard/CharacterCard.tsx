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
  setSelectCharacter: (character: string) => void;
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
  setSelectCharacter,
}: CardProps) {
  const isActive = activeId === id;
  const toggleCard = () => {
    setActiveId(isActive ? null : id);
  };

  const handleSelectCharacter = () => {
    const character = {
      id,
      image,
      name,
      race,
      gender,
      ki,
      maxKi,
      affiliation,
    };

    setSelectCharacter(character.image);
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
            <button
              type="button"
              className="select-button"
              onClick={(e) => {
                e.stopPropagation();
                handleSelectCharacter();
              }}
            >
              Select
            </button>
          </article>
        )}
      </button>
    </div>
  );
}

export default CharacterCard;
