import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CartItem.css';

export default class CartItem extends Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })),
    onPlusClick: PropTypes.func.isRequired
  }

  render() {
    const { products, onPlusClick } = this.props
    return (
      products.map((item, index) => (
        <li key={`${item.name}${index}`} className='list-items'>
          {item.name}: ${item.price} Quantity: {item.quantity || 0}
          <button className='list-button' onClick={() => onPlusClick(item.id)}>+</button>
        </li>
      ))
    );
  }
}
