import "./Figther.css";
import type { BattlepageProps } from "../../types/BattlepageProps";

function Fighter({ image, name, onClick }: BattlepageProps) {
  return (
    <button type="button" className="fighter-card" onClick={onClick}>
      <img src={image} alt={name} />
    </button>
  );
}
export default Fighter;
