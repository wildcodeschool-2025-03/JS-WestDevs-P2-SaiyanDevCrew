import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="banner-header">
      <figure>
        <img src="images/Logo.webp" alt="logo du site" />
      </figure>
      <figcaption>
        <h1>
          <span>Dragon</span> Fight Simulator
        </h1>
      </figcaption>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
