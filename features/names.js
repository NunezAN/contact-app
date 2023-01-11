import { createSlice } from "@reduxjs/toolkit";

export const namesSlice = createSlice({
  name: "names",
  initialState: { value: [] },
  reducers: {
    addName: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addName } = namesSlice.actions;
export default namesSlice.reducer;
