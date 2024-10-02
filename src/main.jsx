import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import ShoeSlice from "./Feature/ShoeSlice.jsx";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    first: ShoeSlice,
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ☻
  </StrictMode>
);
