import { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state of the cart
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the cart context
const CartContext = createContext(null);

// Actions for the cart reducer
const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Cart reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case cartActions.ADD_TO_CART: {
      const { product, size, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id && item.size === size
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
      } else {
        // Add new item
        updatedItems = [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0], // Use first image
            size,
            quantity,
          },
        ];
      }

      // Calculate new total
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case cartActions.REMOVE_FROM_CART: {
      const { id, size } = action.payload;
      const updatedItems = state.items.filter(
        item => !(item.id === id && item.size === size)
      );

      // Calculate new total
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case cartActions.UPDATE_QUANTITY: {
      const { id, size, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, {
          type: cartActions.REMOVE_FROM_CART,
          payload: { id, size },
        });
      }

      const updatedItems = state.items.map(item => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      });

      // Calculate new total
      const totalItems = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case cartActions.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
}

// Cart provider component
export function CartProvider({ children }) {
  // Try to load cart from localStorage
  const getInitialState = () => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : initialState;
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      return initialState;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, null, getInitialState);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [state]);

  // Cart actions
  const addToCart = (product, size, quantity = 1) => {
    dispatch({
      type: cartActions.ADD_TO_CART,
      payload: { product, size, quantity },
    });
  };

  const removeFromCart = (id, size) => {
    dispatch({
      type: cartActions.REMOVE_FROM_CART,
      payload: { id, size },
    });
  };

  const updateQuantity = (id, size, quantity) => {
    dispatch({
      type: cartActions.UPDATE_QUANTITY,
      payload: { id, size, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: cartActions.CLEAR_CART });
  };

  // Context value
  const value = {
    items: state.items,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 