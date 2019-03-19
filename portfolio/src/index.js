import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Reducers/rootReducer";
import Portfolio from './Portfolio'
import './index.css'
import "./Themes/ThemeStyle.css";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Portfolio />
  </Provider>,
  document.querySelector(".Folio")
);