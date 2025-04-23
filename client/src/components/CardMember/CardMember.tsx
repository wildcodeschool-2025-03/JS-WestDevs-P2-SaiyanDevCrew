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
    <button
      type="button"
      className={`card-member ${isActive ? "active" : ""}`}
      onClick={toggleCard}
    >
      <img src={image} alt={`${firstname} ${lastname}`} />
      {isActive && (
        <article>
          <h3>
            {firstname} <br /> {lastname}
          </h3>
          <p>{status}</p>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <img
              src="/images/github-sans-aura.webp"
              alt="Logo GitHub"
              className="github-logo"
            />
            <img
              src="/images/github-aura.webp"
              alt="Aura GitHub"
              className="github-aura"
            />
          </a>
        </article>
      )}
    </button>
  );
}

export default CardMember;
