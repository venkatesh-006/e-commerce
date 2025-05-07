
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/CardSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
