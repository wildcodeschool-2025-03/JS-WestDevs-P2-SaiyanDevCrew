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
      <button type="reset" className="character-card">
        <img src={image} alt={name} />
      </button>
    </div>
  );
}

export default CharacterCard;
