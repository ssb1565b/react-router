import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducers from "./store";
import { configureStore } from "@reduxjs/toolkit";
import GlobalStyle from "./components/GlobalStyle";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducers }, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
