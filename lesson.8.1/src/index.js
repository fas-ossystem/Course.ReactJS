import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./components";

const store = createStore(reducer);

store.dispatch({
  type: "SET_STATE",
  state: {
    phones: [
      "Xiaomi Mi 10",
      "Samsung Galaxy Note20"
    ]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
