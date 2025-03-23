/**
 * Basic test functions for Cart functionality
 * 
 * These can be used in the browser console to test the cart functionality:
 * 
 * 1. Copy this entire file
 * 2. Open your site in browser
 * 3. Open browser console
 * 4. Paste and run the functions
 */

// Test adding items to cart
function testAddToCart() {
  console.log('Testing add to cart functionality...');
  
  // Get cart from localStorage
  const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : null;
  };
  
  // Create test products
  const testProducts = [
    {
      id: 'test-product-1',
      name: 'Test Product 1',
      price: 19.99,
      images: ['/path/to/image1.jpg'],
    },
    {
      id: 'test-product-2',
      name: 'Test Product 2',
      price: 29.99,
      images: ['/path/to/image2.jpg'],
    }
  ];
  
  // Clear cart first
  localStorage.removeItem('cart');
  console.log('Cart cleared');
  
  // Get initial cart state
  let cart = getCart();
  console.log('Initial cart:', cart);
  
  // Create empty cart if none exists
  if (!cart) {
    cart = {
      items: [],
      totalItems: 0,
      totalPrice: 0,
    };
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Empty cart created');
  }
  
  // Add first product
  const product1 = testProducts[0];
  const size1 = 'M';
  const quantity1 = 2;
  
  const newItem1 = {
    id: product1.id,
    name: product1.name,
    price: product1.price,
    image: product1.images[0],
    size: size1,
    quantity: quantity1,
  };
  
  cart.items.push(newItem1);
  cart.totalItems += quantity1;
  cart.totalPrice += product1.price * quantity1;
  
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('Added product 1:', newItem1);
  console.log('Updated cart:', getCart());
  
  // Add second product
  const product2 = testProducts[1];
  const size2 = 'L';
  const quantity2 = 1;
  
  const newItem2 = {
    id: product2.id,
    name: product2.name,
    price: product2.price,
    image: product2.images[0],
    size: size2,
    quantity: quantity2,
  };
  
  cart.items.push(newItem2);
  cart.totalItems += quantity2;
  cart.totalPrice += product2.price * quantity2;
  
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('Added product 2:', newItem2);
  console.log('Final cart:', getCart());
  
  return 'Test completed. Check cart in application state or localStorage.';
}

// Test removing item from cart
function testRemoveFromCart() {
  console.log('Testing remove from cart functionality...');
  
  // Get cart from localStorage
  const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : null;
  };
  
  let cart = getCart();
  
  if (!cart || cart.items.length === 0) {
    console.error('Cart is empty. Run testAddToCart() first');
    return 'Test failed: Empty cart';
  }
  
  console.log('Current cart:', cart);
  
  // Remove the first item
  const itemToRemove = cart.items[0];
  console.log('Removing item:', itemToRemove);
  
  // Calculate new totals
  cart.totalItems -= itemToRemove.quantity;
  cart.totalPrice -= itemToRemove.price * itemToRemove.quantity;
  
  // Remove the item
  cart.items = cart.items.filter(item => 
    !(item.id === itemToRemove.id && item.size === itemToRemove.size)
  );
  
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('Updated cart after removal:', getCart());
  
  return 'Test completed. Item removed from cart.';
}

// Test clearing cart
function testClearCart() {
  console.log('Testing clear cart functionality...');
  
  // Clear the cart
  const emptyCart = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };
  
  localStorage.setItem('cart', JSON.stringify(emptyCart));
  console.log('Cart cleared');
  
  const cart = localStorage.getItem('cart');
  console.log('Current cart:', cart ? JSON.parse(cart) : null);
  
  return 'Test completed. Cart cleared.';
}

// Export test functions
export {
  testAddToCart,
  testRemoveFromCart,
  testClearCart,
}; 