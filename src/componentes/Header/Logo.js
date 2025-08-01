import React from "react";

const Logo = () => {
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
      </nav>
    </header>
  );
};
export default Logo;
