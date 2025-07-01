import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { App } from "./components/App";

// biome-ignore lint/style/noNonNullAssertion: auto-generated
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
