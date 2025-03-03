import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_COCKTAILS = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

export const getCocktails = createAsyncThunk(
    "cocktails/getCocktails",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API_COCKTAILS);
           
            return res.data.drinks;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const cocktailsSlice = createSlice({
    name: "cocktails",
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCocktails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCocktails.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getCocktails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default cocktailsSlice.reducer;
