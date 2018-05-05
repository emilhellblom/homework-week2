import React from 'react';
// import './CheckoutButton.css';

export const CheckoutButton = ({showCheckout}) => (
  <button onClick={() => showCheckout()}>Checkout</button>
);
