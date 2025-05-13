import WinnerFigth from "../../components/WinnerFigth/WinnerFignt";
import "./AnimatedPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import animated from "../../data/animated.json";
import type { CharacterProps } from "../../types/CharacterProps";

function AnimatedPage() {
  const location = useLocation();
  const winners = location.state?.winners || [];

  const [randomWinners, setRandomWinners] = useState<CharacterProps[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [showWinners, setShowWinners] = useState(false);

  useEffect(() => {
    const images = animated.winners as CharacterProps[];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage.image);
  }, []);

  useEffect(() => {
    if (!image || winners.length < 4) return;

    const timeout = setTimeout(() => {
      const duo1 = winners.slice(0, 2);
      const duo2 = winners.slice(2, 4);

      const sumKi = (duo: CharacterProps[]) =>
        duo.reduce((total, char) => total + Number(char.maxKi || 0), 0);

      const totalKi1 = sumKi(duo1);
      const totalKi2 = sumKi(duo2);

      const winningDuo = totalKi1 >= totalKi2 ? duo1 : duo2;

      setRandomWinners(winningDuo);
      setShowWinners(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [image, winners]);

  return (
    <div className="fight-club">
      {!showWinners && image && (
        <img src={image} alt="Combat en cours..." className="fight-animation" />
      )}

      {showWinners && randomWinners.length && (
        <div className="winners-container">
          <h2>Winners !</h2>
          {randomWinners.map((winner) => (
            <WinnerFigth key={winners.id} Winner={winner} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimatedPage;
