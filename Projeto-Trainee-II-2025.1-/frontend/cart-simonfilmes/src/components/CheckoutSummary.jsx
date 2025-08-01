import React, { useState } from 'react';
import PaymentMethodSelector from './PaymentMethodSelector';

/**
 * Componente visual e funcional para resumo do checkout.
 * Props:
 * - items: array de objetos com filmes e quantidade
 */
export default function CheckoutSummary({ items }) {
  const [paymentMethod, setPaymentMethod] = useState('pix');

  // Cálculo seguro de total de itens e preço total
  const totalItems = items.reduce((acc, item) => acc + (item.quantidade || item.quantity || 0), 0);
  const totalPrice = items.reduce((acc, item) => {
    const unitPrice = item.filme?.price || item.price || 0;
    const qty = item.quantidade || item.quantity || 0;
    return acc + unitPrice * qty;
  }, 0).toFixed(2);

  const handleCheckout = () => {
    alert(`Compra finalizada com ${paymentMethod.toUpperCase()}! Total: R$ ${totalPrice}`);
    // TODO: Enviar POST para backend com detalhes da compra
  };

  return (
    <div
      style={{
        width: 464,
        height: 766,
        background: '#0E1423',
        borderRadius: 26.67,
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        padding: 30,
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {/* Título */}
        <h3
          style={{
            fontFamily: '"Creative Vintage Regular", serif',
            fontSize: 40,
            fontWeight: 400,
            lineHeight: '36px',
            letterSpacing: '-1px',
            marginBottom: 30,
            textAlign: 'center',
          }}
        >
          Check-out
        </h3>

        {/* Métodos de pagamento */}
        <div
          style={{
            width: 432,
            background: '#01040D',
            borderRadius: 24,
            padding: 20,
            marginBottom: 30,
          }}
        >
          <h4
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 24,
              fontWeight: 700,
              lineHeight: '36px',
              marginBottom: 15,
            }}
          >
            Payment Methods
          </h4>

          {/* Substitua isso com seus ícones ou componente */}
          <PaymentMethodSelector onChange={setPaymentMethod} selected={paymentMethod} />
        </div>

        {/* Número de itens */}
        <div style={summaryRowStyle}>
          <span>Number of Items:</span>
          <span>{totalItems}</span>
        </div>

        {/* Preço total */}
        <div style={summaryRowStyle}>
          <span>Total:</span>
          <span>R$ {totalPrice}</span>
        </div>

        {/* Botão finalizar compra */}
        <button
          style={{
            width: '100%',
            height: 50,
            borderRadius: 24,
            backgroundColor: '#EAA64D',
            color: '#FFF',
            fontSize: 24,
            fontFamily: '"Creative Vintage Regular", serif',
            fontWeight: 400,
            cursor: 'pointer',
            border: 'none',
          }}
          onClick={handleCheckout}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

// Estilo compartilhado para linhas de resumo
const summaryRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Inter, sans-serif',
  fontSize: 24,
  fontWeight: 700,
  lineHeight: '36px',
  letterSpacing: '-0.25px',
  marginBottom: 20,
};
