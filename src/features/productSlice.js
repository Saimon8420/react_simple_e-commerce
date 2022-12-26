import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const productFetch = createAsyncThunk("products/productFetch", async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        products: [],
        error: null,
        filterProducts: [],
        search: [],
        eachProduct: []
    },
    reducers: {
        filterBySearch: (state, action) => {
            const copyState = (current(state.products));
            if (action.payload) {
                const searchVal = action.payload;
                const matched = copyState.filter(product => product.title.toLowerCase().includes(searchVal));
                if (matched.length === 0) {
                    state.search = 'no product found,search again';
                }
                else {
                    state.filterProducts = matched;
                    state.search = [];
                }
            }
            else {
                state.search = 'no product found,search again';
            }

        },
        filterPriceHigh: state => {
            state.products.sort((a, b) => (a.price < b.price ? 1 : -1));
            state.filterProducts?.sort((a, b) => (a.price < b.price ? 1 : -1));
        },
        filterPriceLow: state => {
            state.products.sort((a, b) => (a.price > b.price ? 1 : -1));
            state.filterProducts?.sort((a, b) => (a.price > b.price ? 1 : -1));
        },
        filterByCategory: (state, action) => {
            if (action.payload === "default") {
                const copyState = (current(state.products));
                state.filterProducts = copyState;
                state.search = [];
            }
            else if (action.payload === "women's clothing") {
                const copyState = (current(state.products));
                const filter = copyState.filter(product => product.category === action.payload);
                state.filterProducts = filter;
                state.search = [];
            }
            else if (action.payload === "men's clothing") {
                const copyState = (current(state.products));
                const filter = copyState.filter(product => product.category === action.payload);
                state.filterProducts = filter;
                state.search = [];
            }
            else if (action.payload === "jewelery") {
                const copyState = (current(state.products));
                const filter = copyState.filter(product => product.category === action.payload);
                state.filterProducts = filter;
                state.search = [];
            }
            else if (action.payload === "electronics") {
                const copyState = (current(state.products));
                const filter = copyState.filter(product => product.category === action.payload);
                state.filterProducts = filter;
                state.search = [];
            }
            else {
                return state;
            }
        },
        eachProduct: (state, action) => {
            const copyState = (current(state.products));
            const find = copyState.find(product => product.id === action.payload);
            state.eachProduct = find;
        }
    },
    extraReducers: builder => {
        builder.addCase(productFetch.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(productFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        })
        builder.addCase(productFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
})
export const { filterPriceHigh, filterPriceLow, filterBySearch, filterByCategory, eachProduct } = productSlice.actions;
export default productSlice.reducer;