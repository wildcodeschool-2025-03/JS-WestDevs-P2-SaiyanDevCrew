// Component CardMember.tsx
import "./CardMember.css";

interface PropsMember {
  image: string;
  firstname: string;
  lastname: string;
  status: string;
  github: string;
  id: number;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

function CardMember({
  image,
  firstname,
  lastname,
  status,
  github,
  id,
  activeId,
  setActiveId,
}: PropsMember) {
  const isActive = activeId === id;

  const toggleCard = () => {
    setActiveId(isActive ? null : id);
  };

  return (
    <div
      className={`cardMember ${isActive ? "active" : ""}`}
      onClick={toggleCard}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); // éviter le scroll avec Espace
          toggleCard();
        }
      }}
    >
      <img src={image} alt={`${firstname} ${lastname}`} />
      {isActive && (
        <article>
          <h3>
            {firstname} <br /> {lastname}
          </h3>
          <p>{status}</p>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src="/src/assets/images/github-mark-white.svg"
              alt="Logo GitHub"
              className="github"
            />
          </a>
        </article>
      )}
    </div>
  );
}

export default CardMember;
