import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCocktails } from '../pages/redux/cocktails/cocktailsSlice';
import './cocktailsList.css';
import { Link } from 'react-router-dom';

const CocktailsList = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state) => state.cocktails);

    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch]);

    if (loading) return <p className="loading">Загрузка коктейлей...</p>;
    if (error) return <p className="error">Ошибка: {error}</p>;

    return (
        <div className="cocktails-container">
            <div className="cocktails-flex">
                {list.map((drink) => (
                    <div key={drink.idDrink} className="cocktail-card">
                        <Link to={`/cocktailInfo/${drink.idDrink}`}>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="cocktail-image" />
                        </Link>
                        <div className="cocktail-name">{drink.strDrink}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CocktailsList;
