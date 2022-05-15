import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  phone: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    updateUserData: (state, action) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPhone, updateUserData } = counterSlice.actions;

export default counterSlice.reducer;
