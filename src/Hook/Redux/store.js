import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slice/authSlice';
import OpenModalReducer from './slice/openModalSlice';
import OpenCartReducer from './slice/openCartSlice';
import cartReducer from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    openModal: OpenModalReducer,
    openCart: OpenCartReducer,
    cart: cartReducer,
  },
});
