import { configureStore } from "@reduxjs/toolkit";
import { MR } from "./MainSlice";

export const store = configureStore({
  reducer: {
    MStore: MR,
  },
});

export type RootState = ReturnType<typeof store.getState>;