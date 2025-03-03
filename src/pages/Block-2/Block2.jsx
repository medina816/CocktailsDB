import React, {useState} from 'react'
import { IoSearchSharp } from "react-icons/io5";
import './block2.css'
import { useNavigate } from 'react-router-dom';

function Block2() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 ) {
            navigate(`/search/${search}`);
            setSearch('');
        }
    };
  return (
    <div className='out'>
      <hr />
      <div className='put'>
        <input value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                         type="text" placeholder='Search for a Cocktail...'
                         onKeyDown={handleKeyDown}  />
        <button className='search'  onClick={() => navigate('/')}>
          <IoSearchSharp />
        </button>
      </div>
      <div className='bot'>
        <img src="https://www.thecocktaildb.com/images/icons/cocktail-logo.png" alt="" />
      <h5>Total Drinks: 636</h5>
      <img src="https://www.thecocktaildb.com/images/icons/ingredient-logo.png" alt="" />
      <h5>Total Ingredients: 489</h5>
      <img src="https://www.thecocktaildb.com/images/icons/image2.png" alt="" />
      <h5> Drink Images: 636(93cc)</h5>
      </div>
      <hr />
    </div>
  )
}

export default Block2
