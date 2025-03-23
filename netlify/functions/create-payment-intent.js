const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    // Parse the incoming request body
    const data = JSON.parse(event.body);
    const { amount, currency = 'usd', customer_email } = data;

    // Validate the required parameters
    if (!amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameter: amount' }),
      };
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency,
      receipt_email: customer_email,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        integration_check: 'accept_a_payment',
      },
    });

    // Return the client secret to the client
    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'An error occurred while processing your payment',
        details: error.message
      }),
    };
  }
}; 