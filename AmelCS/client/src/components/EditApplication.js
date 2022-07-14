import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import countryList from "./CountryData";

function EditApplication({ data, show }) {
  const [username, setUsername] = useState(null);
  const [applicationType, setApplicationType] = useState(null);
  const [applicationNumber, setApplicationNumber] = useState(null);
  const [applicantName, setApplicantName] = useState(null);
  const [dateOfSubmit, setDateOfSubmit] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(null);
  const [messages, setMessages] = useState(null);
  const [action, setAction] = useState(null);
  const [UCI, setUCI] = useState(null);
  const [country, setCountry] = useState(null);
  const [passportNumber, setPassportNumber] = useState(null);
  const [biometricsNumber, setBiometricsNumber] = useState(null);
  const [DOBEnroll, setDOBEnroll] = useState(null);
  const [lmia, setLmia] = useState(null);
  const [province, setProvince] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  console.log(applicationType);

  function Delete() {
    setErrorMsg("Deleting...");
    axios
      .post("https://canada-main.herokuapp.com/delete-application", {
        ID: data._id,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      });
  }

  function Update() {
    setErrorMsg("Submitting...");
    axios
      .post("https://canada-main.herokuapp.com/update-application", {
        ID: data._id,
        username: username !== null ? username : data.username,
        atype: applicationType !== null ? applicationType : data.atype,
        anumber: applicationNumber !== null ? applicationNumber : data.anumber,
        aname: applicantName !== null ? applicantName : data.aname,
        datesubmit: dateOfSubmit !== null ? dateOfSubmit : data.datesubmit,
        currentstatus:
          currentStatus !== null ? currentStatus : data.currentstatus,
        messages: messages !== null ? messages : data.messages,
        action: action !== null ? action : data.action,
        uci: UCI !== null ? UCI : data.uci,
        pNumber: passportNumber !== null ? passportNumber : data.pNumber,
        country: country !== null ? country : data.country,
        bnumber: biometricsNumber !== null ? biometricsNumber : data.bnumber,
        dobenroll: DOBEnroll !== null ? DOBEnroll : data.dobenroll,
        lmia: lmia !== null ? lmia : data.lmia,
        province: province !== null ? province : data.province,
      })
      .then((res) => {
        setErrorMsg(res.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      })
      .catch((error) => {
        setErrorMsg(error.response.data["message"]);
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      });
  }

  return (
    <Main>
      <div className="ctn">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Application Type</th>
              <th>Application Number</th>
              <th>Applicant Name</th>
              <th>Date Submitted</th>
              <th>Current Status</th>
              <th>Messages</th>
              <th>Action</th>
              <th>UCI</th>
              {/* <th>Passport Number</th>
              <th>Country</th> */}
              <th>Biometrics Number</th>
              <th>Date of Biometrics</th>
              {/* <th>LMIA Validity</th>
              <th>Province of Employment</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <input
                type="text"
                value={username !== null ? username : data.username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="text"
                value={applicationType !== null ? applicationType : data.atype}
                onChange={(e) => setApplicationType(e.target.value)}
              />

              <input
                type="text"
                value={
                  applicationNumber !== null ? applicationNumber : data.anumber
                }
                onChange={(e) => setApplicationNumber(e.target.value)}
              />

              <input
                type="text"
                value={applicantName !== null ? applicantName : data.aname}
                onChange={(e) => setApplicantName(e.target.value)}
              />

              <input
                type="text"
                value={dateOfSubmit !== null ? dateOfSubmit : data.datesubmit}
                onChange={(e) => setDateOfSubmit(e.target.value)}
              />

              <input
                type="text"
                value={
                  currentStatus !== null ? currentStatus : data.currentstatus
                }
                onChange={(e) => setCurrentStatus(e.target.value)}
              />

              <input
                type="text"
                value={messages !== null ? messages : data.messages}
                onChange={(e) => setMessages(e.target.value)}
              />

              <input
                type="text"
                value={action !== null ? action : data.action}
                onChange={(e) => setAction(e.target.value)}
              />

              <input
                type="text"
                value={UCI !== null ? UCI : data.uci}
                onChange={(e) => setUCI(e.target.value)}
              />

              {/* <input
                type="text"
                value={passportNumber !== null ? passportNumber : data.pNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
              />

              <select
                value={country !== null ? country : data.country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countryList.map((country, index) => (
                  <option key={index}>{country}</option>
                ))}
              </select> */}

              <input
                type="text"
                value={
                  biometricsNumber !== null ? biometricsNumber : data.bnumber
                }
                onChange={(e) => setBiometricsNumber(e.target.value)}
              />

              <input
                type="text"
                value={DOBEnroll !== null ? DOBEnroll : data.dobenroll}
                onChange={(e) => setDOBEnroll(e.target.value)}
              />

              {/* <input
                type="text"
                value={lmia !== null ? lmia : data.lmia}
                onChange={(e) => setLmia(e.target.value)}
              />

              <input
                type="text"
                value={province !== null ? province : data.province}
                onChange={(e) => setProvince(e.target.value)}
              /> */}
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={Delete}>Delete</button>
          <button className="button" onClick={Update}>
            Update
          </button>
          <button className="button" onClick={() => show(false)}>
            Close
          </button>
        </div>
      </div>
      {showPopup && (
        <p onClick={() => setShowPopup(false)} className="popup">
          {errorMsg}
        </p>
      )}
    </Main>
  );
}

export default EditApplication;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: white;
  display: grid;
  place-items: center;

  .ctn {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  table {
    margin-top: 25px;
    border: 2px solid #999;
    font-size: 0.9rem;
    display: flex;
    border-collapse: collapse !important;
  }
  thead,
  tbody {
    border: none !important;
  }

  th,
  input,
  select {
    width: 250px;
    height: 35px;
    border: 1px solid #ddd;
    display: grid;
    place-items: center;
    justify-content: left;
    padding-left: 20px;
    outline: none;
  }

  tr {
    display: flex;
    flex-direction: column;
  }

  button {
    font-size: 1rem;
    margin: 15px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #f7786b;
    background-color: #f7786b;
    color: black;
    cursor: pointer;
  }

  .button {
    border: 1px solid #418af2;
    background-color: #418af2;
    color: white;
  }
`;
