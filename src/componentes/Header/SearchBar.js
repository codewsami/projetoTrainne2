import React, { useState, useEffect } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await api.get(`/catalogo?title=${searchTerm}`);
        setResults(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Find Movie Titles"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" aria-label="Pesquisar"></button>
      <span className="search-extra-icon" aria-label="icone">
        <img src="/search.svg" alt="icone barra" className="search-icon" />
      </span>

      {(results.length > 0 || loading) && (
        <div className="search-results">
          {loading ? (
            <div className="result-item">Carregando...</div>
          ) : (
            <ul>
              {results.map((filme) => (
                <li
                  key={filme._id}
                  className="result-item"
                  onClick={() => navigate(`/filme/${filme._id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {filme.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
