import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Lifecycle from "./pages/lifecycle";
import Home from "./pages/home";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Lifecycle />
  </React.StrictMode>
);
