import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../data/products';
import { useCart } from '../../context/CartContext';
import OptimizedImage from '../OptimizedImage';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchedProduct = getProductById(productId);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      
      // Set default size if there's only one option
      if (fetchedProduct.variants.length === 1) {
        setSelectedSize(fetchedProduct.variants[0].size);
      }
    } else {
      setError('Product not found');
    }
  }, [productId]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setError('');
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }

    // Find selected variant to check inventory
    const variant = product.variants.find(v => v.size === selectedSize);
    if (!variant || variant.inventory < quantity) {
      setError('Not enough inventory available');
      return;
    }

    // Add to cart
    addToCart(product, selectedSize, quantity);
    
    // Show success message
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  if (error === 'Product not found') {
    return (
      <div className="container content-over-bg">
        <div className="product-not-found">
          <h2>Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <button className="btn btn-primary" onClick={() => navigate('/shop')}>
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container content-over-bg">
        <div className="loading">Loading product...</div>
      </div>
    );
  }

  return (
    <div className="container product-detail content-over-bg">
      <div className="product-detail-grid">
        <div className="product-image-container">
          {product.images && product.images[0] ? (
            <OptimizedImage 
              src={product.images[0]} 
              alt={product.name} 
              className="product-detail-img"
            />
          ) : (
            <div className="placeholder-image large">No Image</div>
          )}
        </div>
        
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          
          <div className="product-options">
            <div className="size-selection">
              <h3>Size</h3>
              <div className="size-buttons">
                {product.variants.map((variant) => (
                  <button
                    key={variant.size}
                    className={`size-button ${selectedSize === variant.size ? 'selected' : ''} ${variant.inventory === 0 ? 'out-of-stock' : ''}`}
                    onClick={() => handleSizeChange(variant.size)}
                    disabled={variant.inventory === 0}
                  >
                    {variant.size}
                    {variant.inventory === 0 && <span className="out-of-stock-label">Sold Out</span>}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="quantity-selection">
              <h3>Quantity</h3>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="quantity-input"
              />
            </div>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          {addedToCart && <div className="success-message">Added to cart!</div>}
          
          <div className="product-actions">
            <button 
              className="btn btn-primary add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            
            <button 
              className="btn btn-outline back-btn"
              onClick={() => navigate('/shop')}
            >
              Back to Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 