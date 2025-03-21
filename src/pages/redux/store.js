import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from '../redux/cocktails/cocktailsSlice'; 
import letterCocktailsReducer from './letter/letterCocktailsSlice'
import alphabetReducer from './alphabet/alphabetSlice'
import drinkReducer from './Info/infoSlice'
export const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
        letterCocktails: letterCocktailsReducer,
        alphabet: alphabetReducer,
        drink: drinkReducer,
        },
});
