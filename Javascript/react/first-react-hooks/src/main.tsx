import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CountProvider } from "./context/countContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CountProvider>
      <App />
    </CountProvider>
  </React.StrictMode>
);
