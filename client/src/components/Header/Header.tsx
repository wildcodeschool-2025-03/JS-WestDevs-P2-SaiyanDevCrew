import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <figure className="logo">
        <img src="images/Logo.webp" alt="logo du site" />
      </figure>
      <figcaption className="title">
        <h1>
          <span>Dragon</span> Fight Simulator
        </h1>
      </figcaption>
      <nav className="home">
        <Link to="/home">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
