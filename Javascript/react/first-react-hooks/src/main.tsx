import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CountProvider } from "./context/countContext";
import { ModeProvider } from "./context/modeContext";
import { AuthProvider } from "./context/authContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ModeProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </ModeProvider>
    </AuthProvider>
  </React.StrictMode>
);
