import "./Header.css";
import { Link } from "react-router";

function Header() {
  return (
    <header className="banner-header">
      <figure>
        <img src="/public/images/Logo.webp" alt="logo du site" />
      </figure>
      <figcaption>
        <h1 className="title">
          <div className="box-title">
            <span>Dragon </span>Fight{" "}
          </div>
          <div className="simulator">Simulator</div>
        </h1>
      </figcaption>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login-page">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
