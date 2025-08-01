import './styleCardModal.css'
import Seta from '../assets/seta.png'
import Estrela from '../assets/estrela.png'
import Relogio from '../assets/relogio.png'
import Cross from '../assets/cross.png'
import CapaExemplo from '../assets/capaExemplo.png'
import { useEffect, useState } from 'react'
import axiosInstance from '../helper/axiosInstance'
import FilmeNaN from '../assets/filmeNaNHorizontal.png'

function CardModal(props) {

    const { filme, setOpenModal } = props

    const dataAno = filme.release_date.slice(0, 4);
    const tempoHora = Math.floor(filme.runtime / 60);
    const tempoMin = filme.runtime % 60;

    if(!filme)
        return null;

    return (
        <div className='containerCard' >
            <div className='cabecalhoCard' onClick={() => setOpenModal(false)}>
                <div className='box'>
                    <img src={Cross} alt="" />
                </div>
            </div>
            <div className='gridCard'>
                <div className='capa'>
                    <img src={filme.poster_path ? `https://image.tmdb.org/t/p/original/${filme.poster_path}` : FilmeNaN}  id='capaImagem' />
                    <div className='precos'>
                        <p id='precoAntigo'>R$99,99</p>
                        <p id='preco'>R$99,99</p>
                    </div>
                    <button id='comprar'>Buy Now</button>
                </div>
                <div className='informacoes'>
                    {console.log(filme)}
                    <h1 id='titulo'>{filme.title} </h1>
                    <p id='ano'>({dataAno})</p>
                    <div className='infos1' >
                        <img id='relogio' src={Relogio} alt="" />
                        <p id='duracao'>{tempoHora}h{tempoMin}min</p>
                        <img id='estrela' src={Estrela} alt="" />
                        <p id='classificacao'>{Math.round(filme.vote_average * 100) / 100}</p>
                        <div className='origem'>
                            <p id='pais'>United States of America</p>
                            <p id='idioma'>Language: <b>{filme.original_language}</b></p>
                        </div>
                    </div>
                    <div className='infos2'>
                        <p id='generos'>Genre: <b>{filme.genres}</b></p>
                        <p id='descricao'>{filme.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardModal