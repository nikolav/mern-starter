import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./slice-appdata";
import flagsReducer from "./slice-flags";
import colorModeReducer from "./slice-color-mode-tw";
//
export const store = configureStore({
  reducer: {
    appdata: appDataReducer,
    colorMode: colorModeReducer,
    flags: flagsReducer,
  },
});
