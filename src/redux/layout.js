import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    sidebarOpen: false,
    menuHovering: false,
    menuOpen: true,
  },
  reducers: {
    handleSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    handleMenuHover: (state, action) => {
      state.menuHovering = action.payload;
    },
    handleMenuOpen: (state, action) => {
      state.menuOpen = action.payload;
    },
  },
});

export const { handleSidebarOpen, handleMenuHover, handleMenuOpen } = layoutSlice.actions;

export default layoutSlice.reducer;
