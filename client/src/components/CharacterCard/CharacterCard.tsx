import "../CharacterCard/CharacterCard.css";

interface CardProps {
  id: number;
  image: string;
  name: string;
  race: string;
  gender: string;
  description: string;
}

function CharacterCard({ image, name, race, gender, description }: CardProps) {
  return (
    <article className="character-card">
      <img src={image} alt="{name}" />
      <h2>
        {name} {race} {gender}
      </h2>
      <p>{description}</p>
    </article>
  );
}

export default CharacterCard;
