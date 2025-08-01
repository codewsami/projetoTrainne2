import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Catalogo from './pages/catalogo'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Catalogo />
    </BrowserRouter>
  </StrictMode>,
)
