import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Track from "./pages/Track";
import Dashboard from "./pages/Dashboard";
// import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Services from "./pages/Services";
import Employer from "./pages/Employer";
import TrackStatus from "./pages/TrackStatus";
import Application from "./pages/Application";
import ApplicationStatus from "./pages/ApplicationStatus";
import AdminApplications from "./pages/AdminApplications";
import Terms from "./pages/Terms";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/application" element={<Application />} />
        <Route path="/termsandconditions" element={<Terms />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
        {/* <Route path="/track" element={<Track />} /> */}
        {/* <Route path="/status" element={<TrackStatus />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/employer" element={<Employer />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="signup" element={<Signup />} /> */}
        <Route path="adminlogin" element={<AdminLogin />} />
        {/* <Route path="adminsignup" element={<AdminSignup />} /> */}
        <Route path="admin-applications" element={<AdminApplications />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "50vh" }}>
              404 - PAGE NOT FOUND
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
