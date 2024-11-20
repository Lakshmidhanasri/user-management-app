import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Add this file for global styles if it doesn't already exist
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals(console.log); // Logs performance metrics to the console
