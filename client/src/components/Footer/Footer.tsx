import "./Footer.css";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="banner-footer">
      <Link to="/crew-page">Le Crew</Link>
      <p>&copy; copyright 2025 - Saiyan Dev Crew</p>
      <figure>
        <a href="https://github.com/" target="blank">
          <img src="/images/github-mark.svg" alt="logo GitHub" />
        </a>
        <a href="https://www.wildcodeschool.com/" target="blank">
          <img
            src="/images/LogoWildCodeSchool.png"
            alt="logo Wild Code School"
          />
        </a>
      </figure>
    </footer>
  );
}

export default Footer;
