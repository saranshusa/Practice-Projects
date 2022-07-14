import React, { useState } from "react";
import classes from "./VisaEnquiry.module.css";
import logo from "../../Assets/logostacked.png";
import { CountryDropdown } from "react-country-region-selector";
import { API } from "../../API";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VisaEnquiry() {
  const [vGrantNumber, setVGrantNumber] = useState("");
  const [country, setCountry] = useState("");
  const [dNumber, setDNumber] = useState("");
  const [dob, setDob] = useState("");
  const [dType, setDType] = useState("");
  const [rType, setRType] = useState("");

  let navigate = useNavigate();

  function GetEnquiry(e) {
    e.preventDefault();
    axios
      .get(`${API}/enquire-application`, {
        params: {
          dNumber,
          country,
          vGrantNumber,
          dob,
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("data", JSON.stringify(res.data));
        navigate("/visa-details");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <img src={logo} />
        <h1>VEVO for Visa Holders</h1>
      </div>
      <div className={classes.body}>
        <p className={classes.form_title}>Visa holder enquiry</p>
        <form className={classes.form} onSubmit={GetEnquiry}>
          <p>
            Please complete the following details to view your visa
            entitlements.
          </p>
          <p>Fields marked * must be completed.</p>
          <div className={classes.input_ctn}>
            <p>Document type</p>
            <select value={dType} onChange={(e) => setDType(e.target.value)}>
              <option value="Please choose a document type">
                Please choose a document type
              </option>
              <option value="DFTTA">DFTTA</option>
              <option value="ImmiCard">ImmiCard</option>
              <option value="Passport">Passport</option>
              <option value="PLO56 (M56)">PLO56 (M56)</option>
              <option value="Titre de Voyage">Titre de Voyage</option>
            </select>
          </div>

          {dType === "Passport" && (
            <div className={classes.input_ctn}>
              <p>Reference type</p>
              <select value={rType} onChange={(e) => setRType(e.target.value)}>
                <option value="1">Please choose a reference type</option>
                <option value="2">Transaction Reference Number (TRN)</option>
                <option value="3">Visa Evidence Number</option>
                <option value="4">Visa Grant Number</option>
                <option value="5">Password</option>
              </select>
            </div>
          )}

          {rType === "4" && dType === "Passport" && (
            <>
              <div className={classes.input_ctn}>
                <p>Visa Grant Number</p>
                <input
                  type="text"
                  value={vGrantNumber}
                  onChange={(e) => setVGrantNumber(e.target.value)}
                />
              </div>
              <div className={classes.input_ctn}>
                <p>Date of birth</p>
                <input
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                />
              </div>
              <div className={classes.input_ctn}>
                <p>Document number</p>
                <input
                  type="text"
                  value={dNumber}
                  onChange={(e) => setDNumber(e.target.value)}
                />
              </div>
              <div className={classes.input_ctn}>
                <p>Country of document</p>
                <CountryDropdown
                  className="input"
                  value={country}
                  onChange={(e) => setCountry(e)}
                />
              </div>
              <div className={classes.input_ctn}>
                <div className={classes.T_C}>
                  <p className={classes.link}>View Terms and Conditions</p>
                  <input type="checkbox" className={classes.checkbox} />
                  <span>I have read and agree to the terms and conditions</span>
                </div>
              </div>
              <div className={classes.btn_ctn}>
                <button type="button">Clear</button>
                <button>Submit</button>
              </div>
            </>
          )}
        </form>
        <div className={classes.footer}>
          <p>Accessibility</p>
          <p>Online Security</p>
          <p>Privacy</p>
          <p>Copyright & Disclaimer</p>
          <p>Change Password</p>
        </div>
      </div>
    </div>
  );
}

export default VisaEnquiry;
