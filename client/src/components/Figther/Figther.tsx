import "./Figther.css";
interface BatllepageProps {
  image: string;
  name?: string;
  onClick: () => void;
}

function Fighter({ image, name, onClick }: BatllepageProps) {
  return (
    <button type="button" className="fighter-card" onClick={onClick}>
      <img src={image} alt={name} />
    </button>
  );
}
export default Fighter;
