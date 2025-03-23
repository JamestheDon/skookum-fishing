import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import OptimizedImage from '../OptimizedImage';

function CartPage() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, size, newQuantity);
    }
  };

  const handleRemoveItem = (id, size) => {
    removeFromCart(id, size);
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <section className="hero-section">
        <div className="hero-background cart-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Your Cart</h1>
          <p className="hero-text">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
        </div>
      </section>

      <div className="container cart-content content-over-bg">
        {items.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <button 
              className="btn btn-primary"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              <div className="cart-header">
                <div className="cart-header-product">Product</div>
                <div className="cart-header-price">Price</div>
                <div className="cart-header-quantity">Quantity</div>
                <div className="cart-header-total">Total</div>
                <div className="cart-header-actions">Actions</div>
              </div>

              {items.map((item) => (
                <div className="cart-item" key={`${item.id}-${item.size}`}>
                  <div className="cart-item-product">
                    <div className="cart-item-image">
                      {item.image ? (
                        <OptimizedImage 
                          src={item.image} 
                          alt={item.name} 
                          className="cart-product-img"
                        />
                      ) : (
                        <div className="placeholder-image small">No Image</div>
                      )}
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-size">Size: {item.size}</p>
                    </div>
                  </div>
                  
                  <div className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                  
                  <div className="cart-item-quantity">
                    <button 
                      className="quantity-btn decrease"
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn increase"
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <div className="cart-item-actions">
                    <button 
                      className="remove-item-btn"
                      onClick={() => handleRemoveItem(item.id, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-totals">
                <div className="cart-subtotal">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="cart-shipping">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="cart-tax">
                  <span>Tax:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="cart-total">
                  <span>Estimated Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="cart-actions">
                <button 
                  className="btn btn-outline"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage; 