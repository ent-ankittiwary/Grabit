import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // cartReducer is actually cartSlice.reducer

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // Big Reducer has Small Reducer
  },
});

export default appStore;
