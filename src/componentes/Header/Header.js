// Arquivo: src/components/Header/Header.js

import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import "./Header.css";

const Header = () => {
  // O estado do carrinho
  const [itemCount, setItemCount] = useState(0);

  const handleCartClick = () => {
    // lógica de navegação
    window.location.href = "/cart";
  };

  return (
    <header className="site-header">
      <nav className="header-nav">
        <Logo />
        <SearchBar />
        <CartButton itemCount={itemCount} onClick={handleCartClick} />
      </nav>
    </header>
  );
};

export default Header;
