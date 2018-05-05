import React, { Component } from 'react';
import CartItem from './components/CartItem';
import { CheckoutButton } from './components/CheckoutButton'
import Clock from 'react-live-clock';
import './App.css';

const products = [
  {
    id: 1,
    name: "Prada Shoes",
    price: 570,
  },
  {
    id: 2,
    name: "Rolex Watch",
    price: 649,
  },
  {
    id: 3,
    name: "Paper clips",
    price: 0.1,
  }
]

class App extends Component {
  state = {
    products,
    checkout: false,
  }

  incrementQuantity = productId => {
    const currentItem = this.state.products[productId - 1]
    return this.setState({
      currentItem: currentItem.quantity += 1
    })
  }

  checkOut = () => {
    this.setState({ checkout: true })
  }

  checkoutCalc = () => (
    products.map(item => item.price * item.quantity).reduce((acc, price) => acc + price, 0)
  )

  componentDidMount() {
    this.state.products.map(item => item.quantity = 0)
  }

  render() {
    return (
      <div className="App">
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
        <CartItem products={this.state.products} onPlusClick={this.incrementQuantity} />
        <CheckoutButton items={this.state.products} showCheckout={this.checkOut} />
        { this.state.checkout && <div>{this.checkoutCalc()}</div> }
      </div>
    );
  }
}

export default App;
