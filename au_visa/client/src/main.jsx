import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VisaEnquiry from "./Pages/VisaEnquiry/VisaEnquiry";
import Homepage from "./Pages/HomePage/Homepage";
import Footer from "./Components/Footer/Footer";
import VisaDetails from "./Pages/VisaDetails/VisaDetails";
import AdminHome from "./Pages/AdminDashboard/AdminHome/AdminHome";
import AdminLogin from "./Pages/AdminDashboard/AdminLogin/AdminLogin";
import Vevo from "./Pages/Vevo/Vevo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/vevo" element={<Vevo />} />
        <Route path="/enquiry" element={<VisaEnquiry />} />
        <Route path="/visa-details" element={<VisaDetails />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
