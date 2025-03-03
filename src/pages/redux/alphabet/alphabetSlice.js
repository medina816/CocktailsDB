import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktailsByLetter = createAsyncThunk(
    'alphabet/fetchCocktailsByLetter',
    async (letter, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${API}/search.php?f=${letter}`);
            return response.data.drinks || [];
        } catch (error) {
            return rejectWithValue('Ошибка загрузки коктейлей');
        }
    }
);

const alphabetSlice = createSlice({
    name: 'alphabet',
    initialState: {
        cocktails: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktailsByLetter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCocktailsByLetter.fulfilled, (state, action) => {
                state.loading = false;
                state.cocktails = action.payload;
            })
            .addCase(fetchCocktailsByLetter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default alphabetSlice.reducer;
