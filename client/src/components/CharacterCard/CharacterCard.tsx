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
}

function CharacterCard({
  image,
  name,
  race,
  gender,
  ki,
  maxKi,
  affiliation,
}: CardProps) {
  return (
    <div className="character">
      <button type="button" className="character-card">
        <img src={image} alt={name} />
        <article>
          <h2>{name}</h2>
          <p>
            {race} {gender}
          </p>
          <p>
            Base ki <br />
            {ki}
          </p>
          <p>
            Maxi Ki <br /> {maxKi}
          </p>
          <p>{affiliation}</p>
          <button type="button" className="selct-button">
            Select
          </button>
        </article>
      </button>
    </div>
  );
}

export default CharacterCard;
