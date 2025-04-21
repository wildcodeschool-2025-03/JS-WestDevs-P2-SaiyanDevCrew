import "./CardMember.css";

interface PropsMember {
  image: string;
  firstname: string;
  lastname: string;
  status: string;
  github: string;
}

function CardMember({
  image,
  firstname,
  lastname,
  status,
  github,
}: PropsMember) {
  return (
    <>
      <div className="cardMember">
        <img src={image} alt={image} />
      </div>
      <article>
        <h3>{firstname}</h3>
        <h3>{lastname}</h3>
        <p>{status}</p>
        <a href={github}>Logo GitHub</a>
      </article>
    </>
  );
}

export default CardMember;
