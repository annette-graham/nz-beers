import React from 'react'

import beerData from '../../data/beers.js'
import Cart from './Cart'
import Header from './Header'
import Listing from './Listing'

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {
  constructor () {
    super()
    this.state = {
      onListing: true,
      cart: []
    }
  }

  addToCart (id) {
    this.setState({
      cart: [
        ...this.state.cart,
        {id, quantity: 1}   // TO-DO: increment if already added
      ],
      onListing: false
    })
  }

  keepShopping () {
    this.setState({
      onListing: true
    })
  }

  render () {

    const cart = <Cart cart={this.state.cart} keepShopping={this.keepShopping.bind(this)}/>
    const listing = <Listing beers={beerData.beers} addToCart={this.addToCart.bind(this)}/>

    return (
      <div>
        <div className='header'>
          <Header />
          {this.state.onListing ? listing : cart}
        </div>
      </div>
    )

  }

}

export default App
