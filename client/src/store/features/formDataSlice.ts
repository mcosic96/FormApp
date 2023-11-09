import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFormData = {
  value: {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    isChecked: false,
    submitMessage: "",
    submitMessageColor: "",
  },
};

const messages: IResponseMessage = {
  success: "Successfully submitted!",
  reject: "Submission rejected, please try again later.",
  pending: "Form submission in progress.",
};
const colors: IResponseMessage = {
  success: "green",
  reject: "red",
  pending: "black",
};

export const saveData = createAsyncThunk(
  "/formData",
  async (data: IFormData, thunkAPI) => {
    return fetch(process.env.REACT_APP_POST_URL as string, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.value),
    }).then((res) => res.json());
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addInputData: (state: IFormData, action: PayloadAction<ArgsForInput>) => {
      switch (action.payload.inputName) {
        case "firstName":
          state.value.firstName = action.payload.inputValue;
          break;
        case "lastName":
          state.value.lastName = action.payload.inputValue;
          break;
        case "address":
          state.value.address = action.payload.inputValue;
          break;
        case "phone":
          state.value.phone = action.payload.inputValue;
          break;
        case "email":
          state.value.email = action.payload.inputValue;
          break;
        case "isChecked":
          state.value.isChecked = action.payload.inputCheck;
          break;
      }
    },
    clearData: (state: IFormData) => {
      state.value = initialState.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveData.fulfilled, (state: IFormData) => {
      state.value.submitMessage = messages.success;
      state.value.submitMessageColor = colors.success;
    });
    builder.addCase(saveData.rejected, (state: IFormData) => {
      state.value.submitMessage = messages.reject;
      state.value.submitMessageColor = colors.reject;
    });
    builder.addCase(saveData.pending, (state: IFormData) => {
      state.value.submitMessage = messages.pending;
      state.value.submitMessageColor = colors.pending;
    });
  },
});

export default dataSlice.reducer;
export const { addInputData, clearData } = dataSlice.actions;
