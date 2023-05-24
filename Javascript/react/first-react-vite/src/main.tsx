import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Lifecycle from "./pages/lifecycle";
import News from "./pages/news";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <News />
  </React.StrictMode>
);
