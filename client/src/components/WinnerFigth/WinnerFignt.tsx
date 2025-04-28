import "./WinnerFigth.css";

interface WinProps {
  image: string;
  name: string;
  id: number;
}

function WinnerFigth({ el }: { el: WinProps }) {
  return (
    <figure className="animated">
      <img src={el.image} alt={el.name} />
    </figure>
  );
}

export default WinnerFigth;
