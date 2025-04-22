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
      <img src={image} alt={name} />
    </article>
  );
}

export default CharacterCard;
