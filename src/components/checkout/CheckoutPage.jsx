import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Replace with your Stripe publishable key
// This would typically come from an environment variable
const stripePromise = loadStripe('pk_test_your_stripe_key');

function CheckoutForm({ totalPrice, handleOrderSubmit }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
    hidePostalCode: true,
  };

  const handleCardChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setProcessing(true);

    try {
      // In a real implementation, you would create a payment intent on your server
      // and pass the client_secret to this function
      
      // For demo purposes, we're simulating a successful payment
      // In a real implementation, you would use stripe.confirmCardPayment
      /*
      const payload = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            address: {
              line1: formData.address,
              city: formData.city,
              state: formData.state,
              postal_code: formData.zipCode,
              country: formData.country,
            },
          },
        },
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setSucceeded(true);
        handleOrderSubmit({
          paymentId: payload.paymentIntent.id,
          ...formData
        });
      }
      */
      
      // Simulating a successful payment for demo purposes
      setTimeout(() => {
        setError(null);
        setSucceeded(true);
        setProcessing(false);
        handleOrderSubmit({
          paymentId: 'demo_payment_id_' + Date.now(),
          ...formData
        });
      }, 2000);
    } catch (error) {
      console.error('Error processing payment:', error);
      setError('An error occurred while processing your payment. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Contact Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Shipping Address</h3>
        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State/Province *</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="zipCode">Zip/Postal Code *</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Payment Information</h3>
        <div className="form-group">
          <label>Card Details *</label>
          <div className="stripe-card-element">
            <CardElement options={cardElementOptions} onChange={handleCardChange} />
          </div>
        </div>
      </div>

      {error && <div className="checkout-error">{error}</div>}

      <div className="order-total">
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>

      <button
        className="btn btn-primary checkout-btn"
        type="submit"
        disabled={!stripe || processing || succeeded}
      >
        {processing ? 'Processing...' : succeeded ? 'Payment Successful' : 'Complete Order'}
      </button>
    </form>
  );
}

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    // Redirect to cart if no items
    if (items.length === 0 && !orderCompleted) {
      navigate('/cart');
    }
  }, [items, navigate, orderCompleted]);

  const handleOrderSubmit = (orderData) => {
    // In a real application, you would send the order to your server
    console.log('Order submitted:', orderData);
    
    // Show completion message and clear cart after payment
    setOrderCompleted(true);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  if (orderCompleted) {
    return (
      <div className="container content-over-bg">
        <div className="order-success">
          <h2>Thank You for Your Order!</h2>
          <p>Your order has been placed successfully. You will receive a confirmation email soon.</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <section className="hero-section">
        <div className="hero-background checkout-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Checkout</h1>
        </div>
      </section>

      <div className="container checkout-content content-over-bg">
        <div className="checkout-grid">
          <div className="checkout-form-container">
            <Elements stripe={stripePromise}>
              <CheckoutForm 
                totalPrice={totalPrice} 
                handleOrderSubmit={handleOrderSubmit}
              />
            </Elements>
          </div>
          
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="order-items">
              {items.map((item) => (
                <div className="order-item" key={`${item.id}-${item.size}`}>
                  <div className="order-item-details">
                    <span className="order-item-name">{item.name}</span>
                    <span className="order-item-size">Size: {item.size}</span>
                    <span className="order-item-quantity">Qty: {item.quantity}</span>
                  </div>
                  <span className="order-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="order-calculations">
              <div className="order-subtotal">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="order-shipping">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="order-tax">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="order-final-total">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage; 