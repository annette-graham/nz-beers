import React from 'react'
import BeerListItem from './Listing/BeerListItem'

const Listing = (props) => {

  return (
    <div>
      <div className="welcome">
        <p>Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>
      </div>
      <div className='beerList'>
        {props.beers.map (beer => {
          return (
            <BeerListItem key={beer.id} beer={beer} addToCart={props.addToCart} />
          )
        })}
      </div>

    </div>
  )

}

export default Listing
