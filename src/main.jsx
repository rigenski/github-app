import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "src/style/index.css";

// library
import { Provider } from "react-redux";
import store from "src/store";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
