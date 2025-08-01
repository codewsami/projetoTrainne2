import Fundo from '../assets/fundo.png';
import Cart from '../assets/shoppingCart.svg';
import Modal from './modal';
import CardModal from './cardModal';
import { useState } from 'react';
import './styleCardHorizontal.css';
import FilmeNaN from '../assets/filmeNaNHorizontal.png';

function CardHorizontal(props) {

    const { filme, onClick } = props

    return (
        <div className='cardHorizontal' onClick={onClick} style={{
                backgroundImage: filme.poster_path
                ? `url(https://image.tmdb.org/t/p/original/${filme.poster_path})`
                : `url(${FilmeNaN})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '216px',
        }}>
            <div className='infosHorizontal'>
                <div className='tituloContainer'>
                    <p id='titulo'>{filme.title}</p>
                </div>
                <div id='interacao'>
                    <button type='button' onClick={onClick}>About it</button>
                    <div id='shoppingCart'>
                        <img id='cart' src={Cart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardHorizontal