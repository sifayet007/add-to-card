import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "@/store/feature/cardSlice";

export const store = configureStore({
  reducer: {
    cardReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
