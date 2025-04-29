import WinnerFigth from "../../components/WinnerFigth/WinnerFignt";
import "./AnimatedPage.css";
import { useEffect, useState } from "react";
import animated from "../../data/animated.json";

function AnimatedPage() {
  const [randomWinner, setRandomWinner] = useState(animated.winners[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animated.winners.length);
    setRandomWinner(animated.winners[randomIndex]);
  }, []);

  return (
    <div className="fight-club">
      <WinnerFigth Winner={randomWinner} />
    </div>
  );
}

export default AnimatedPage;
