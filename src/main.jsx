// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // ensure index.css is imported here or in App.jsx (only once)

createRoot(document.getElementById("root")).render(<App />);
