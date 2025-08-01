//para teste
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api"; // ajuste o caminho se necessário

const FilmeDetalhes = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarFilme = async () => {
      try {
        const response = await api.get(`/catalogo/${id}`); // rota da API
        setFilme(response.data);
      } catch (error) {
        console.error("Erro ao carregar filme:", error);
      } finally {
        setLoading(false);
      }
    };

    buscarFilme();
  }, [id]);

  if (loading) return <div>Carregando detalhes...</div>;
  if (!filme) return <div>Filme não encontrado.</div>;

  return (
    <div className="filme-detalhes-container">
      <h1>{filme.title}</h1>
      <p>{filme.description}</p>
      {/* Adicione mais campos aqui, como imagem, ano, etc */}
    </div>
  );
};

export default FilmeDetalhes;
