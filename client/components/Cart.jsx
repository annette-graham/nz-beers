import React from 'react'

import beerData from '../../data/beers.js'
import CartItem from './Cart/CartItem'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cart: props.cart
    }
  }


  deleteItem (id) {
    const cart = this.state.cart.filter(item => item.id !== id)
    this.setState({cart})
    this.props.deleteFromCart(id)
  }

  render () {

    return (
      <div className="cart">
        <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>

        <table>

          <thead>
            <tr>
              <th>Beer</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item, id) => {
              const name = getNameFromId(item.id)
                return (
                  <CartItem key={id}
                    item={item}
                    deleteFromCart={this.deleteItem.bind(this)}
                  />
                )
            })}
          </tbody>

        </table>

        <p className="actions">
          <a href="#" onClick={this.props.keepShopping}>Continue shopping</a>
          <button>Update</button>
          <button className="button-primary">Checkout</button>
        </p>

      </div>
    )

  }

}

function getNameFromId(id) {
  const beer = beerData.beers.find(beer => beer.id === id)
  return beer.name
}

export default Cart
