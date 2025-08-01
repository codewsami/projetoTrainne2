import './styleNavegacao.css';
import LeftArrow from '../assets/leftArrow.png';
import RightArrow from '../assets/rightArrow.png';
import Seta from '../assets/seta.png'
import { useSearchParams } from 'react-router-dom';

function Navegacao(props) {
    const { totalPages } = props;
    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page')) || 1;
    const total = Number(totalPages) || 1;

    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
    };;

    return (
        <div className='navegacaoContainer'>
            <div className='botaoNavegacao'>
                <img src={LeftArrow} alt="" />
                <button onClick={() => handlePageChange(Math.max(page - 1, 1))}>Anterior</button>
            </div>

            <button
                className='paginasNavegacao'
                onClick={() => handlePageChange(Math.max(1, Math.min(page, total - 2)))}
            >
                {Math.max(1, Math.min(page, total - 2))}
            </button>

            <button
                className='paginasNavegacao'
                onClick={() => handlePageChange(Math.max(1, Math.min(page + 1, total - 1)))}
            >
                {Math.max(1, Math.min(page + 1, total - 1))}
            </button>

            <button
                className='paginasNavegacao'
                onClick={() => handlePageChange(Math.max(1, Math.min(page + 2, total)))}
            >
                {Math.max(1, Math.min(page + 2, total))}
            </button>

            <button className='paginasNavegacao'>...</button>

            <button className='paginasNavegacao' onClick={() => handlePageChange(total)}>{total}</button>

            <div className='botaoNavegacao'>
                <button onClick={() => handlePageChange(page + 1)}>Seguinte</button>
                <img src={RightArrow} alt="" />
            </div>
        </div>
    );
}

export default Navegacao