import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktailsByLetter } from './redux/letter/letterCocktailsSlice';
import './search.css';

const SearchPage = () => {
    const { letter } = useParams();
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.letterCocktails);

    useEffect(() => {
        dispatch(getCocktailsByLetter(letter));
    }, [dispatch, letter]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error!: {error}</p>;

    return (
        <div className="search-page">
            <h2> Cocktails with a letter "{letter}"</h2>
            <div className="cocktail-grid">
                {
                    list.map((drink) => (
                        <div key={drink.idDrink} className="cocktail-card">
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                            <p>{drink.strDrink}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchPage;
