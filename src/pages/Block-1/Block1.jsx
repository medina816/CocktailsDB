import React from 'react'
import './block.css'
import { Link } from 'react-router-dom'
function Block1() {
  return (
    <div className='block1-container'>
      <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="" />
      <div className='mid'>
        <h1>Welcome to TheCocktailDB</h1>
        <p>An open, crowd-sourced database of drinks and cocktails from around the world.
        We also offer a free cocktail API for anyone wanting to use it.</p>
 
            <Link to='money'>
            <button className='btn2'>Go Premium</button>
            </Link>
     
        <p>Click button above to upgrade free Cocktail API to premium.
        $3 month and cancel anytime. Currently 248 supporters.</p>
      </div>
      <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="" />
    </div>
  )
}

export default Block1
