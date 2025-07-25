import "./Header.css";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

function Header() {
  return (
    <header className="site-header">
      <nav className="header-nav">
        <div className="logo-container">
          <img
            src="https://placehold.co/50x50/EAA64D/0E1423?text=SF"
            alt="Logo Simon Filmes"
            className="logo-img"
          />
          <h1 className="logo-title">Simon Filmes</h1>
        </div>

        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Find Movie Titles"
            className="search-input"
          />

          <button className="search-button" aria-label="Pesquisar">
            <SearchIcon />
          </button>
        </div>

        <div className="nav-button-container">
          <button className="nav-button">carrinho</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
