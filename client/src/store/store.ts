import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./features/formDataSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { errorSlice } from "./features/errorSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    error: errorSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
