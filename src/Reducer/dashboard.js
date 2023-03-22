import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    value: 0,
  },
  reducers: {
    updateId: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateId } = dashboardSlice.actions;
export default dashboardSlice.reducer;
