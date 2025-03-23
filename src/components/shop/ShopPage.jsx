import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsByCategory } from '../../data/products';
import OptimizedImage from '../OptimizedImage';

function ShopPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load categories and products
    const allCategories = getCategories();
    setCategories(allCategories);
    
    // Initialize with all products
    const allProducts = getProductsByCategory(activeCategory);
    setProducts(allProducts);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="shop-page">
      <section className="hero-section">
        <div className="hero-background shop-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Skookum Merchandise</h1>
          <p className="hero-text">Gear up for your next fishing adventure</p>
        </div>
      </section>

      <div className="container shop-content content-over-bg">
        <div className="shop-filters">
          <h2>Categories</h2>
          <div className="category-buttons">
            <button 
              className={`category-button ${activeCategory === null ? 'active' : ''}`}
              onClick={() => handleCategoryChange(null)}
            >
              All Products
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                {product.images && product.images[0] ? (
                  <OptimizedImage 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="product-img"
                  />
                ) : (
                  <div className="placeholder-image">No Image</div>
                )}
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <Link to={`/shop/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopPage; 