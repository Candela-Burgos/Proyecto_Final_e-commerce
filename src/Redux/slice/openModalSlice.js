import { createSlice } from '@reduxjs/toolkit';

const isOpenModalState = false;

const openModalSlice = createSlice({
  name: 'openModal',
  initialState: isOpenModalState,
  reducers: {
    onOpenModal: (state) => true,
    onCloseModal: () => isOpenModalState,
  },
});

export const { onOpenModal, onCloseModal } = openModalSlice.actions;
export default openModalSlice.reducer;
