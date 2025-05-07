import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity,image, } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = { id, title, price,image, quantity };
        state.cartItems.push(newItem);
      }
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);
    }
  },
});

export const { addToCart, increment, decrement, removeFromCart } = cardSlice.actions;

export default cardSlice.reducer;
