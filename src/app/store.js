import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";

//Rename this into productReducer as export default that's why there is no problem to rename this
// import { productSlice } from "../features/productSlice";

import productReducer from "../features/productSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        cartProduct: cartReducer,
        auth: authReducer,
    }
});

export default store;