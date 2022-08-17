import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { StateAudioContext } from "./context/soundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateAudioContext>
    <App />
  </StateAudioContext>
);
