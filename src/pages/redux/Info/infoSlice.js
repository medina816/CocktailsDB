import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'
export const fetchDrink = createAsyncThunk(
    'drinks/fetchDrink', async (id) => {
    const response = await axios.get(`${API}/?i=${id}`);
    return response.data.drinks ? response.data.drinks[0] : null; 
});


const drinkSlice = createSlice({
    name: "drink",
    initialState: {
        drink: null,  
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDrink.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.drink = null;  
            })
            .addCase(fetchDrink.fulfilled, (state, action) => {
                state.loading = false;
                state.drink = action.payload;
            })
            .addCase(fetchDrink.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default drinkSlice.reducer;