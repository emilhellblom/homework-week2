import React, { Component } from 'react';
import CartItem from './components/CartItem';
import { CheckoutButton } from './components/CheckoutButton';
import LandingPage from './components/LandingPage';
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
    landingPage: true
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

  launchPage = () => {
    this.setState({ landingPage: false })
  }

  componentDidMount() {
    this.state.products.map(item => item.quantity = 0)
  }

  render() {
    if (this.state.landingPage === true) {
      return(
        <LandingPage launchPage={this.launchPage} />
      )
    }
    return (
      <div className="App">
        <Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />
        <ul className='list'>
          <CartItem products={this.state.products} onPlusClick={this.incrementQuantity} />
        </ul>
        <CheckoutButton  items={this.state.products} showCheckout={this.checkOut} />
        { this.state.checkout && <div className='price'>Total price: ${this.checkoutCalc()}</div> }
      </div>
    );
  }
}

export default App;
