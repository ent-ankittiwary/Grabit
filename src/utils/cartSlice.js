import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Actions message
    addItem: (state, action) => {
      state.items.push(action.payload); // in abstract where whatever is newly added is payload:"NewItem" and that object to to items array
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state,action) => {
        //RTK_ either Mutate the existing state or return new state
      return {items:[]}; //this new [] will be replaced inside originalState=[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; 
// By default actions are nested inside cartSlice.actions
export default cartSlice.reducer;
