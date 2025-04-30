import "./Figther.css";
interface BatllepageProps {
  image: string;
  name?: string;
}

function Fighter({ image, name }: BatllepageProps) {
  return (
    <figure className="fighter-card">
      <img src={image} alt={name} />
    </figure>
  );
}
export default Fighter;
