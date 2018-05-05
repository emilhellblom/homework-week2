import React, { Component } from 'react';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    const { launchPage } = this.props
    return (
      <div className='landing-page'>
        <h1 className='landing-header'>
          Welcome!
        </h1>
        <p className='landing-content'>
          You have arrived at the store of all stores, where you can purchase precisely everything you could possibly need, if what you need is a Rolex, a pair of Prada shoes or some paperclips. To enter the store just click the button Enter down bellow and start spending money!
        </p>
        <button className='launch-button' onClick={() => launchPage()}>ENTER</button>
      </div>
    );
  }
}
