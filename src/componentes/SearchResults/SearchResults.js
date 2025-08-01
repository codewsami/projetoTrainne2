import React from "react";
import "./SearchResults.css";

const SearchResults = ({ results, loading }) => {
  if (loading) {
    return <div className="search-results-container">Carregando...</div>;
  }

  // Se não houver busca ativa ou resultados, não mostra nada.
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="search-results-container">
      <ul className="search-results-list">
        {results.map((movie) => (
          // Supondo que sua API retorna filmes com 'id' e 'title'
          <li key={movie._id || movie.id} className="search-results-item">
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
