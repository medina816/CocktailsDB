import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsByLetter } from '../redux/alphabet/alphabetSlice';
import './alphabetPage.css';

const AlphabetPage = () => {
    const { letter } = useParams();
    const dispatch = useDispatch();

    const { cocktails, loading, error } = useSelector((state) => state.alphabet);

    useEffect(() => {
        if (letter) {
            dispatch(fetchCocktailsByLetter(letter));
        }
    }, [dispatch, letter]);

    if (loading) {
        return <p className="loading">Загрузка...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    return (
        <div className="alphabet-page">
            <h2>Коктейли на букву "{letter}"</h2>
            <div className="cocktail-grid">
                {cocktails.map((cocktail) => (
                    <div key={cocktail.idDrink} className="cocktail-card">
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <h4>{cocktail.strDrink}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlphabetPage;
