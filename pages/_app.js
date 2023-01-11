import "../styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import namesReducer from "../features/names";
export const store = configureStore({
  reducer: {
    names: namesReducer,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}
