import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IErrors = {
  value: {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    errorChecked: true,
  },
};

export const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError: (state: IErrors, action: PayloadAction<IErrors>) => {
      state.value = action.payload.value;
    },
  },
});

export default errorSlice.reducer;
export const { addError } = errorSlice.actions;
