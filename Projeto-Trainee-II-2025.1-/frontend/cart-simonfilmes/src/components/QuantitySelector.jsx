import { useState } from 'react';

function QuantitySelector({ initial = 1, onChange }) {
  const [quantity, setQuantity] = useState(initial);

  const updateQuantity = (newQty) => {
    if (newQty < 1) return;
    setQuantity(newQty);
    onChange && onChange(newQty);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-red-600 text-white px-3 py-1 rounded"
        onClick={() => updateQuantity(quantity - 1)}
      >
        −
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        className="bg-green-600 text-white px-3 py-1 rounded"
        onClick={() => updateQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
