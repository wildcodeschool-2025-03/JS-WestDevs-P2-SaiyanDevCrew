import WinnerFigth from "../../components/WinnerFigth/WinnerFignt";
import "./AnimatedPage.css";
import animated from "../../data/animated.json";

function AnimatedPage() {
  return (
    <main className="fight-club">
      {animated.winners.map((anime) => (
        <WinnerFigth key={anime.id} el={anime} />
      ))}
    </main>
  );
}

export default AnimatedPage;
