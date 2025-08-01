import React, { useState, useEffect } from 'react';

export default function CartItem({ item, removeItem, updateQuantity }) {
  const [qty, setQty] = useState(item.quantidade || 1);

  useEffect(() => {
    setQty(item.quantidade || 1);
  }, [item.quantidade]);

  const handleDecrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      updateQuantity(newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = qty + 1;
    setQty(newQty);
    updateQuantity(newQty);
  };

  const handleRemove = () => {
    removeItem();
  };

  // Preço fixo como placeholder (ex: R$ 50 por filme)
  const pricePerUnit = 50;
  const totalPrice = (pricePerUnit * qty).toFixed(2);

  return (
    <div
      style={{
        display: 'flex',
        width: 946,
        alignItems: 'center',
        gap: 30,
        background: '#0E1423',
        borderRadius: 26.67,
        padding: 20,
        color: '#FFF',
        marginBottom: 20,
      }}
    >
      {/* Imagem do filme */}
      <div
        style={{
          width: 201,
          height: 336,
          borderRadius: 20,
          backgroundImage: `url(${item.filme?.poster_path || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          flexShrink: 0,
        }}
      />

      {/* Informações do filme */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontFamily: '"Creative Vintage Regular", serif',
            fontSize: 32,
            lineHeight: '36px',
            marginBottom: 10,
          }}
        >
          {item.filme?.title || 'Título não disponível'} ({new Date(item.filme?.release_date).getFullYear() || 'N/A'})
        </h2>

        <p style={infoStyle}>
          <strong>Avaliação: </strong>{item.filme?.vote_average || '—'} | <strong>Duração: </strong>{item.filme?.runtime || '—'} min
        </p>
        <p style={infoStyle}>
          <strong>Gênero: </strong>{item.filme?.genres || '—'}
        </p>
        <p style={infoStyle}>
          <strong>Idioma: </strong>{item.filme?.original_language || '—'}
        </p>
      </div>

      {/* Controles de quantidade e preço */}
      <div
        style={{
          width: 172,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        {/* Quantidade */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            background: '#EAA64D',
            borderRadius: 40,
            padding: '5px 10px',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 18px #EAA64D',
          }}
        >
          <button onClick={handleDecrease} style={qtyBtnStyle} aria-label="Diminuir quantidade">–</button>
          <span style={qtyTextStyle}>{qty}</span>
          <button onClick={handleIncrease} style={qtyBtnStyle} aria-label="Aumentar quantidade">+</button>
        </div>

        {/* Preço */}
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 32, fontWeight: '400', color: '#FFF' }}>
          R$ {totalPrice}
        </div>

        {/* Remover */}
        <button
          onClick={handleRemove}
          style={{
            marginTop: 10,
            background: 'transparent',
            border: '1px solid #FFF',
            borderRadius: 10,
            color: '#FFF',
            padding: '5px 10px',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontSize: 16,
          }}
          aria-label="Remover item"
        >
          Remover
        </button>
      </div>
    </div>
  );
}

const infoStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 24,
  lineHeight: '36px',
  marginBottom: 6,
};

const qtyBtnStyle = {
  width: 20,
  height: 21,
  background: 'transparent',
  border: 'none',
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 24,
  cursor: 'pointer',
};

const qtyTextStyle = {
  color: 'white',
  fontFamily: '"Creative Vintage Regular", serif',
  fontSize: 24,
  fontWeight: '700',
  lineHeight: '36px',
  minWidth: 30,
  textAlign: 'center',
};
