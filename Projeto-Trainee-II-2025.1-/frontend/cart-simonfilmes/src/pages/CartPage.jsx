import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import CheckoutSummary from '../components/CheckoutSummary';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Quantos filmes mostrar inicialmente

  const fetchCartItems = () => {
    fetch('http://localhost:3000/carrinho')
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.error('Erro ao buscar carrinho:', err));
  };

  useEffect(() => {
    const filmesDeTeste = [
      '67612',
      '68173',
      '146075' 
    ];

    const limparCarrinho = async () => {
      await fetch('http://localhost:3000/carrinho', {
        method: 'DELETE'
      });
    };

    const preencherCarrinho = async () => {
      await limparCarrinho();

      for (const id of filmesDeTeste) {
        await fetch(`http://localhost:3000/carrinho/${id}`, {
          method: 'POST'
        });
      }

      fetchCartItems();
    };

    preencherCarrinho();
  }, []);

  const removeItem = (id) => {
    fetch(`http://localhost:3000/carrinho/${id}`, { method: 'DELETE' })
      .then(res => res.ok && fetchCartItems());
  };

  const decreaseQty = (id) => {
    fetch(`http://localhost:3000/carrinho/${id}`, { method: 'PATCH' })
      .then(res => res.ok && fetchCartItems());
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    fetch(`http://localhost:3000/carrinho/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantidade: newQty }),
    }).then(res => res.ok && fetchCartItems());
  };

  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-[#01040D] text-white overflow-hidden px-10 py-6"
      style={{ fontFamily: '"Creative Vintage Regular", serif' }}
    >
      {/* Setas e navegação */}
      <div className="absolute top-6 left-6 flex items-center gap-6 z-50">
        <button
          onClick={() => window.history.back()}
          aria-label="Voltar"
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white/50"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.4157 0.633821C24.5294 0.747151 24.6195 0.881783 24.681 1.03001C24.7425 1.17823 24.7742 1.33713 24.7742 1.4976C24.7742 1.65808 24.7425 1.81698 24.681 1.9652C24.6195 2.11342 24.5294 2.24806 24.4157 2.36139L10.6367 16.138L24.4157 29.9146C24.5292 30.028 24.6192 30.1627 24.6805 30.3109C24.7419 30.4591 24.7735 30.6179 24.7735 30.7784C24.7735 30.9388 24.7419 31.0976 24.6805 31.2458C24.6192 31.394 24.5292 31.5287 24.4157 31.6421C24.3023 31.7556 24.1676 31.8456 24.0194 31.9069C23.8712 31.9683 23.7124 31.9999 23.552 31.9999C23.3915 31.9999 23.2327 31.9683 23.0845 31.9069C22.9363 31.8456 22.8016 31.7556 22.6882 31.6421L8.04779 17.0018C7.93417 16.8884 7.84403 16.7538 7.78253 16.6056C7.72102 16.4574 7.68936 16.2985 7.68936 16.138C7.68936 15.9775 7.72102 15.8186 7.78253 15.6704C7.84403 15.5222 7.93417 15.3875 8.04779 15.2742L22.6882 0.633821C22.8015 0.520204 22.9361 0.430061 23.0844 0.368555C23.2326 0.30705 23.3915 0.275391 23.552 0.275391C23.7124 0.275391 23.8713 0.30705 24.0196 0.368555C24.1678 0.430061 24.3024 0.520204 24.4157 0.633821Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
          <span className="text-white text-3xl font-bold select-none">Cart</span>
        </button>
      </div>

      <p className="text-[24px] leading-[36px] text-left mt-24 mb-8 Products text-[24px] leading-[36px] text-right mt-24 mb-8">Price</p>

      <div className="grid grid-cols-1 xl:grid-cols-[auto_464px] gap-12 justify-between">
        <div className="flex flex-col gap-8">
          {cartItems.slice(0, visibleCount).map(item => (
            <CartItem
              key={item._id}
              item={item}
              removeItem={() => removeItem(item._id)}
              decreaseQty={() => decreaseQty(item._id)}
              updateQuantity={(newQty) => updateQuantity(item._id, newQty)}
            />
          ))}

          {visibleCount < cartItems.length && (
            <button
              onClick={handleSeeMore}
              className="mt-6 flex items-center gap-3 px-5 py-2 bg-[#0A4B85] rounded-md hover:bg-[#083a6a] transition text-[24px] font-semibold select-none"
            >
              See more
              <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40356 7.77173C1.4771 7.77173 1.55128 7.78759 1.62134 7.8186C1.69142 7.84965 1.75747 7.89609 1.8147 7.95728L14.7307 21.7366L15.1291 22.1614L15.5276 21.7366L28.4436 7.95825C28.501 7.89704 28.5667 7.84964 28.637 7.81861C28.7071 7.78764 28.7812 7.77271 28.8547 7.77271C28.9283 7.77273 29.0024 7.78764 29.0725 7.81861C29.1427 7.84964 29.2085 7.89709 29.2659 7.95825C29.3232 8.01945 29.3708 8.09361 29.4036 8.17798C29.4364 8.26258 29.4534 8.35507 29.4534 8.44849C29.4533 8.54175 29.4364 8.63356 29.4036 8.71802C29.3707 8.80251 29.3233 8.87748 29.2659 8.93872L15.5403 23.5784C15.4831 23.6405 15.417 23.687 15.3469 23.718C15.2769 23.749 15.2027 23.7649 15.1291 23.7649C15.0558 23.7649 14.9823 23.7489 14.9124 23.718C14.8422 23.687 14.7753 23.6406 14.718 23.5793L0.992432 8.93872C0.89128 8.79949 0.871127 8.76007 0.854736 8.71802C0.821909 8.63363 0.80401 8.5417 0.803955 8.44849C0.803955 8.35512 0.821857 8.2625 0.854736 8.17798C0.887593 8.09371 0.935077 8.01928 0.992432 7.95825C1.05065 7.89612 1.11668 7.84963 1.18677 7.8186C1.2567 7.78767 1.33017 7.77177 1.40356 7.77173Z"
                  fill="#CCE7FF"
                  stroke="#CCE7FF"
                  strokeWidth="1.1"
                />
              </svg>
            </button>
          )}
        </div>

        <CheckoutSummary items={cartItems} />
      </div>
    </div>
  );
}

export default CartPage;
