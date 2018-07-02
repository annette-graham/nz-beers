import React from 'react'
import beerData from '../../../data/beers.js'


const CartItem = (props) => {
  const name = getNameFromId(props.item.id)
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>
          <input
            className='update-input'
            value={props.item.quantity} />
        </td>
          <td><button
            onClick={() => props.deleteFromCart(props.item.id)}>
            <span className="fa fa-trash fa-2x"></span>
          </button></td>
      </tr>
    </div>
  )

}

function getNameFromId(id) {
  const beer = beerData.beers.find(beer => beer.id === id)
  return beer.name
}

export default CartItem
