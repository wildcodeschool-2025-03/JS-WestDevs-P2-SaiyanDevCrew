import { useEffect, useState } from "react";
import CardMember from "../../components/CardMember/CardMember";
import "./CrewPage.css";

interface PropsMember {
  image: string;
  firstname: string;
  lastname: string;
  status: string;
  id: number;
  github: string;
}

function CrewPage() {
  const [member, setMember] = useState<PropsMember[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    fetch("./src/data/member.json")
      .then((response) => response.json())
      .then((data) => setMember(data.Members));
  }, []);

  return (
    <>
      <h2>Le Crew</h2>
      <main className="Crew">
        {member.map((el) => (
          <CardMember
            key={el.id}
            image={el.image}
            firstname={el.firstname}
            lastname={el.lastname}
            status={el.status}
            github={el.github}
            id={el.id}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </main>
    </>
  );
}

export default CrewPage;
