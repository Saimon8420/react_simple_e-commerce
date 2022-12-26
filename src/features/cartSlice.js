import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {
        product: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const copyState = (current(state.product));
            if (copyState.length === 0) {
                const newState = { ...action.payload, quantity: 1 };
                state.product = [...state.product, newState];
                //sort item because of to make right cartItem alignment
                state.product.sort((a, b) => (a.price > b.price ? 1 : -1));
            }
            else {
                const matched = copyState.find(product => product.id === action.payload.id);
                if (matched) {
                    const matchedState = { ...matched, quantity: matched.quantity + 1 };
                    const filter = copyState.filter(product => product.id !== matchedState.id);
                    if (filter.length === 0) {
                        state.product = [...filter, matchedState];
                        //sort item because of to make right cartItem alignment
                        state.product.sort((a, b) => (a.price > b.price ? 1 : -1));
                    }
                    else if (filter.length > 0) {
                        state.product = [...filter, matchedState];
                        //sort item because of to make right cartItem alignment
                        state.product.sort((a, b) => (a.price > b.price ? 1 : -1));
                    }
                    else {
                        state.product = [matchedState];
                        //sort item because of to make right cartItem alignment
                        state.product.sort((a, b) => (a.price > b.price ? 1 : -1));
                    }
                }
                else {
                    const newState = { ...action.payload, quantity: 1 };
                    state.product = [...state.product, newState];
                    //sort item because of to make right cartItem alignment
                    state.product.sort((a, b) => (a.price > b.price ? 1 : -1));
                }
            }
        },
        increaseQuantity: (state, action) => {
            const copyState = (current(state.product));
            const matched = copyState.find(product => product.id === action.payload.id)
            if (matched) {
                const newQn = { ...matched, quantity: matched.quantity + 1 };
                const newItem = copyState.filter(product => product.id !== action.payload.id);
                //sort item because of to make right cartItem alignment
                const sortItem = [newQn, ...newItem];
                sortItem.sort((a, b) => (a.price > b.price ? 1 : -1));
                state.product = sortItem;
            }
        },
        decreaseQuantity: (state, action) => {
            const copyState = (current(state.product));
            const matched = copyState.find(product => product.id === action.payload.id)
            if (matched && matched.quantity > 1) {
                const newQn = { ...matched, quantity: matched.quantity - 1 };
                const newItem = copyState.filter(product => product.id !== action.payload.id);
                //sort item because of to make right cartItem alignment
                const sortItem = [newQn, ...newItem];
                sortItem.sort((a, b) => (a.price > b.price ? 1 : -1));
                state.product = sortItem;
            }
            else {
                const newItem = copyState.filter(product => product.id !== action.payload.id);
                //sort item because of to make right cartItem alignment
                const sortItem = [...newItem];
                sortItem.sort((a, b) => (a.price > b.price ? 1 : -1));
                state.product = sortItem;
            }
        }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;