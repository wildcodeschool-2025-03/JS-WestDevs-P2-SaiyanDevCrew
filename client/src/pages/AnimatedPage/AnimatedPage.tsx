import WinnerFigth from "../../components/WinnerFigth/WinnerFignt";
import "./AnimatedPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import animated from "../../data/animated.json";
import type { CharacterProps } from "../HomePage/HomePage";

function AnimatedPage() {
  const location = useLocation();
  const winners = location.state?.winners || [];

  const [randomWinner, setRandomWinner] = useState<CharacterProps | null>(null);
  const [animation, setAnimation] = useState<string | null>(null);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    // Animation aléatoire
    const randomAnimationIndex = Math.floor(
      Math.random() * animated.winners.length,
    );
    const randomAnimation = animated.winners[randomAnimationIndex];
    setAnimation(randomAnimation.image); // le gif

    // Après 8 secondes → tirage gagnant
    const timeout = setTimeout(() => {
      if (winners.length > 0) {
        const randomIndex = Math.floor(Math.random() * winners.length);
        setRandomWinner(winners[randomIndex]);
        setShowWinner(true);
      }
    }, 8000);

    // Nettoyage après l'animation
    return () => clearTimeout(timeout);
  }, [winners]);

  return (
    <div className="fight-club">
      {!showWinner && animation && (
        <img
          src={animation}
          alt="Combat en cours..."
          className="fight-animation"
        />
      )}
      {showWinner && randomWinner && <WinnerFigth Winner={randomWinner} />}
    </div>
  );
}

export default AnimatedPage;
