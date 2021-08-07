import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./containers/App";

import "./index.css";

ReactDOM.render(
  /**
   * Компонент <Provider store={store}></Provider>
   * позволяет получить данные из store
   */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
