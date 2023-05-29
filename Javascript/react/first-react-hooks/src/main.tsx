import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CountProvider } from "./context/countContext";
import { ModeProvider } from "./context/modeContext";
import { AuthProvider } from "./context/authContext";
import { TodoProvider } from "./context/todoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <AuthProvider>
        <ModeProvider>
          <CountProvider>
            <App />
          </CountProvider>
        </ModeProvider>
      </AuthProvider>
    </TodoProvider>
  </React.StrictMode>
);
