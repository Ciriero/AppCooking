import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavProvider } from "./FavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavProvider>
    <App />
  </FavProvider>
);
