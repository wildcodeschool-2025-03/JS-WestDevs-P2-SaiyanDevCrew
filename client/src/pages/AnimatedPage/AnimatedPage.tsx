import "./AnimatedPage.css";

import { useState } from "react";

interface AnimeProps {
  id: number;
  image: string;
}

function AnimatedPage({ id, image, name }: AnimeProps) {
  const [winnersData] = useState<AnimeProps[]>([]);

  return (
    <main className="home-page">
      {winnersData.map((el) => (
        <AnimatedPage key={el.id} id={el.id} image={el.image} />
      ))}
    </main>
  );
}
export default AnimatedPage;
