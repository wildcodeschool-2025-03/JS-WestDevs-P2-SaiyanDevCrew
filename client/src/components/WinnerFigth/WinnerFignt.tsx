import "./WinnerFigth.css";

interface WinProps {
  image: string;
  name: string;
  id: number;
}

function WinnerFight({ Winner }: { Winner: WinProps }) {
  return (
    <figure className="animated">
      <img src={Winner.image} alt={Winner.name} />
    </figure>
  );
}

export default WinnerFight;
