import "./Header.css";

const SearchIcon = () => <svg></svg>;

function Header() {
  return (
    <header className="site-header">
      <nav className="header-nav">
        <div className="logo-container">
          <img src="/logo.svg" alt="Logo Simon Filmes" className="logo-img" />
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

          <span className="search-extra-icon" aria-label="icone">
            <img src="/search.svg" alt="icone barra" class="search-icon" />
          </span>
        </div>

        <button class="cart-button-pro">
          <div class="icon-container">
            <img
              src="/carrinho.png"
              alt="Ícone do Carrinho"
              class="cart-icon"
            />

            <span class="item-count">99</span>
          </div>

          <span class="cart-text">cart</span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
