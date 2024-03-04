import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import numberSlice from "./numberSlice";

const store = configureStore({
  reducer: {
    numbers: numberSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
