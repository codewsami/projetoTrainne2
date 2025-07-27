import React, { useState } from "react";
import "./Header.css";

const SearchIcon = () => <svg></svg>;

const CartButton = ({ itemCount, onClick }) => {
  return (
    <div
      className="cart-button-pro"
      onClick={onClick}
      role="button"
      aria-label="Carrinho"
    >
      <div className="icon-container">
        <img src="/carrinho.png" alt="Cart Icon" className="cart-icon" />
        {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      </div>
      <span className="cart-text">Cart</span>
    </div>
  );
};

function Header() {
  const [itemCount, setItemCount] = useState(0);

  const handleCartClick = () => {
    window.location.href = "/cart";
  };

  return (
    <header className="site-header">
      <nav className="header-nav">
        <div className="logo-container">
          <img src="/logo.svg" alt="Logo Simon Filmes" className="logo-img" />
          <h1 className="logo-title">
            Simon
            <br />
            <span className="logo-subtitle">Filmes</span>
          </h1>
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
            <img src="/search.svg" alt="icone barra" className="search-icon" />
          </span>
        </div>

        <CartButton itemCount={itemCount} onClick={handleCartClick} />
      </nav>
    </header>
  );
}

export default Header;
