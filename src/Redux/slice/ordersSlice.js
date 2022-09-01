import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    infoOrder: (state, action) => {
      state.orderItems.push({ ...action.payload.Item });
    },
  },
});

export const { infoOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
