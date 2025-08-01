import { useState } from 'react';

function PaymentMethodSelector({ onChange }) {
  const [selected, setSelected] = useState('pix');

  const methods = [
    { id: 'pix', label: 'PIX' },
    { id: 'boleto', label: 'Boleto' },
    { id: 'credito', label: 'Cartão de Crédito' },
  ];

  const handleSelect = (id) => {
    setSelected(id);
    onChange && onChange(id);
  };

  return (
    <div className="space-y-2">
      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => handleSelect(method.id)}
          className={`w-full py-2 rounded-lg font-semibold border 
            ${selected === method.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
        >
          {method.label}
        </button>
      ))}
    </div>
  );
}

export default PaymentMethodSelector;
