import "./Header.css";

function Header() {
  return (
    <header>
      <img src="/src/assets/images/Logo.webp" alt="logo du site" />
      <figure>
        <h1 className="red">Dragon</h1>
        <h1>Fight</h1>
        <h1 className="position">Simulator</h1>
      </figure>
      <nav>
        <a href="/">Home</a>
      </nav>
    </header>
  );
}

export default Header;
