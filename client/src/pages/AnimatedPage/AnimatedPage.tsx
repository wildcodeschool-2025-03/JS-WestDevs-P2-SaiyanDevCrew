import WinnerFigth from "../../components/WinnerFigth/WinnerFignt";
import "./AnimatedPage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import animated from "../../data/animated.json";
import type { CharacterProps } from "../HomePage/HomePage";

type ImageProps = {
  image: string;
};

function AnimatedPage() {
  const location = useLocation();
  const winners = location.state?.winners || [];

  const [randomWinner, setRandomWinner] = useState<CharacterProps | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    const images = animated.winners as ImageProps[];

    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomImageIndex];
    setImage(randomImage.image);
  }, []);

  useEffect(() => {
    if (!image || winners.length === 0) return;

    const timeout = setTimeout(() => {
      const strongest = winners.reduce(
        (prev: CharacterProps, current: CharacterProps) => {
          return (current.maxKi || 0) > (prev.maxKi || 0) ? current : prev;
        },
      );
      setRandomWinner(strongest);
      setShowWinner(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [image, winners]);

  return (
    <div className="fight-club">
      {!showWinner && image && (
        <img src={image} alt="Combat en cours..." className="fight-animation" />
      )}
      {showWinner && randomWinner && <WinnerFigth Winner={randomWinner} />}
    </div>
  );
}

export default AnimatedPage;
