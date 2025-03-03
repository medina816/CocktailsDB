import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export const getCocktailsByLetter = createAsyncThunk(
    'letterCocktails/getCocktailsByLetter',
    async (letter, thunkAPI) => {
        try {
            const res = await axios.get(`${API}?s=${letter}`);  
            return res.data.drinks || [];
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const letterCocktailsSlice = createSlice({
    name: 'letterCocktails',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCocktailsByLetter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCocktailsByLetter.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getCocktailsByLetter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default letterCocktailsSlice.reducer;
