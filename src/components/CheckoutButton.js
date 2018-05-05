import React from 'react';
import PropTypes from 'prop-types'
import './CheckoutButton.css';

export const CheckoutButton = ({showCheckout}) => (
  <button className='checkout-button' onClick={() => showCheckout()}>Checkout</button>
);

CheckoutButton.propTypes = {
  showCheckout: PropTypes.func.isRequired,
}
