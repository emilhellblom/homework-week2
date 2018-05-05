import React from 'react';
import './CheckoutButton.css';

export const CheckoutButton = ({showCheckout}) => (
  <button className='checkout-button' onClick={() => showCheckout()}>Checkout</button>
);
