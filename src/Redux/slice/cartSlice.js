import { createSlice } from '@reduxjs/toolkit';
import { Toast, useToast } from '@chakra-ui/react';

const initialState = {
  cartItems: [],
  // cartItems: localStorage.getItem('cartItems')
  //   ? JSON.parse(localStorage.getItem('cartItems'))
  //   : [],
  // isOpenCartState: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.data.id === action.payload.data.id;
      });
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      // localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    deleteItemCart: (state, action) => {
      const deleteItem = state.cartItems.filter(
        (cartItem) => cartItem.data.id !== action.payload
      );
      state.cartItems = deleteItem;
    },
    clearCart: () => initialState,
    increaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.find(
        (item) => item.data.id === action.payload
      );
      itemIndex.cartQuantity++;
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cartItems.find(
        (item) => item.data.id === action.payload
      );
      if (itemIndex.cartQuantity === 1) {
        itemIndex.cartQuantity = 1;
      } else {
        itemIndex.cartQuantity--;
      }
    },
    // onOpenCart: () => true,
    // onCloseCart: (state) => state.isOpenCartState,
  },
});

export const {
  addToCart,
  deleteItemCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  // onOpenCart,
  // onCloseCart,
} = cartSlice.actions;
export default cartSlice.reducer;
