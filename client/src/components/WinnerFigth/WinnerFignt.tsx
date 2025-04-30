import "./WinnerFigth.css";

interface WinProps {
  image: string;
  name: string;
  id: number;
}

function WinnerFigth({ Winner }: { Winner: WinProps }) {
  return (
    <figure className="animated">
      <img src={Winner.image} alt={Winner.name} />
    </figure>
  );
}

export default WinnerFigth;
