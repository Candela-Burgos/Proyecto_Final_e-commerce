import { createSlice } from '@reduxjs/toolkit';

const isOpenCartState = false;

const openCartSlice = createSlice({
  name: 'openCart',
  initialState: isOpenCartState,
  reducers: {
    onOpenCart: (state) => true,
    onCloseCart: () => isOpenCartState,
  },
});

export const { onOpenCart, onCloseCart } = openCartSlice.actions;
export default openCartSlice.reducer;
