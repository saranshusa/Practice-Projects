import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", phone: "" } },
  reducers: {
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setPhone: (state, action) => {
      state.value.phone = action.payload;
    },
  },
});

export const { setName, setPhone } = userSlice.actions;

export default userSlice.reducer;
