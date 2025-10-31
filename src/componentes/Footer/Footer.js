import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src="/logo2.svg" alt="Logo" />
            <div className="text-logo">Simon Filmes</div>
          </div>

          <Link to="/about" className="about-us">
            ABOUT US
          </Link>
        </div>

        <div className="footer-column-group">
          <div className="title-text">
            <h3>Powered By:</h3>
          </div>
          <div className="footer-columns-container">
            <div className="footer-text"></div>
            <div className="footer-column">
              <h4>Núcleo de criação</h4>
              <p className="texto1">
                Ayla Costa <br></br>
                Ayla Santos <br></br>
                Giovanna Antunes <br></br>
              </p>
            </div>

            <div className="footer-column">
              <h4>Núcleo de Front-end</h4>
              <p className="texto1">
                Danilo Nishimoto <br></br>
                Nicolas Santos <br></br>
                Samira Lins <br></br>
              </p>
            </div>

            <div className="footer-column">
              <h4>Núcleo de Back-end</h4>
              <p className="texto1">
                Giovanne Giroldo<br></br>
                Nicolas Fagundes <br></br>
                Vinícios Conceição <br></br>
              </p>
            </div>
          </div>
          <div className="fotter-after-columns">
            <p className="text-above">
              Orientados por: Giovanni Piccolo e Tiago Almeida
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Síntese Jr.</p>
      </div>
    </footer>
  );
};

export default Footer;
