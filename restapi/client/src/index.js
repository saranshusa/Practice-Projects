import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
