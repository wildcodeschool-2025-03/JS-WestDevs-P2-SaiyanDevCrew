import WinnerFigth from "../../components/WinnerFigth/WinnerFignt";
import "./AnimatedPage.css";
import animated from "../../data/animated.json";
import { useState, useEffect } from "react";

function AnimatedPage() {
  const [randomWinner, setRandomWinner] = useState(animated.winners[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * animated.winners.length);
    setRandomWinner(animated.winners[randomIndex]);
  }, []);

  return (
    <main className="fight-club">
      <WinnerFigth el={randomWinner} />
    </main>
  );
}

export default AnimatedPage;
