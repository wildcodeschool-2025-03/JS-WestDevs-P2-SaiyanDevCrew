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
  description,
  ki,
  maxKi,
  affiliation,
}: CardProps) {
  return (
    <div className="character">
      <article className="character-card">
        <img src={image} alt={name} />
      </article>
      <article className="character-data">
        <h2>{name}</h2>
        <p>
          {race} {gender}
        </p>
        <p> Base Ki: {ki}</p>
        <p>Max Ki: {maxKi}</p>
        <p>{affiliation}</p>
        <a href="/">Select</a>
      </article>
    </div>
  );
}

export default CharacterCard;
